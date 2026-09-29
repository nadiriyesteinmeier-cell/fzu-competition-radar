window.PAPER_DATA_UPDATED_AT = "2026-09-29";
window.PAPER_ITEMS = [
  {
    "id": "2609.35770",
    "title": "FurE: Efficient Instance-Specific 3D Fur Reconstruction without Animal-Fur Datasets",
    "authors": [
      "Srinjay Sarkar",
      "Prakhar Kaushik",
      "Soumava Paul",
      "Alan Yuille"
    ],
    "abstract": "Realistic and editable animal fur reconstruction from multi-view images is challenging due to fine-scale detail, self-occlusion and obfuscation, and, unlike human hair, the lack of animal-fur datasets. Fur usually covers most of an animal's body, with large inter-species and intra-species variability. We present FurE, an efficient strand-based animal fur reconstruction method that recovers a per-strand, editable groom by optimizing a root-conditioned latent field, decoded into strand geometry via a PCA-based decoder. We reconstruct a defurred animal body using local fur-thickness cues from a surface-constrained Gaussian Frosting representation together with part-based priors. We further show that a PCA-based decoder learned from human-hair strand data can alleviate animal-data scarcity while enabling substantially faster optimization. FurE achieves a 10x speedup in strand training over current SOTA dense per-strand optimization while retaining strand fidelity and generalizing across synthetic and real-world sequences, with quantitative and qualitative validation despite the reduction in training time.",
    "published": "2026-09-28T17:59:58Z",
    "updated": "2026-09-28T17:59:58Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.GR"
    ],
    "url": "https://arxiv.org/abs/2609.35770"
  },
  {
    "id": "2609.35769",
    "title": "Telescopic Language Models",
    "authors": [
      "Zhilin Guo",
      "Boqiao Zhang",
      "Hakan Aktas",
      "Kyle Fogarty",
      "Nursena Koprucu Aslan",
      "Wenzhao Li",
      "Canberk Baykal",
      "Albert Miao",
      "Siyu Hong",
      "Yixiao Liu",
      "Adam Wu",
      "Ashish Kumar Singh",
      "Sakar Khattar",
      "Chenliang Zhou",
      "Weihao Xia",
      "Cristina Nader Vasconcelos",
      "Cengiz Oztireli"
    ],
    "abstract": "One deployed language model must often serve many compute budgets, yet serving each budget still means a separate training or compression run per point. We train a Telescopic Language Model (TLM) to be that continuum: a nested-capacity Transformer supervised by stochastic prefix supervision with a full anchor. At every step, one randomly truncated prefix of the capacity axis is trained against the full next-token target, alongside one full-capacity pass, so the trained artifact is a valid language model at every depth. Two forward-backward passes per step, no architectural change, nothing extra at inference. Fixed-exit suites such as Matryoshka Language Model Suites (MLMS) occupy one point in this design space, and the point has a cost: supervising only a few fixed exits leaves the nested model at chance level everywhere else (perplexity 10^2-10^5 in our baselines). On a 200M proxy suite (20B FineWeb-Edu tokens, identical data stream for all methods), a single TLM run is a valid language model at every one of its twenty layer prefixes, in perplexity and on perplexity-sensitive downstream tasks, reducing the area under the quality-budget curve by 43-44% relative to the fixed-exit suites while matching them at full capacity, at ~12% lower GPU cost per run. The prefix sampling density is a dial: concentrating it on a few depths recovers fixed-exit quality there at the price of the continuum, so the operating points become a training-time choice rather than an architectural one. These results indicate that the training objective, not the nesting itself, is what makes a model elastic.",
    "published": "2026-09-28T17:59:53Z",
    "updated": "2026-09-28T17:59:53Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.35769"
  },
  {
    "id": "2609.35768",
    "title": "PDMD: Projected Distribution Matching Distillation for Video Diffusion Models",
    "authors": [
      "Zimo Wang",
      "Junkun Yuan",
      "Angtian Wang",
      "Haotian Yang",
      "Canyu Zhang",
      "Siyuan Yuan",
      "Xingchang Huang",
      "Bo Liu",
      "Yizhi Wang",
      "Yiding Yang",
      "Chongyang Ma",
      "Gordon Guocheng Qian"
    ],
    "abstract": "Modern video diffusion models require tens of denoising evaluations over long spatiotemporal token sequences. Distribution Matching Distillation (DMD) reduces the number of function evaluations (NFE) to just a few. However, DMD samples can degrade during training, exhibiting progressive oversaturation and artifacts. We trace this instability to critic errors, which enter successive student updates and accumulate over time. We introduce Projected Distribution Matching Distillation (PDMD) to filter critic errors. PDMD projects out the component of the DMD update parallel to the student-critic endpoint residual. At a fixed noisy query, we prove that this residual is an unbiased estimate of the critic's endpoint error. Under high-dimensional assumptions, this projection removes a constant fraction of critic error while discarding only a vanishing fraction of ideal DMD signal. Empirically, the projection stabilizes training and improves sample quality where DMD degrades and develops unnatural textures. PDMD requires only a one-line code change to DMD, with no extra loss, network, data, model pass, or multi-stage training. With Wan2.1, PDMD achieves a VBench total score of 83.73 at 4 NFE, surpassing matched DMD by 1.03 points. On MiniMax-H3 joint video-audio generation, PDMD achieves a VideoGen-Eval visual total score of 83.17, 0.41 points above the strongest distilled baseline. PDMD also achieves the best performance on all six audio metrics among the compared 4-NFE models. Qualitative comparisons and user studies favor PDMD over the distilled baselines in visual quality, motion, and audio quality. Code and models are available at https://pdmd2026.github.io/.",
    "published": "2026-09-28T17:59:52Z",
    "updated": "2026-09-28T17:59:52Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.35768"
  },
  {
    "id": "2609.35767",
    "title": "Learning Native Reflection in Unified Models with Interleaved Reinforcement Learning",
    "authors": [
      "Yijia Fan",
      "Ziqi Huang",
      "Zhongang Cai",
      "Yan Li",
      "Zimo Wen",
      "Wanqi Yin",
      "Haiwen Diao",
      "Ziwei Liu"
    ],
    "abstract": "Unified multimodal models can both look at and render images, so in principle they can repair their own generations: diagnose what an image gets wrong, revise it, observe the result, and diagnose again. Whether a revision helps is known only after it is rendered, so the reflection text and the image generation must be learned jointly, over the whole loop. Supervised fine-tuning (SFT) on reflection trajectories gives a cold start but does not find the high-success repair paths, and naive RL that optimizes only the renderer or only one head leaves most of the gain untapped. We introduce UMM-Reflection, which applies reinforcement learning (RL) to complete reflection trajectories inside one unified model: sibling trajectories share one initial image, so the group-relative advantage compares reflection strategies, and one trajectory-level advantage updates both the reflection tokens and the flow-based revisions, avoiding the combinatorial blow-up of per-round credit assignment. Unlike single-round editing or pipelines with an external critic, credit flows across rounds and to both roles of the same model, and no verifier is needed at inference. On BAGEL, UMM-Reflection improves GenEval by 12.05 points over SFT, and the gains transfer to WISE (+10.97), OneIG-Bench (+3.48), and T2I-CompBench++ (+4.63), none of which is used in training.",
    "published": "2026-09-28T17:59:36Z",
    "updated": "2026-09-28T17:59:36Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.35767"
  },
  {
    "id": "2609.35764",
    "title": "Reliability-Gated Fusion of Consumer Head and Foot IMUs for Lower-Body 3D Pose",
    "authors": [
      "Zhilin Guo",
      "Boqiao Zhang",
      "Oszkár Urbán",
      "Josef Bengtson",
      "Hakan Aktas",
      "Wenzhao Li",
      "Siyu Hong",
      "Kyle Fogarty",
      "Chenliang Zhou",
      "Ali Senguel",
      "Cengiz Oztireli"
    ],
    "abstract": "Sparse inertial pose estimation promises camera-free motion capture from consumer devices, but consumer sensors are unreliable: firmware-fused orientations are biased, mounting varies between sessions, and streams drift or drop out. On a new 35-take single-subject benchmark pairing an earbud head inertial measurement unit (IMU) with two smart-insole foot IMUs (SAM-3D-Body pseudo-ground-truth labels), we show the reliability problem is channel-level: a channel ablation isolates foot acceleration as the most informative input (66.6 mm vs. 79.0 mm head-only) and the firmware-fused foot orientation as the liability that destroys the gain. We therefore let the model learn how much to trust each channel of each stream: one temporal gate per stream per channel block, trained with an auxiliary reliability objective on synthetically corrupted pretraining data. The channel-gated model is the most accurate of our learned fusion arms on clean data (69.4 mm vs. 83.7 static, 86.6 ungated) and under every simulated fault (bias in training; drift, dropout eval-only); its gates suppress the natively biased foot-orientation channels on clean real data without test-time supervision and flag dropout bursts at 0.92-0.999 AUROC. Two contrasts: dropping a channel known a priori to fail is flat across foot faults but collapses when an unanticipated stream fails (head dropout: 92.9 vs. 79.3 mm); and a fine-tuned HMD-Poser is more accurate on clean data (64.4 mm) and nominally under drift, with no significant paired difference under bias or dropout, but a larger worst-case degradation from clean (+16.1 vs. +3.5 mm, single seed). Learning to gate reliability instead of sensor count is the lever for deployable sparse inertial capture. Code is available at https://github.com/ZhilinGuo/reliability-gated-imu-fusion.",
    "published": "2026-09-28T17:59:22Z",
    "updated": "2026-09-28T17:59:22Z",
    "categories": [
      "cs.CV",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2609.35764"
  },
  {
    "id": "2609.35760",
    "title": "TokenCast: Forecasting Token Consumption During LLM Agent Execution",
    "authors": [
      "Chaoqian Ouyang",
      "Ling Yue",
      "Libin Zheng",
      "Huanghui Guo",
      "Shengxiang Xu",
      "YiShu Wang",
      "Ran Li",
      "Jian Yin",
      "Shaowu Pan",
      "Shimin Di"
    ],
    "abstract": "When a large language model (LLM) agent executes the same task, token consumption can vary by over an order of magnitude across runs. The agent chooses its next steps based on tool feedback and intermediate results, while the growing context steadily inflates the input size of every subsequent call. The total consumption of a task is therefore hard to predict before execution and the prediction must be revised as the run unfolds. In this paper, we propose TokenCast, which learns a composable cost representation for each execution segment, recording its own consumption and the context growth it introduces. Composing adjacent segments yields a cumulative estimate that captures the extra input cost incurred when context from earlier segments is re-read by every later call. As execution unfolds, newly observed evidence refreshes the forecast, requiring no additional LLM calls and incurring a mean cumulative prediction time of 32.8 ms per run on SWE-bench Verified. Across 4 task suites and 6 agent models, TokenCast's mean absolute error reduction against the strongest comparator averages 14.5% over 96 evaluated combinations. In offline budget-control replay, TokenCast uses 21.3% fewer tokens on average than a fixed-budget policy at matched trace completion. The code is available at https://github.com/DEFENSE-SEU/TokenCast.",
    "published": "2026-09-28T17:59:09Z",
    "updated": "2026-09-28T17:59:09Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.SE"
    ],
    "url": "https://arxiv.org/abs/2609.35760"
  },
  {
    "id": "2609.35751",
    "title": "How to Loop MoE: Flatten the Experts, Untie the Attention",
    "authors": [
      "Shouren Wang",
      "Chuang Ma",
      "Mohsen Hariri",
      "Debargha Ganguly",
      "Wang Yang",
      "Xiaoqing Tong",
      "Qianying Liu",
      "Xiaotian Han",
      "Vipin Chaudhary"
    ],
    "abstract": "Looped Transformers reuse one block of layers several times: by spending extra computation they push a model of fixed size further, and so use its parameters more fully; while sparse mixture-of-experts (MoE) models activate only a few of many experts for each token. Looped MoE bridges these two design philosophies and gives MoE models new potential for better expert usage, but it raises a question: how to loop a MoE? We answer it with Foil. With the expert parameters and the expert compute per token held fixed, Foil (1) flattens the experts, halving the expert layers, doubling the experts per layer and doubling the passes, so that every routing decision chooses from a larger pool, and (2) unties the attention, giving each pass its own attention parameters while the experts and routers stay shared. Experiments show that Foil clearly outperforms the unflattened looped baseline: at 20B tokens every Foil model has lower pretraining loss than the baseline; at 100B tokens the loss improves monotonically with the degree of flattening, the most flattened Foil ending 0.012 nat below the baseline at equal parameters and compute, with downstream accuracy on par or better; untying the attention also yields more balanced and more confident routing at equal shape. Our ablations analyse why Foil works and turn the findings into design guidance for looped MoE: the returns of looping and of widening the expert layers amplify each other, routing confidence tracks healthy expert use better than load balance, and a sparse looped MoE should therefore use more experts per layer and more passes. Code and configurations are available at https://github.com/SR-A-W/how-to-loop-moe.",
    "published": "2026-09-28T17:58:03Z",
    "updated": "2026-09-28T17:58:03Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2609.35751"
  },
  {
    "id": "2609.35750",
    "title": "KV-streams for Efficient Compaction in Agentic Reinforcement Learning",
    "authors": [
      "Emiliano Penaloza",
      "Dane Malenfant",
      "Dheeraj Vattikonda",
      "Roger Creus Castanyer",
      "Siddarth Venkatraman",
      "Abhay Puri",
      "Jonathan Light",
      "Matthew James Sargent",
      "Augustine N. Mavor-Parker",
      "Massimo Caccia",
      "Lucas Caccia",
      "Glen Berseth",
      "Esmeralda S. Whitammer",
      "Alessandro Sordoni",
      "Minseon Kim",
      "Marc-Alexandre Côté",
      "Laurent Charlin",
      "Guillaume Lajoie"
    ],
    "abstract": "Scaling the horizon of agentic LLMs is bottlenecked by the need to fit ever longer context traces in GPU memory. Context compaction has been the most popular mechanism to alleviate this issue, keeping GPU memory constant for a given trace. Unfortunately, most compaction strategies rely on prefilling the LLM context many times over, hindering training throughput. To alleviate this bottleneck and enable efficient trainable compaction, we propose KV-streams, a plug-and-play strategy compatible with any compaction strategy that substantially increases throughput while showing no evidence of hindering performance. KV-streams enable scalable compaction by streaming the KV cache forward rather than flushing it after each compaction. We show that KV-streams enable three different compaction strategies, achieving a 2.6 to 5x wall-clock speedup in training. Beyond efficiency, we find that the streamed KV cache can act as a recurrent state, carrying forward information that has long since disappeared from the context. Specifically, in a controlled setting we show that, contrary to prior work, RL alone is all that is needed for this behavior to emerge. Overall, we show KV-streams to be an efficient and lightweight plug-and-play addition to any post-training pipeline.",
    "published": "2026-09-28T17:57:42Z",
    "updated": "2026-09-28T17:57:42Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.35750"
  },
  {
    "id": "2609.35745",
    "title": "Copy the Same, Distill the Difference: Initializing Linear Vision Transformers",
    "authors": [
      "Huaiyuan Qin",
      "Muli Yang",
      "Gabriel James Goenawan",
      "Shiqi Huang",
      "Min Kass Chong",
      "Wahyu Wiratama",
      "Peng Hu",
      "Chen Gong",
      "Wu Liu",
      "Xi Peng",
      "Chun Jian Ho",
      "Hongyuan Zhu"
    ],
    "abstract": "Linear Vision Transformers (ViTs) are designed to replace the attention in Softmax ViTs with the linear-complexity attention operator for more efficient token routing, but they require from-scratch pre-training and typically underperform the original Softmax version. How to initialize linear ViTs both efficiently and effectively still remains unclear. In this work, we explicitly ask: given that most foundation ViTs are built on the mainstream Softmax attention, can linear ViTs benefit from their pre-trained weights? Recent works on Attention Transfer show that attention is the effective transferable component between Softmax ViTs, suggesting attention alone suffices for such reuse. However, we find the opposite for Softmax-to-linear transfer. The attention weights are operator-specific: copying them barely helps, and is sometimes even worse than random initialization. Instead, the attention's token routing behavior can be recovered through distillation with a proper loss design, letting linear ViTs reduce the gap and even match Softmax ones. In contrast, the MLP weights, which carry the learned representation, are operator-agnostic: they can be transferred by simple direct copying, which already carries most of the benefit of the pre-trained weights. Thus, copying MLPs can serve as an effective foundation for Softmax-to-linear transfer: paired with the distilled attention, linear ViTs eventually close the remaining gap and even surpass Softmax ones. These findings hold consistently across various linear ViT variants, different model sizes, and diverse datasets. We hope this study deepens the understanding of reusing pre-trained weights across attention operators: copy what stays the same and distill what differs, to recover the benefit across the Softmax-to-linear boundary.",
    "published": "2026-09-28T17:55:21Z",
    "updated": "2026-09-28T17:55:21Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.35745"
  },
  {
    "id": "2609.35744",
    "title": "FinAutoRubric: Expert-Guided Automatic Rubric Generation for Evaluating Financial Research Agents",
    "authors": [
      "Hoyoung Lee",
      "Suyeol Yun",
      "Jack Haverty",
      "Yunju Cho",
      "Meesong Kim",
      "Daekyung Park",
      "Sumin Kim",
      "Jihoon Kwon",
      "Jasmine Jia Geng",
      "Andrew Chin",
      "Yin Luo",
      "Edward Tong",
      "Yu Yu",
      "Zach Golkhou",
      "Minkyu Kim",
      "Igor Halperin",
      "Young Cha",
      "Alejandro Lopez-Lira",
      "Chanyeol Choi",
      "Yongjae Lee"
    ],
    "abstract": "Evaluating finance research agents requires rubrics that reflect expert standards and fix the values correct as of an information cutoff. Expert-reviewed finance benchmarks rely on fixed, per-item rubrics, which are costly to extend and cannot encode each institution's own standard. In FinAutoRubric, experts specify reusable evaluation guidance, while agents and code carry out query-specific rubric generation, review, and validation. This expert guidance governs every agent, as prompts and as rules that code enforces, and a Task Bank of reusable criteria carries it across tasks. In long-horizon loops that follow the expert guidance, a writer agent researches every expected value and a reviewer agent verifies it, and failures escalate to a human. On three expert-authored finance benchmarks, its rubrics track expert scoring as closely as the strongest evaluated generator while stating the expert rubric's expected value for more criteria, their scores agree with human grading, and in-house analysts prefer them in a blind review. The released 100-query FinAutoRubric Benchmark, built from in-house analysts' key questions across 78 tasks and eight asset classes, shows that rubrics from an earlier model generation still leave headroom for a later one.",
    "published": "2026-09-28T17:55:06Z",
    "updated": "2026-09-28T17:55:06Z",
    "categories": [
      "cs.AI",
      "q-fin.CP"
    ],
    "url": "https://arxiv.org/abs/2609.35744"
  },
  {
    "id": "2609.35743",
    "title": "InfiniHand: Streaming World-Space Hand Motion Estimation from Egocentric Video",
    "authors": [
      "Kerui Ren",
      "Kaiwen Song",
      "Weiguang Zhao",
      "Yuxi Wang",
      "Yufei Liu",
      "Bo Dai",
      "Haoyu Guo",
      "Chunhua Shen",
      "Mulin Yu",
      "Tao Lu",
      "Junting Dong"
    ],
    "abstract": "World-space hand motion estimation from egocentric video requires recovering 3D articulated hand geometry while tracking camera egomotion. Existing approaches heavily rely on cascading independent hand pose estimators and SLAM systems, resulting in error accumulation, complex pipelines, and severe computational overhead. To address these limitations, we present InfiniHand, an end-to-end streaming feed-forward framework that jointly estimates MANO parameters, camera trajectories, and hand locations directly from uncalibrated egocentric video. InfiniHand integrates persistent spatiotemporal memory with hand-centered visual features, explicitly coupling camera motion with local hand geometry within a unified architecture. We train InfiniHand in two progressive stages by first learning robust camera-space hand priors and then extending to streaming world-space reconstruction. To support this process, we aggregate a pretraining corpus of approximately 5,000 hours of egocentric data across multiple public datasets. Extensive evaluations demonstrate that InfiniHand outperforms state-of-the-art baselines on in-domain benchmarks, achieving a 21.4% reduction in ARCTIC PA-p compared to ViDiHand while substantially mitigating world-space drift. Furthermore, InfiniHand generalizes robustly to in-the-wild videos and operates at 11.19 FPS, delivering more than twice the throughput of HaWoR.",
    "published": "2026-09-28T17:54:32Z",
    "updated": "2026-09-28T17:54:32Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.35743"
  },
  {
    "id": "2609.35741",
    "title": "Shockingly Simple Self-retrospection Improves Agentic Models Without RL",
    "authors": [
      "Jonathan Light",
      "Christopher Zhang Cui",
      "Jeonghye Kim",
      "Roger Creus Castanyer",
      "Emiliano Penaloza",
      "Zhengyan Shi",
      "Alessandro Sordoni",
      "Marc-Alexandre Côté",
      "Xingdi Yuan",
      "Minseon Kim"
    ],
    "abstract": "People learn not only by repeating successful actions, but also by recounting and explaining their experiences, revising their understanding to guide future behavior. Can a language-model agent improve its future actions by training only on explanations of its own experience? We investigate this question by studying Retrospection-Only Fine-Tuning (ROFT), a minimal online procedure designed to isolate the effect of explanation-only training on subsequent behavior. The agent attempts a task, observes available feedback, generates a retrospective explanation, and is fine-tuned with a next-token prediction loss on the explanation tokens alone. The procedure uses neither an external teacher nor a reward-based policy update. In software-engineering experiments with Qwen3.5-4B, ROFT is trained on problems with mixed successful and unsuccessful base-model attempts. On held-out SWE-bench Verified and Pro, it reaches 49.2% and 26.8% solve rates after 20 updates without using a verifier, compared with GRPO's 48.0% and 25.3% after 40 updates in the evaluated runs, and makes faster early progress in training time and sampled attempts. It also learns to solve individual tasks on which all 64 sampled base-model attempts failed, showing that learning can begin without any initially successful trajectories. Behavioral analyses find that ROFT indirectly assigns credit to actions, encouraging good actions and discouraging incorrect ones. Moreover, prompting retrospections to emphasize more direct solutions yields shorter subsequent attempts even without an explicit length penalty. Together, these findings show that learning to explain can also improve learning to do, establishing self-generated retrospections as useful training targets and motivating further study of explanation-to-action transfer.",
    "published": "2026-09-28T17:54:24Z",
    "updated": "2026-09-28T17:54:24Z",
    "categories": [
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2609.35741"
  },
  {
    "id": "2609.34799",
    "title": "STRIDE: Automated Evaluation of Text-to-Trajectory Alignment across Diverse Contexts",
    "authors": [
      "Wanchun Ni",
      "Tao Qi",
      "Leonel Aguilar",
      "Jiugeng Sun",
      "Marlene Wagner",
      "Verena Zimmermann",
      "Mennatallah El-Assady"
    ],
    "abstract": "Language-conditioned trajectory generation is here, but its evaluation has not kept pace. Existing pedestrian trajectory metrics compare trajectories with real-world human data. This does not scale to text-to-trajectory generation across diverse contexts, as collecting human trajectories for every scenario is costly and infeasible. Moreover, pedestrian behavior is heterogeneous and context-dependent, with no single metric as the correct answer, and current evaluation frameworks are not transferable to this domain. These challenges make scalable, reliable evaluation difficult. We introduce STRIDE, the first framework for evaluating context alignment between scenario descriptions and pedestrian trajectories. STRIDE addresses these challenges through three design choices. First, we derive our VRDST evaluation protocol from sociological theories to define a complete evaluation space. Second, it decomposes high-level context into scenario-adaptive behavioral questions. Third, every question is resolved against a deterministic measurement tool library that yields reproducible answers. Together, STRIDE enables complete, verifiable, automated, and scalable evaluation across diverse contexts without requiring human trajectory data. We instantiate STRIDE in the crowd domain as STRIDE-Bench, comprising 1K scenarios, 6K behavioral questions, and 11K measurements with calibrated expected answers across 30 real-world maps. Comprehensive human validations show that STRIDE-Bench is consistent with human behavior and judgment, achieving 80% human agreement. We further evaluate several text-to-trajectory models, finding limited context-alignment capability and persistent challenges in fine-grained context conditioning. We believe that the STRIDE framework provides a first step toward principled evaluation of context-aligned pedestrian trajectory generation.",
    "published": "2026-09-28T10:01:45Z",
    "updated": "2026-09-28T10:01:45Z",
    "categories": [
      "cs.AI",
      "cs.CY"
    ],
    "url": "https://arxiv.org/abs/2609.34799"
  },
  {
    "id": "2609.34798",
    "title": "InfiMed2: A Generalist Medical Multimodal Foundation Model from Contextual Evidence and Stability-Aware Supervision",
    "authors": [
      "Guanghao Zhu",
      "Zeyu Liu",
      "Zhitian Hou",
      "Pengkai Wang",
      "Zhijie Sang",
      "Shuo Cai",
      "Yang Yu",
      "Yuanyi Wang",
      "Yanggan Gu",
      "Congkai Xie",
      "Jianmin Wu",
      "Hongxia Yang"
    ],
    "abstract": "Recent medical multimodal models have benefited from larger corpora, broader modality coverage, and stronger reasoning-oriented training, yet effective data design across continued pretraining (CPT) and post-training remains challenging. Medical sources vary substantially in structure, granularity, and information density, and their utility shifts as training progresses from broad knowledge acquisition to late-stage consolidation. Meanwhile, post-training is often dominated by short-form visual question answering, providing limited supervision for informative and answer-consistent explanations. We introduce InfiMed2, a family of 4B and 27B generalist medical multimodal foundation models built around stage-aware data design. We curate a 55.68B-token corpus that combines broad clinical knowledge with context-rich biomedical visual evidence through source-specific processing. Our CPT pipeline first adapts the vision encoder, then builds broad medical knowledge, and finally transitions to an evidence-focused data mixture during learning-rate decay. For supervised fine-tuning (SFT), we regenerate visual question-answering responses using answer stability, answer-masked reconstruction, and correctness-constrained selection to produce more informative and answer-consistent supervision. The 4B model is further optimized with reinforcement learning with verifiable rewards (RLVR). Across five medical multimodal benchmarks, InfiMed2-4B achieves 66.73% mean accuracy after RLVR, surpassing the larger Qwen3.5-9B, while InfiMed2-27B reaches 73.72%, the highest among the evaluated open-weight models.",
    "published": "2026-09-28T10:01:35Z",
    "updated": "2026-09-28T10:01:35Z",
    "categories": [
      "cs.CL",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.34798"
  },
  {
    "id": "2609.34795",
    "title": "Physics-Guided Spectral Distillation for Underwater Image Enhancement on Resource-Constrained Devices",
    "authors": [
      "Yifan Chen",
      "Kai He",
      "Ye Zheng",
      "Jijun Lu",
      "Zhe Sun",
      "Tao Chen"
    ],
    "abstract": "Underwater image enhancement is crucial for improving visual perception in marine applications. Existing underwater image enhancement studies mainly focus on enhancement quality and visual fidelity, while rarely considering real-time deployment capability, which is essential for resource-constrained underwater robots. To this end, we introduce a physics-guided spectral distillation (PSD) method, which reduces model capacity for real-time applications while maintaining the high performance of underwater image enhancement models. To decompose the outputs of teacher and student models, PSD adopts a multilevel Haar discrete wavelet transform. It transfers low-frequency color and illumination information as well as high-frequency structural details through band-specific objectives. Moreover, the distillation process of PSD is degradation-aware. We estimate degradation-aware weights through a physical head and combine them with ground-truth-guided reliability masks to selectively retain valuable teacher guidance. Experiments on the UIEB, LSUI, and EUVP datasets validate the effectiveness of the proposed method. Furthermore, we demonstrate the benefits of enhanced images for downstream perception tasks, including object detection. Deployment on a self-developed ROV further demonstrates its practical applicability in real-world underwater scenarios.",
    "published": "2026-09-28T10:01:21Z",
    "updated": "2026-09-28T10:01:21Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.34795"
  },
  {
    "id": "2609.34792",
    "title": "D$^2$-VLA: Dual-Memory Dual-Frequency Vision-Language-Action Model For Long Dynamic Manipulation",
    "authors": [
      "Zijian Ye",
      "Chengqi Wei",
      "Wei Huang",
      "Anlin Zheng",
      "Chunyu Zou",
      "Liangyu Wu",
      "Zikang Zhao",
      "Zhenjie Peng",
      "Yushuo Yang",
      "Shuman Zhao",
      "Zhongrui Wang",
      "Xiaojuan Qi"
    ],
    "abstract": "Long-horizon manipulation requires robots to remember cues that are no longer in view while responding to moving objects. Yet vision-language-action (VLA) policies often rely on the latest observation, and refreshing their visual context typically requires another costly vision-language model (VLM) pass. We present D$^2$-VLA, which combines dual memory and dual-frequency control at the KV-cache interface of a pretrained VLA. D$^2$-VLA uses block-wise causal KV caching to encode observations incrementally and, guided by distinct temporal attention patterns, constructs separate historical KV read views for the VLM and action expert. Between periodic VLM updates, a gated adapter incorporates fresh visual features into the latest history-conditioned KV block, while a short fast-memory queue supports action replanning. We introduce DOMINO-Long, a ten-task benchmark requiring robots to use earlier visual cues when manipulating moving objects. D$^2$-VLA achieves complete-task success rates of 29.3\\% on DOMINO, compared with 9.6\\% for $π_{0.5}$ and 17.2\\% for PUMA, and 60.0\\% on DOMINO-Long, compared with 35.4\\% and 20.6\\%, respectively. It improves success rates on eight real-robot tasks and reaches 97.5\\% on LIBERO-Long and 74.3\\% on RoboTwin 2.0.",
    "published": "2026-09-28T10:00:58Z",
    "updated": "2026-09-28T10:00:58Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.34792"
  },
  {
    "id": "2609.34790",
    "title": "CoSec: Benchmarking Agent Security in Communities",
    "authors": [
      "Hao Chen",
      "Wenhui Dong",
      "Ye Chen",
      "Jiezhi Yao",
      "Chenbo Xia",
      "Yuwen Qu",
      "Renxiang Wang",
      "Fudong Yuan",
      "Camil Hamami",
      "Chenglong Pan",
      "Xinquan Yue",
      "Ziyu Wang",
      "Fengyu Ye",
      "Chenyang Si",
      "Caifeng Shan"
    ],
    "abstract": "LLM agents operate in persistent collaborative environments involving multiple users, communities, memories, files, and tools. Community boundaries may remain fixed or evolve with changes in membership, roles, composition, and relationships. Agents must complete legitimate tasks and prevent unauthorized disclosure of protected information. Existing evaluations do not fully examine these risks in agent systems. We introduce \\textbf{CoSec}, an executable benchmark for evaluating privacy and authorization enforcement in LLM agent systems operating within and across communities. CoSec contains 208 canonical scenarios spanning fixed and evolving boundaries, protected information belonging to the agent owner or other participants, and attacks through dialogue, environmental content, persistent memory, and composed workflows. CoSec executes complete agent systems with persistent sessions, memory, files and tools. It verifies information flows against the active authorization state using execution traces and artifacts. Across harness and model configurations, agents frequently complete benign tasks but violate privacy and authorization boundaries. Privacy behavior varies across harnesses, attack surfaces, and community states, revealing how memory, files, tools, and workflows can carry protected information beyond its authorized scope. These findings show that task utility does not imply privacy or authorization compliance and that authorization in community settings remains an unresolved security challenge for persistent LLM agents.",
    "published": "2026-09-28T10:00:05Z",
    "updated": "2026-09-28T10:00:05Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.34790"
  },
  {
    "id": "2609.34785",
    "title": "BEHAVE: Functional Behavior Modeling Enables Self-Improving Agents for Hardware Design and Verification",
    "authors": [
      "Yuheng Wu",
      "Berk Gokmen",
      "Sujeeth Jinesh",
      "Lauren McLane",
      "Aarav Wattal",
      "Qi Yang Huang",
      "Zhaozhuo Xu",
      "Thierry Tambe"
    ],
    "abstract": "Developing agents for hardware design and verification requires reliable correctness feedback. As a hardware specification may permit correct implementations with different latencies, matching design and reference outputs cycle by cycle can reject valid designs. To address this, we introduce BEHAVE, an agentic framework for multi-turn joint hardware design and verification through functional behavior modeling. We define Behavior IR to express task functionality as executable behavior models without prescribing implementation timing beyond the specification. The agent iteratively develops a register-transfer-level (RTL) design and a behavior model as the design's verification reference. Our evaluator, BEHAVE-Sim, checks both artifacts separately against a hidden golden behavior model using input stimuli generated by random sampling and solver-guided search. BEHAVE thus supports power, performance, and area (PPA) exploration across task-permitted latencies and microarchitectures. During training, the same evaluator provides verifiable reinforcement learning (RL) rewards from specification-behavior pairs without reference RTL. For self-improvement, the agent continually searches for high-level implementations relevant to its capability gaps, constructs and checks specification-behavior pairs, and trains on the expanded task pool. We release BEHAVE-Train and BEHAVE-Eval with 600 human-reviewed specification-behavior pairs for realistic hardware workloads. Starting from 60 seed tasks and acquiring 100 new tasks, self-improvement raises Qwen3.8-27B's RTL pass@1 on BEHAVE-Eval from 55.0% to 75.0%, reaching performance comparable to RL using a 540-task pool.",
    "published": "2026-09-28T09:57:29Z",
    "updated": "2026-09-28T09:57:29Z",
    "categories": [
      "cs.AI",
      "cs.AR",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.34785"
  },
  {
    "id": "2609.34784",
    "title": "Projective Normal Fields: A Convex Optimization Method for Constructing Smooth UDFs",
    "authors": [
      "Jiayi Kong",
      "Chen Zong",
      "Fei Hou",
      "Junhui Hou",
      "Wenping Wang",
      "Ying He"
    ],
    "abstract": "Constructing a smooth approximation of an unsigned distance field (UDF) from a raw point cloud is challenging because the input provides neither surface connectivity nor consistently oriented normals. Methods that directly learn a scalar UDF must also handle its non-differentiability on the zero level set and weak supervision away from the samples, which can lead to unstable optimization and spatial artifacts. We introduce Projective Normal Fields (PNFs), an orientation-free representation and convex optimization framework for estimating bidirectional normals from point positions alone. Each normal axis is encoded by a rank-one projector, which is invariant to normal reversal. We relax the non-convex set of hard projectors to its convex hull: the symmetric positive-semidefinite matrices with unit trace. Each soft tensor defines a local quadratic distance model and retains the relative weights of candidate normal axes. We estimate a coherent PNF by combining local tangent-plane fitting, soft-PCA anchoring, and overlap regularization on a fixed neighborhood graph. With positive anchoring weights, the objective is strongly convex and admits a unique global minimizer. Principal eigenvectors provide bidirectional normals, while the corresponding eigengaps provide spectral confidence indicators. We use these indicators to select and weight directional sources for heat diffusion, followed by Poisson integration to construct a regularized UDF approximation. By separating local geometry estimation from scalar-field construction, PNF avoids directly fitting the non-differentiable UDF. Experiments demonstrate reduced sensitivity to neighborhood size, competitive reconstruction under noise and outliers, and improved accuracy near non-manifold junctions. The project page is available at https://anonymous17777367.github.io/PNF-page/",
    "published": "2026-09-28T09:55:50Z",
    "updated": "2026-09-28T09:55:50Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.34784"
  },
  {
    "id": "2609.34782",
    "title": "CoHuB: A Simulation Benchmark for Multi-Humanoid Collaboration",
    "authors": [
      "Hyunjin Park",
      "Jebeom Chae",
      "Minwoo Park",
      "Sunghyun Park",
      "Hanjun Yoo",
      "Seoyeon Choi",
      "Soochul Yoo",
      "Joohwan Seo",
      "Sarmad Idrees",
      "Jae-Sang Hyun",
      "Jongmin Lee",
      "Roberto Horowitz",
      "Youngwoon Lee",
      "Jongeun Choi"
    ],
    "abstract": "Many physical tasks in human environments require collaboration, from assisting a partner to jointly manipulating an object. Yet, existing humanoid benchmarks largely focus on single-humanoid skills and lack evaluation of multi-humanoid collaboration under egocentric visual observations. We introduce CoHuB (Collaborative Multi-Humanoid Benchmark), a simulation benchmark for multi-humanoid collaboration under egocentric visual observations. CoHuB provides 10 tasks, eight with two humanoids and two with three humanoids, spanning diverse collaboration patterns. We also provide synchronized demonstrations collected through a multi-operator VR teleoperation pipeline, in which each operator controls one humanoid from its egocentric view. Experiments with representative visuomotor policies reveal substantial challenges across different forms of coordinated perception and control. CoHuB provides a foundation for developing and evaluating multi-humanoid collaboration policies.",
    "published": "2026-09-28T09:55:34Z",
    "updated": "2026-09-28T09:55:34Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.34782"
  },
  {
    "id": "2609.34781",
    "title": "When VLMs Trust Context: Evaluating Scene Text Recognition under Misleading Context",
    "authors": [
      "Yuxing Cheng",
      "Yuan Wu",
      "Yi Chang"
    ],
    "abstract": "Vision-language models (VLMs) can read text in natural scenes, but their predictions may be influenced by the surrounding context. When the printed text conflicts with what the scene suggests, a model may return a more plausible word instead of the shown text. We introduce SceneFaith, a benchmark of 781 generated scene images for studying this behavior. Each output is classified as Literal, Canonical, or Other, separating faithful transcription from context-consistent rewriting and ordinary recognition errors. Across 15 models from seven families, all models show rewriting on clear images, with rates ranging from 8.45\\% to 58.51\\%. Controlled experiments further show that surrounding context matters: removing surrounding scene information reduces rewriting and improves literal accuracy, while changing the scene around the same text patch can also change model outputs. Moreover, weakening the target text with blur increases rewriting. These results show that reliable scene-text recognition requires VLMs to balance visual character evidence with contextual information, preserving clear text while using context mainly when the visual evidence is uncertain.",
    "published": "2026-09-28T09:55:28Z",
    "updated": "2026-09-28T09:55:28Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.34781"
  },
  {
    "id": "2609.34780",
    "title": "Applying Language Models in medical Medicine: Recent Trends and Perspectives",
    "authors": [
      "Erik Aerts"
    ],
    "abstract": "The use and applicability of artificial intelligence (AI) in medical research and clinical practice has received increasing attention in the literature over recent years. The emergence of large language models (LLMs) has expanded discussions in regards to applications of AI within healthcare. While traditional deep learning based AI applications in medicine have often focused on specific and defined tasks, LLMs offer broader capabilities and flexibility in working with available data,. At the same time of writing, the integration of LLMs into medical settings raises important questions regarding their reliability, accuracy, transparency, safety, and appropriate role in a medical setting. This text presents and discusses recent talks and articles concerning the application of LLMs in medicine, with particular emphasis on their potential utility in research and clinical practice. It considers both the opportunities offered by these technologies and the challenges associated with their implementation, aiming to provide a perspective on the current and emerging role of LLMs within the medical field.",
    "published": "2026-09-28T09:53:51Z",
    "updated": "2026-09-28T09:53:51Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.34780"
  },
  {
    "id": "2609.34776",
    "title": "Page-Aware Retrieval-Augmented Generation for EvalLLM 2026: A Five-Variant Study on French PDFs",
    "authors": [
      "Abdelhak kelious"
    ],
    "abstract": "We study retrieval-augmented generation (RAG) for questions about French PDF documents when both the answer and its supporting document pages are evaluated. Five system variants add dense retrieval, rank fusion, reranking, and query decomposition to a BM25 baseline. On 595 challenge questions, the complete system scores 0.4450 MRR@10 and 0.4013 Recall@10, compared with 0.3430 and 0.2994 for BM25. Dense retrieval alone and a simple lexical--dense fusion both underperform BM25. Reranking improves the hybrid system, whereas adding query decomposition produces the largest further gain, with higher latency and more detected output artifacts. The complete system slightly exceeds the reported anonymous overall mean on two answer metrics but falls below it on most page-retrieval metrics. These results identify accurate page selection, rather than semantic retrieval in isolation, as the main opportunity for improvement in this setting.",
    "published": "2026-09-28T09:51:52Z",
    "updated": "2026-09-28T09:51:52Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.34776"
  },
  {
    "id": "2609.34772",
    "title": "Before the Token Commits: Trajectory-Level Benchmarking of Visual Hallucinations in Diffusion VLMs",
    "authors": [
      "Yadong Wang",
      "Siping Yue",
      "Yu Tian",
      "Chuanxing Geng",
      "Xiang Chen"
    ],
    "abstract": "Multimodal diffusion language models generate responses by iteratively unmasking tokens, making each answer the endpoint of a multi-step trajectory rather than an immediate commitment. Hallucination benchmarks built for autoregressive models evaluate only the final output, and therefore cannot determine whether an unsupported claim in diffusion VLMs appears late or has already stabilized before any answer token is revealed. We introduce DynaHall, a trajectory-level benchmark of annotation-backed binary visual propositions covering object existence, counting, attributes, and relations, with controlled hard negatives graded by visual prior. DynaHall is paired with a commitment-aware protocol that records the intermediate answer tendency at every unmasking step alongside the committed output. Across five diffusion VLMs from three architecture families, visual hallucination is settled before commitment: an unsupported answer is already the preferred state while the answer position is still masked, and later unmasking steps rarely reverse it, so the failure is not introduced at the write step. This holds across decoding schedules, answer formats, and open-ended generation. DynaHall also exposes failures hidden by final-output metrics, including counting and relation collapse, prior-driven false positives, and attribute errors whose direction changes by type. Guided by this diagnosis, PGS (Pre-commitment Gradient Steering) edits still-masked answer states to reduce false positives, bringing the affirmation rate close to balance, and transfers to another architecture without degrading general ability. DynaHall and PGS suggest that hallucination should be measured and mitigated along the generation trajectory of diffusion VLMs, not only at the final answer.",
    "published": "2026-09-28T09:50:37Z",
    "updated": "2026-09-28T09:50:37Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.34772"
  },
  {
    "id": "2609.33073",
    "title": "Algorithmic Harms Associated with Generative Model-Augmented Recommendation Systems",
    "authors": [
      "Christine Herlihy",
      "Xumei Xi",
      "Shloka Desai",
      "Kevin Bannerman Hutchful",
      "Pedro Silva"
    ],
    "abstract": "In this work, we consider algorithmic harms that may arise as generative models are incorporated into machine learning platforms. We argue that existing harm taxonomies and threat models require extension to (1) address novel causal drivers of well-studied representational and quality-of-service harms; and (2) anticipate and mitigate endogenous harms, such as sanitization, which may arise when system inputs are misaligned with the system designer's objectives, or the generative model's inductive priors. To this end, we introduce an expanded taxonomy of algorithmic harms associated with the use of generative models in non-conversational recommendation systems. In addition, we offer a causal analysis of how problematic subsets of the (input, output) joint distribution can arise, in an effort to inform harms detection and mitigation efforts.",
    "published": "2026-09-27T01:08:41Z",
    "updated": "2026-09-27T01:08:41Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.CL",
      "cs.IR"
    ],
    "url": "https://arxiv.org/abs/2609.33073"
  },
  {
    "id": "2609.33066",
    "title": "Zero-Storage Procedural Neural Synthesis via Boundary Dynamics: Formal Verification in Lean 4 and Bare-Metal Gauntlet Validation",
    "authors": [
      "Volkan Dağlı",
      "Zerrin Dağlı",
      "Dağhan Dağlı"
    ],
    "abstract": "Contemporary neural inference architectures rely on dense floating-point weight matrices stored in high-bandwidth memory (VRAM), incurring severe memory-wall bottlenecks and preventing native execution inside deterministic virtual machines like the Ethereum Virtual Machine (EVM). Verifying termination and arithmetic invariants for recursive dynamical systems over continuous domains is generally undecidable in the Blum-Shub-Smale model. Here, we present the formal verification and bare-metal empirical validation of WERR (Waves & Errors) and Phase III Orbital Error Dynamics (OED), a non-tensor decision paradigm that procedurally synthesizes non-linear decision boundaries on demand from a 24-byte coordinate seed $Θ= (c_x, c_y, \\text{zoom})$ along the boundary of the Mandelbrot set ($\\partial\\mathcal{M}$). By projecting the recurrence $z_{n+1} = z_n^2 + c$ onto the modular residue ring $\\mathbb{Z}/9\\mathbb{Z}$ and the fixed-point domain $\\mathbb{Q}_{16.16}$, we establish ten machine-verified theorems in Lean 4 (v4.34.1) with Mathlib4 and zero unproven conjectures (sorry): proving $\\mathcal{I}_3 = \\{0,3,6\\} \\subset \\mathbb{Z}/9\\mathbb{Z}$ ideal closure, universal fuel-bounded halting ($\\le 9$ and $\\le 12$ steps), absence of $\\mathbb{Q}_{16.16}$ square overflow below $2^{63}-1$, non-constant boundary escape sensitivity, and a parametric EVM gas bound ($\\le 22,557 \\le 24,000$ gas). Evaluated on a 40-core Dual Intel Xeon server, the vectorized 36-iteration CPU kernel processes 100,000 decisions in 6.49 s (15,397 decisions/s, 0 Bytes VRAM, 15.15x speedup), while a sigmoidal outlier gate suppresses 100.00% of adversarial spikes while preserving 89.60% of clean baseline signals.",
    "published": "2026-09-27T00:56:22Z",
    "updated": "2026-09-27T00:56:22Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.CR",
      "cs.LO"
    ],
    "url": "https://arxiv.org/abs/2609.33066"
  },
  {
    "id": "2609.33061",
    "title": "LLM sequential decision making under uncertainty in biochemical domains",
    "authors": [
      "Mattias Akke",
      "Soojung Yang",
      "Jurgis Ruža",
      "Sathya Edamadaka",
      "Rafael Gómez-Bombarelli"
    ],
    "abstract": "Large language models (LLMs) are increasingly used to drive scientific discovery. Understanding how LLMs make decisions from new data and memory of the literature is vital before trusting them to design experiments under tight experimental budgets. However, their decision strategies are invisible in the current performance scores used to evaluate research agents. Here, we benchmark five frontier LLMs in a Bayesian Optimization setting against published statistical baselines on seven combinatorial datasets spanning protein engineering, reaction optimization, molecular design, peptide self-assembly, and catalysis. Performance is paired with direct measurements of model beliefs and actions, enabling highly resolved behavior analysis. A prompt ablation that progressively strips context separates memorization from chemical reasoning and from bare categorical optimization. Prior chemical knowledge helps in expectation, but with high variance and occasionally even harms performance. No configuration tested decisively beats a mean statistical baseline across domains. Belief-movement and Martingale diagnostics, corrected here for a measurement-noise bias that mislabels rational agents as irrational, show that models overreact to incoming data rather than entrenching on their priors in the contexts studied here. Interestingly, while LLM actions are exploitative, models sincerely intend to explore and consistently act on that intent. This failure is a competence gap arising from context-stickiness. Removing in-context history restores exploration, indicating that priors and data must be decoupled to achieve effective LLM-driven discovery.",
    "published": "2026-09-27T00:49:09Z",
    "updated": "2026-09-27T00:49:09Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.33061"
  },
  {
    "id": "2609.33055",
    "title": "Large Language Models Substantially Compress Well-Being Inequality but Largely Preserve Its Socioeconomic Structure",
    "authors": [
      "Nattavudh Powdthavee"
    ],
    "abstract": "Research using large language models (LLMs) to generate synthetic populations has repeatedly shown that model outputs compress the diversity of human experience. This has raised doubts about whether LLM-generated data can capture meaningful differences within populations. We show that such compression does not necessarily erase the social structure of human heterogeneity. Using 93,901 respondents from 66 countries and territories in Wave 7 of the World Values Survey, we ask six LLMs to predict respondents' life satisfaction from demographic, socioeconomic, and attitudinal profiles. All six models substantially understate the overall dispersion of life satisfaction. Yet after normalizing for these differences in scale, they largely reproduce the human income gradient in well-being inequality: lower-income groups remain relatively more heterogeneous than higher-income groups. The pattern is robust to country fixed effects, equal-country weighting, WVS survey weights, and observed demographic composition, and it extends directionally to employment, education, and perceived control. Fidelity is weaker for extreme outcomes and country-specific gradients. These results show that the amount of heterogeneity preserved by an LLM and the way that heterogeneity is distributed across social groups are distinct properties. LLM-generated populations can therefore substantially compress human variation while retaining meaningful information about where that variation is concentrated.",
    "published": "2026-09-27T00:37:57Z",
    "updated": "2026-09-27T00:37:57Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.33055"
  },
  {
    "id": "2609.33052",
    "title": "BudgetVerify: Budget-Tiered Verification for Financial QA",
    "authors": [
      "Janet Jenq",
      "Hongda Shen"
    ],
    "abstract": "Financial question answering often requires precise numerical extraction, unit handling, and arithmetic over tables and text, but applying expensive verification uniformly wastes test-time compute. We propose BudgetVerify, a budget-tiered generator-verifier framework that routes each generated answer to one of three verification tiers: no verification, lightweight check-and-revise, or higher-cost solve-first-then-compare verification. The router is trained from offline correctness and token-cost outcomes and, at test time, selects a verification tier using information available before verification, including the question, context statistics, the generated answer, and associated generator metadata. The selected tier either returns the generated answer directly or invokes the corresponding verifier. Across six commercial and open-weight base models, BudgetVerify consistently produces more efficient accuracy-cost Pareto frontiers than fixed verification policies by selectively allocating stronger verification only when it is useful. Although absolute performance varies across models, these efficiency gains and the resulting qualitative frontier shape are consistent across generator models.",
    "published": "2026-09-27T00:33:46Z",
    "updated": "2026-09-27T00:33:46Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.33052"
  },
  {
    "id": "2609.33043",
    "title": "More than 83.69% of the zeros of the Riemann zeta function are distinct",
    "authors": [
      "Kristian Muri Knausgård"
    ],
    "abstract": "The lower asymptotic proportion of distinct nontrivial zeros of the Riemann zeta function, counted with multiplicity, is at least $0.8369928814\\ldots$. The previous bound was $0.83625\\ldots$. As in the proof of that bound, an unconditional version of Montgomery's pair-correlation theorem gives an asymptotic energy estimate. The new ingredient is a short matrix inequality with a free clipping parameter. It strengthens the lower bound for this energy in terms of the number of distinct zeros. The gain is a nonnegative correction from overlaps between different nearby zeros on the critical line, which is retained even when some of these zeros are double. The matrix inequality, the threshold lemma, the block dichotomy, the counting assembly and the exact arithmetic are proved formally in Lean 4. The constant relies on a computer-assisted local inequality from recent work that has not yet been refereed. That computation was re-run independently, and every imported input is listed. This paper is primarily an experiment in AI-assisted mathematical research (Section 4).",
    "published": "2026-09-27T00:19:21Z",
    "updated": "2026-09-27T00:19:21Z",
    "categories": [
      "math.NT",
      "cs.AI",
      "cs.LO"
    ],
    "url": "https://arxiv.org/abs/2609.33043"
  },
  {
    "id": "2609.33040",
    "title": "Medical Knowledge Is Not All You Need: When Medical Q&A Becomes Situated Patient Assistance",
    "authors": [
      "Shreya Bali",
      "Riku Arakawa",
      "Jill Fain Lehman",
      "Alexander K. Maytin",
      "Brian Chen",
      "Emma Russell",
      "Haarika Reddy",
      "Annalise Vaccarello",
      "Dustin P. DeMeo",
      "Bryan T. Carroll",
      "Mayank Goel"
    ],
    "abstract": "Reliability in medical Q&A is often pursued by grounding responses in authoritative medical information. We show that when Q&A is embedded within ongoing care, reliability depends on more than what the system knows medically. In a study with 73 skin cancer patients practicing postoperative wound care, 41.9% of response-requiring questions depended on information beyond the procedure, including visual or physical state, environmental context, or prior actions. These demands varied across patients, consistent with patients recruiting the assistant into different informational roles. We then replayed the questions to seven LLMs while adding procedural and postoperative guidance. Errors remained substantial, including treating unknown states as known, even under explicit guardrails; with full procedural context, six of seven models more often introduced later steps prematurely. Based on these findings, we propose a design space for situated medical assistance that connects what the assistant and patient can each reliably establish to the form of assistance provided.",
    "published": "2026-09-27T00:14:09Z",
    "updated": "2026-09-27T00:14:09Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2609.33040"
  },
  {
    "id": "2609.33039",
    "title": "Agent Safety From Within: Detecting Harmful Trajectories from LLM Internal States",
    "authors": [
      "Difan Jiao",
      "Ashton Anderson"
    ],
    "abstract": "Language model agents can now perform sophisticated sequences of actions via tools and harnesses, which has increased the scope of the damage they can cause. Guard models, however, are mainly built for content moderation and thus are not well-suited to detecting this agentic risk. To address this, we proceed by first conducting a representational analysis, then use the resulting insights to build a solution. In our analysis, we focus on two types of trajectory-level agentic harms: harmful content, which is expressed directly, and unsafe tool use, which depends on whether an action is consistent with the interaction that produced it. We investigate how open-source guard models represent these two types of harm and find that they are linearly readable inside the model, even though guard models predict no better than chance on pairs that differ only in the called tool's schema. The two harm types also follow nearly orthogonal internal directions, and neither reliably serves as a proxy for the other. These results motivate reading trajectory safety directly from internal states. We introduce TACIT, a readout of a frozen backbone's internal states that decodes no tokens. Trained on six trajectory-safety benchmarks, a linear probe raises mean macro-F1 from 62.3 for the strongest open guard to 80.7, and refined readouts reach 86.2. With each benchmark held out of training entirely, the refined readouts still lead the strongest guard (65.7 vs. 61.1). With the same backbone, training data and test split, the frozen readout is on par with full safety fine-tuning, and it improves the fine-tuned model further when applied on top. The probe trains about one millionth as many parameters as full fine-tuning in about a sixth of the time, and TACIT has the lowest latency of the guards we evaluate.",
    "published": "2026-09-27T00:09:10Z",
    "updated": "2026-09-27T00:09:10Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.33039"
  },
  {
    "id": "2609.33038",
    "title": "Improving the Diversity of LLM Outputs without a Trade-off",
    "authors": [
      "Ryoma Sato"
    ],
    "abstract": "We propose DAST (Diversifying Arithmetic Sampling with TokenTour), a method that increases the diversity of LLM outputs without any change to the marginal distribution and with negligible generation-time overhead (a few microseconds). We observe that token IDs are often arranged in a meaningless order and reassign them so that tokens with similar meanings appear consecutively. This can be done in advance in a few hundred seconds per model, and the resulting order can be reused for all subsequent generations. By combining this order with arithmetic sampling (or quasi-Monte Carlo methods), we make similar tokens less likely to be generated across runs while preserving the distribution. Our method not only produces qualitatively good ideas but also significantly improves performance on the downstream task of ProtoQA.",
    "published": "2026-09-27T00:07:59Z",
    "updated": "2026-09-27T00:07:59Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.33038"
  },
  {
    "id": "2609.33028",
    "title": "Łukasiewicz Neural Networks Extended: Residual Architectures and Crystallization Strategies for Interpretable Rule Extraction",
    "authors": [
      "Carlos Leandro"
    ],
    "abstract": "A feed-forward neural network whose weights are integers and whose activation is the truncated identity implements, neuron by neuron, the connectives of Łukasiewicz many-valued logic. This exact correspondence --- established theoretically by Castro and Trillas and developed into a training algorithm by Leandro --- enables \\emph{symbolic knowledge extraction}: training produces not a black-box model but a logical formula. Two obstacles have limited the approach to shallow architectures and small datasets: crystallization (forcing weights to integers) succeeds only probabilistically under the original Levenberg--Marquardt training scheme, and the theoretical guarantees break down as networks grow deeper. This paper addresses both obstacles. First, we prove that \\emph{residual connections} (skip connections of the kind used in ResNets) extend Łukasiewicz neural networks to arbitrary depth while preserving the symbolic correspondence \\emph{at merge neurons} by construction: merge neurons in a Łukasiewicz residual block automatically satisfy the neuron-classification proposition, regardless of the inner layer weights; inner-layer neurons are trained toward representability by the crystallization strategy. Second, we analyse three crystallization strategies --- Levenberg--Marquardt (corrected), straight-through estimation (STE), and proximal regularization --- characterizing their theoretical guarantees, failure modes, and interpretability trade-offs.",
    "published": "2026-09-26T23:51:42Z",
    "updated": "2026-09-26T23:51:42Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.33028"
  },
  {
    "id": "2609.33023",
    "title": "SRE-Marathon: A Continuous, Change-Driven Benchmark for Autonomous Site Reliability Agents",
    "authors": [
      "Yifang Tian",
      "Yingjian Bai",
      "Yifeng He",
      "Zichun Chong",
      "Yuanchen Gao",
      "Yiran Li",
      "Hans-Arno Jacobsen"
    ],
    "abstract": "Benchmarks for site reliability engineering (SRE) agents are typically episodic: one fault is injected, the agent receives an incident task, and its response is scored. Production operation is not. Incidents surface through noisy alerts, overlap in time, and often originate from code or configuration changes. We present SRE-Marathon, a benchmark for long-horizon, continuous SRE operation. An agent is invoked at a fixed cadence with cumulative alert history and a persistent workspace while operating a live two-zone Kubernetes deployment as a fault orchestrator injects overlapping faults according to a seeded, production-calibrated schedule. Curated code and configuration changes deployed through the same build pipeline available for repair. Each run is recorded into a sealed bundle and scored offline: Marathon-Score credits each injected fault for ordered progress through correlation, localization, and repair, with all metrics computed deterministically from recorded system evidence. Across three applications and about sixty faults per run, the best of 10 methods reaches only 41.3 out of 100. Agents often correlate and localize faults, but almost never complete repairs while the faults remain active.",
    "published": "2026-09-26T23:43:04Z",
    "updated": "2026-09-26T23:43:04Z",
    "categories": [
      "cs.AI",
      "cs.SE"
    ],
    "url": "https://arxiv.org/abs/2609.33023"
  },
  {
    "id": "2609.33020",
    "title": "Residual Diffusion Implicit Models",
    "authors": [
      "João Guerreiro",
      "Pedro Tomás",
      "Helena Aidos",
      "Jacinto C. Nascimento"
    ],
    "abstract": "Diffusion models achieve state-of-the-art results across multiple tasks. However, in inverse problems, standard initialization from pure Gaussian noise misaligns the generative process with real-world degradations. More recent methods such as diffusion bridges impose strict endpoint constraints and often require long reverse processes that are prone to hallucinations. Alternative consistency models provide noise-invariant, one-step mappings but lack inherent variance modeling and can degrade under severe corruption. Hence, residual diffusion implicit models (RDIMs) are proposed, constituting a generalized framework that explicitly models the residuals between high-quality (HQ) and low-quality (LQ) images, aligning the forward process with the actual degradation. A non-Markovian implicit reverse sampler is derived, which can skip intermediate timesteps, enabling accurate few-step or even single-step reconstruction, while mitigating the hallucinations inherent to long diffusion chains. RDIM also introduces a controllable variance mechanism that interpolates between deterministic and stochastic sampling, balancing fidelity and diversity. Furthermore, it enables the straightforward use of perceptual losses, when needed. Experiments on denoising and super-resolution benchmarks demonstrate that RDIMs consistently outperforms the state of the art, including bridge and consistency models, in terms of PSNR, SSIM, and LPIPS, reducing hallucinations while requiring only a few sampling steps (often just one). The results position RDIMs as an efficient solution for a broad range of image restoration tasks.",
    "published": "2026-09-26T23:34:35Z",
    "updated": "2026-09-26T23:34:35Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.33020"
  },
  {
    "id": "2609.32255",
    "title": "Clarify the User or Verify the World? Uncertainty Routing for Proactive Agents",
    "authors": [
      "Zhaofeng Li",
      "Xuan Zhang",
      "Xiaokui Xiao",
      "Yang Deng"
    ],
    "abstract": "Tool-using LLM agents must decide not only whether additional information is needed, but also which source can resolve the uncertainty. Existing proactive approaches often specialize in either user clarification or environment verification, without explicitly determining the appropriate information source for each decision. We formulate this problem as uncertainty routing among ACT, CLARIFY, and VERIFY, and propose PROUR, a proactive uncertainty routing framework. PROUR decomposes action uncertainty into disagreement across plausible user-goal interpretations, which signals user-side ambiguity, and the entropy remaining within each interpretation, which signals missing world-side evidence. To acquire information from the routed source, a query generator is trained with a mode-conditioned information-gain reward, targeting user-goal identification under CLARIFY and next-action identification under VERIFY. On $τ$-bench, PROUR achieves 28.17% average success rate across retail and airline, outperforming the strongest prior method by 4.57% while using 2.17 fewer interaction steps. The learned policy further generalizes to stronger task agents and transactional domains of $τ^3$-bench without retraining, demonstrating the benefit of source-aligned uncertainty resolution for proactive agents.",
    "published": "2026-09-26T05:25:50Z",
    "updated": "2026-09-26T05:25:50Z",
    "categories": [
      "cs.AI",
      "cs.CL",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.32255"
  },
  {
    "id": "2609.32254",
    "title": "Why Directly Learning Periodic Trajectories Can Fail",
    "authors": [
      "Kaixin Zheng",
      "Anita Layton"
    ],
    "abstract": "Operator learning of periodic solutions requires deciding how simulation data should be recorded and represented. A natural choice is to integrate long enough for transients to decay and record a window wide enough to contain at least one full period of all trajectories. We find that these conservative choices can make the resulting trajectories difficult to learn, even when the underlying periodic orbits vary regularly with system parameters. Unaligned trajectories generalize poorly even within the training distribution. Phase alignment substantially improves in-distribution generalization, but models trained on a fixed physical-time window still have large errors on trajectories with periods outside the training range. We explain both failures through a common mechanism: frequency differences accumulate over time, so the target phase varies rapidly with the parameters. Predictors that cannot track this variation incur a population MSE floor in both settings; for fixed window prediction, we also derive a per-sample lower bound. We then study one of the simplest representations that escape these floors: learning an aligned, normalized waveform and its period separately. We establish regularity of the decoupled targets under ODE assumptions and show experimentally that this approach avoids both failures in ODE systems and a PDE case study.",
    "published": "2026-09-26T05:19:56Z",
    "updated": "2026-09-26T05:19:56Z",
    "categories": [
      "cs.AI",
      "math.CA",
      "math.NA"
    ],
    "url": "https://arxiv.org/abs/2609.32254"
  },
  {
    "id": "2609.32253",
    "title": "DS-VLA: A Dendritic-inspired Vision-Language-Action Model for Robust Action Control",
    "authors": [
      "Yaxing Lyu",
      "Jingyi Li",
      "Mingkun Xu",
      "Yujie Wu"
    ],
    "abstract": "Vision-language-action (VLA) models have achieved strong performance in language-conditioned manipulation, yet success under nominal evaluation does not necessarily translate into robust closed-loop behavior when executed actions are transiently corrupted. We introduce DS-VLA, a dendritic-inspired action architecture that incorporates dendritic spiking dynamics into VLA control to address this limitation. Specifically, to enable modularized feature processing and temporal information integration, DS-VLA equips action neurons with multiple sparsely connected dendritic branches, each featuring heterogeneous, learned decay factors. Furthermore, to suppress unreliable state updates while preserving task-relevant historical information, we introduce a neuron-wise inhibitory gate that adaptively regulates the admission of new multimodal evidence into dendritic states prior to somatic dynamics. We evaluate DS-VLA on all four LIBERO suites under both nominal rollouts and a unified closed-loop action-perturbation protocol. DS-VLA achieves a 91.6\\% average nominal success rate and an 87.35\\% average perturbed success rate, retaining 95.4\\% of its nominal performance. Under the same reported perturbation setting, OpenVLA-OFT, FAST, $π_0$, and GR00T achieve 39.45\\%, 23.90\\%, 28.55\\%, and 30.75\\%, respectively. A controlled ablation isolates the contribution of neuron-wise shared inhibition, while analyses of neural dynamics and post-perturbation trajectories associate robust performance with selective evidence suppression and effective behavioral recovery. Together, these results demonstrate that integrating brain-inspired computational mechanisms offers a promising architectural prior for robust embodied intelligence beyond merely scaling vision-language backbones or generative action decoders.",
    "published": "2026-09-26T05:17:16Z",
    "updated": "2026-09-26T05:17:16Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.NE"
    ],
    "url": "https://arxiv.org/abs/2609.32253"
  },
  {
    "id": "2609.32250",
    "title": "RoboSTAR: Next-Scale Autoregressive Sign Language Translation for Humanoid Robots",
    "authors": [
      "Yujia Zeng",
      "Chensheng Peng",
      "Yuxin Chen",
      "Alex Shao",
      "Nathan Jew",
      "Masayoshi Tomizuka"
    ],
    "abstract": "Sign-language interpretation in public communication relies on qualified professional interpreters and can be difficult to scale, motivating robotic signing as a complementary accessibility interface. We present RoBoSTAR, a text-conditioned sign language production (SLP) framework for generating human-centric sign motion that can be retargeted for robotic execution, with speech supported optionally through an external ASR front end. Conventional autoregressive approaches flatten motion into a single full-resolution token sequence, forcing long-range and local dependencies to be modeled at a uniform temporal granularity. RoBoSTAR instead combines part-wise Finite Scalar Quantization with next-scale autoregression, generating motion over progressively finer temporal resolutions while predicting synchronized body and hand tokens in parallel within each step. This coarse-to-fine formulation provides compact long-range context before progressively refining motion details, while self-conditioning and context corruption improve robustness to cross-scale prediction errors. The generated motion is subsequently retargeted for physical humanoid execution. Extensive qualitative and quantitative evaluations are conducted to demonstrate the effectiveness of RoBoSTAR.",
    "published": "2026-09-26T05:12:00Z",
    "updated": "2026-09-26T05:12:00Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.32250"
  },
  {
    "id": "2609.32247",
    "title": "Certifying Interventional Agreement Among Observationally Equivalent Causal Models",
    "authors": [
      "Sourena Khanzadeh",
      "Daniel Platnick",
      "Marjan Alirezaie",
      "Hossein Rahnama"
    ],
    "abstract": "Observationally equivalent causal models can still disagree about what happens under intervention, because interventions create inputs that never occur in observational data. We introduce Interventional Separation Selection (ISS), which repeatedly queries the true system with an admissible intervention on which the surviving candidate models disagree, discards the candidates the outcome contradicts, and stops once no intervention within a cost bound separates the survivors. If the true system is among the candidates, this stopping condition certifies that every survivor agrees with it on every admissible intervention within the bound, a guarantee that no observational learner can give, however much data it sees. The stopping condition depends only on the survivors, so it can be checked without knowing the truth. For continuous variables the candidates form an infinite version space, and mixed-integer linear programs decide the stopping condition exactly over all of it, with agreement holding up to a tolerance. On a three-digit colored MNIST causal abstraction task in which ink hue tracks digit size, plain convolutional networks trained on examples reach zero held-out error, yet disagree with shape-based labels on 26% of single-digit edits, as often as hue-based labels do. Auditing the causal abstractions of networks observed only on such images, ISS certifies what each network perceives with 13.6 interventions per image on average, and each certificate, checked against every admissible intervention, holds whenever the network's true abstraction is among the candidates. When a network bypasses a unit that every candidate abstraction relies on, certificates covering interventions on that unit can be silently void, and twenty random validation interventions refute 69% of them.",
    "published": "2026-09-26T05:07:57Z",
    "updated": "2026-09-26T05:07:57Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.32247"
  },
  {
    "id": "2609.32245",
    "title": "AutoPDEBench: Benchmarking LLM Auto-Research for Neural PDE Solver Design",
    "authors": [
      "Ruoyan Li",
      "Wei Wang",
      "Yizhou Sun"
    ],
    "abstract": "Partial differential equations (PDEs) are essential for modeling complex physical systems, and neural solvers have recently emerged as powerful data-driven tools for numerically solving them. However, existing neural solvers struggle with domain-specific challenges, such as varying parameters and high-speed flows, necessitating specialized architectures. Manually designing these specialized solver architectures is a highly iterative, time-consuming process requiring deep expertise, creating a significant bottleneck in scientific discovery. We propose leveraging autonomous AI research agents to automate the synthesis of specialized solvers. To support this, we introduce AutoPDEBench, a benchmark dedicated to LLM-driven automated research for PDE solver design. The benchmark includes 25 challenging datasets featuring both novel and actively studied physical scenarios. We evaluate a suite of general-purpose models (transformer, ROM, and graph-based) alongside a multi-agent instantiation of the iterative automated research pipeline, which serves as an agentic baseline. Empirical results show that the iterative automated research system significantly outperforms the general-purpose neural solver baselines. Our findings demonstrate the viability of using AI agents to automatically design neural solvers for complex physical systems. AutoPDEBench provides a foundational testbed to accelerate agent-driven scientific discovery in physics and engineering.",
    "published": "2026-09-26T05:02:34Z",
    "updated": "2026-09-26T05:02:34Z",
    "categories": [
      "cs.CE",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.32245"
  },
  {
    "id": "2609.32244",
    "title": "Two-Stage Multi-View Gait Recognition with a Re-Embedding Network",
    "authors": [
      "Long Hoang Le",
      "Trung Thanh Ngo"
    ],
    "abstract": "Gait recognition always remains challenging due to severe overfitting and the rigid view constraints common in single-stage approaches. We propose a two-stage framework, termed Translate-First-Then-Reason (TFTR), to address these issues. In the first stage, a shallow Siamese convolutional network with triplet loss maps Gait Energy Images (GEIs) into a 128-dimensional view-specific embedding space. In the second stage, these per-view embeddings are treated as tokens and processed by a 12-layer Transformer encoder, which re-projects them into a new space with improved cosine separability. This design enables flexible fusion of an arbitrary number of views at inference, overcoming the fixed-input limitations of prior methods. Trained on the OU-MVLP dataset (6,000 subjects) and evaluated on unseen CASIA-B across normal, bag-carrying, and coat-wearing conditions, our pipeline achieves 96.91\\% single-view and 99.49\\% three-view accuracy on OU-MVLP, and attains 100\\% accuracy on CASIA-B with three views.",
    "published": "2026-09-26T05:02:13Z",
    "updated": "2026-09-26T05:02:13Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.32244"
  },
  {
    "id": "2609.32241",
    "title": "Residual Transferability in Neural Image Watermarking",
    "authors": [
      "Ziping Dong",
      "Qi Li",
      "Xinchao Wang"
    ],
    "abstract": "Neural image watermarks can be forged by extracting watermark-bearing residuals from released images and transferring them to unrelated content. While prior work has demonstrated this vulnerability, what makes these residuals transferable remains poorly understood. We formalize this vulnerability with \\textbf{residual transferability (RT)}, a metric that quantifies how well watermark evidence remains decodable after transfer across unrelated images. Through comparative analyses and controlled interventions, we find that common training-side variations do not account for the large RT differences across watermarking systems; instead, architectural design plays a central role. By contrasting high- and low-RT systems and validating their architectural differences through controlled interventions, we identify two mechanisms that strengthen the dependence of watermark evidence on the cover image, thereby suppressing the residual transferability. These findings provide concrete design guidance for developing more forgery-resistant watermarking architectures. Complementarily, for existing watermarking systems where architectural redesign is impractical, we introduce \\textbf{CoverLock}, a plug-and-play strategy for existing watermarking systems that strengthens such image dependence without architectural redesign. Across representative watermarking systems exhibiting high residual transferability, CoverLock achieves a more favorable security--robustness trade-off than both traditional handcrafted defenses and learned classifier-based defenses.",
    "published": "2026-09-26T04:59:33Z",
    "updated": "2026-09-26T04:59:33Z",
    "categories": [
      "cs.CR",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.32241"
  },
  {
    "id": "2609.32239",
    "title": "Federated Subspace Guided Vision-Language-Action Policy Distillation for Non-IID Multi-Robot Manipulation",
    "authors": [
      "Biprodip Pal",
      "Kaushik Roy",
      "Yanming Zhu",
      "Brendan Tidd",
      "Alan Wee-Chung Liew",
      "Peyman Moghadam"
    ],
    "abstract": "Federated learning offers a natural way for multiple robots to jointly improve manipulation policies without requiring centralized access to training demonstrations. However, non-IID task and environment distributions can induce representation drift and mutually incompatible robot-policy updates, making naive parameter aggregation destructive. We present FedDRMan, a federated subspace-guided distillation framework for heterogeneous robot manipulation. At each communication round, the server model provides a frozen teacher for local behavior cloning, while low-rank multimodal subspace and action-distribution distillation preserve globally useful representation geometry and policy behavior. To address heterogeneous aggregation, FedDRMan groups clients by update compatibility and maintains a persistent model for each cluster. The server then spectrally rebalances each compatible aggregate to mitigate attenuation of weaker task-relevant robot-policy update directions. Extensive experiments on LIBERO across diverse non-IID settings, heterogeneity levels, client participation variation, together with ablations and aggregation analyses, show that FedDRMan substantially improves knowledge transfer and consistently outperforms strong federated baselines achieving a peak mean success rate of 80.7%, 11.6 percentage points above the strongest evaluated federated baseline.",
    "published": "2026-09-26T04:56:49Z",
    "updated": "2026-09-26T04:56:49Z",
    "categories": [
      "cs.RO",
      "cs.CV",
      "cs.DC",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.32239"
  },
  {
    "id": "2609.32231",
    "title": "Skeletons in Flow: Graph Structured Flow Matching for Human Motion Prediction",
    "authors": [
      "Yixuan Wang",
      "Brandon C. Fallin",
      "Warren E. Dixon"
    ],
    "abstract": "Human motion prediction requires diverse future trajectories that remain consistent with observed motion and the articulated physical structure of the body. Skeletal constraints restrict individual poses, while coordinated motion depends on spatial interactions (between connected joints) and temporal interactions (between time instants). To facilitate human motion prediction in light of these constraints and interactions, we introduce Graph Structured Flow Matching (GSFM), which transports the complete future skeletal trajectory through a single conditional velocity field. The trajectory produces a spatiotemporal skeleton graph, and spatial and temporal attention couple its evolution according to skeletal relations and physical time offsets. Bone directions lie on unit spheres relative to a root joint, and tangent evolution preserves input bone lengths throughout generation. We train a learned velocity field through conditional flow matching along geodesic paths connecting random trajectories centered on the last-observed pose to recorded future trajectories. Experiments on the Archive of Motion capture As Surface Shapes (AMASS) dataset evaluate prediction accuracy, diversity calibration, and motion statistics. We demonstrate the contributions of spatial and temporal message passing in the developed architecture through an ablation study. GSFM models trained on AMASS also perform competitively on the Human3.6M skeleton without parameter updates or retraining, demonstrating applicability to an unseen skeletal structure.",
    "published": "2026-09-26T04:45:53Z",
    "updated": "2026-09-26T04:45:53Z",
    "categories": [
      "cs.CV",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2609.32231"
  },
  {
    "id": "2609.32226",
    "title": "Toward Agentic Optical Networks: A Vision of LLM Agent-Driven Autonomous Lifecycle Management",
    "authors": [
      "Yao Zhang",
      "Shengnan Li",
      "Yuchen Song",
      "Yidi Wang",
      "Yue Pang",
      "Wenbin Chen",
      "Xiaotian Jiang",
      "Xiao Luo",
      "Meixia Fu",
      "Min Zhang",
      "Yongli Zhao",
      "Shanguo Huang",
      "Alan Pak Tao Lau",
      "Danshi Wang"
    ],
    "abstract": "As optical networks continue to expand in scale, complexity, and service diversity, the implementation of automation has become essential for ensuring agility, efficiency, and reliability in lifecycle management (LCM) of optical networks. Large language model (LLM) Agent, distinguished by its progressively sophisticated capabilities in logical reasoning, adaptive decision-making, complex problem solving, and multi-task orchestration, presents great opportunities to advance network automation beyond traditional AI techniques. Nevertheless, the application of LLM Agent in optical networks remains in its early exploratory stage, challenged by the lack of multi-task coordination, high computational demands, data dependence, and reliability concerns. In this paper, we envision a conceptual roadmap toward Agentic Optical Networks (AONs) by integrating LLM Agents throughout the LCM with high-level autonomy. First, we trace the evolution from manual operations to AI-empowered frameworks and distill key technologies in Agent, providing actionable insights into leveraging its strengths for addressing practical network automation challenges. A core contribution of this paper is the proposal of a hierarchical multi-Agent framework, which is specifically developed to manage every phase in LCM of AONs, including planning, deployment, operation, maintenance, upgrade, and decommission, thereby enabling more cohesive and comprehensive automation throughout the entire lifecycle. In addition, future directions and underlying challenges are also discussed at the intersection of LLM and optical networks. By aligning the LLM Agent with the specialized requirements of AONs, this work aims to explore the potential for the evolution of optical networks moving from task-level semi-automatic execution toward lifecycle-level full autonomy.",
    "published": "2026-09-26T04:41:31Z",
    "updated": "2026-09-26T04:41:31Z",
    "categories": [
      "cs.NI",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.32226"
  },
  {
    "id": "2609.32225",
    "title": "LaMET-Agent: An Agent Framework for Large-Momentum Effective Theory Analysis",
    "authors": [
      "Jinchen He",
      "Xiangyu Jiang",
      "Fei Yao",
      "Dian-Jun Zhao"
    ],
    "abstract": "Large-momentum effective theory (LaMET) provides a first-principles framework for computing the $x$ dependence of light-cone parton distributions from lattice QCD. Over the past decade, theoretical and numerical advances have established a mature multi-stage workflow for systematic calculation of parton physics, although its implementation still requires expert judgment and substantial repeated effort. We present lamet-agent, an open-source large language model (LLM) agent framework that organizes this workflow into an executable, reproducible, and inspectable analysis pipeline. The present release supports collinear quark distributions and implements correlator analysis, renormalization, Fourier transformation, perturbative matching, continuum, physical pion mass and infinite-momentum extrapolations, and automated result review. We validate it on four end-to-end analyses: pion parton distribution functions in the gauge-invariant and Coulomb-gauge formulations, and pion and kaon distribution amplitudes, obtaining results consistent with the published calculations. Extensions to transverse-momentum-dependent distributions, generalized transverse-momentum-dependent distributions, and gluonic distribution functions are planned for subsequent releases.",
    "published": "2026-09-26T04:35:11Z",
    "updated": "2026-09-26T04:35:11Z",
    "categories": [
      "hep-lat",
      "cs.AI",
      "hep-ph"
    ],
    "url": "https://arxiv.org/abs/2609.32225"
  },
  {
    "id": "2609.30855",
    "title": "MDSkin-Net: Multi-Task Skin Lesion Analysis Driven by Pattern Analysis Priors and Spatial Alignment Regularization",
    "authors": [
      "Yijian Li",
      "Saad Bedros",
      "Paul Bigliardi",
      "Mei Bigliardi Qi",
      "Vassilios Morellas",
      "Nikolaos Papanikolopoulos"
    ],
    "abstract": "Reliable skin lesion segmentation and classification are central to dermoscopic computer-aided diagnosis. Existing multi-task frameworks couple the two tasks architecturally without clinical knowledge, while knowledge-injecting approaches rely on the macroscopic ABCD rule, which was not designed for dermoscopy. Dermoscopic diagnosis is grounded in Pattern Analysis, a microscopic framework structured around dermoscopic features. We propose MDSkin-Net, which incorporates cue-level Pattern Analysis priors into a hybrid CNN-Transformer architecture. At its core is a Pattern Analysis-Guided Attention Module (PAGAM) comprising three priors motivated by distinct dermoscopic cues: an improved Efficient Channel Attention (iECA), a Multi-Scale Spatial Attention (MSSA), and a Biased Asymmetry Attention (BAA). We further introduce a multi-scale spatial alignment regularization (MSAR) that uses the segmentation ground-truth mask as hierarchical soft supervision, confining the classification head to lesion-localized evidence and coupling both task pathways through a shared spatial prior. Trained exclusively on the ISIC 2017 training split without external dermoscopy data, the MDSkin-Net ensemble transfers robustly under zero-shot evaluation, reaching a Dice Similarity Coefficient (DSC) of 92.38% and a melanoma AUC of 97.84%on PH2, and a DSC of 88.92% on the ISIC 2018 Task 1 test set. On the in-domain ISIC 2017 benchmark, the ensemble attains a mean Area Under the Curve (AUC) of 91.60% across the two classification tasks (melanoma and seborrheic keratosis vs. rest), and a DSC of 84.72% for segmentation. Classification remains competitive with baselines; in-domain segmentation trails single-task specialists, yet the proposed priors and alignment regularization yield representations that generalize consistently across cohorts of different scales.",
    "published": "2026-09-25T06:02:34Z",
    "updated": "2026-09-25T06:02:34Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.30855"
  },
  {
    "id": "2609.30841",
    "title": "Why Jailbreaks Succeed in Diffusion Language Models: An Energy Landscape Analysis",
    "authors": [
      "Thong Bach",
      "Dung Nguyen",
      "Thao Minh Le",
      "Truyen Tran"
    ],
    "abstract": "Existing attacks and defenses for diffusion-based large language models (dLLMs) target specific vulnerabilities but lack a shared framework explaining why attacks succeed. We propose one by interpreting safety alignment as shaping the denoising energy landscape: a well-aligned model routes harmful queries toward safe outputs through an energy barrier that separates the two regions. Current jailbreak attacks reduce to two strategies for circumventing this barrier: obscuring the query's safety disposition at initialisation, or intervening mid-trajectory to force the denoising path across the energy barrier. From this perspective and the result that masked diffusion models minimise kinetic energy during denoising, we derive three complementary, training-free detection signals: a step-0 ratio that reads the initial safety disposition from the logit distribution before generation begins, and two trajectory-velocity signals that track kinetic energy in complementary subspaces of the logit space. An attack must either reveal its intent at initialisation or expend kinetic energy to cross the barrier in at least one monitored subspace, so the three signals cover each other's blind spots in the energy budget by construction. Evaluation across three dense dLLMs (LLaDA-8B, LLaDA-1.5, Dream-7B) and a sparse mixture-of-experts dLLM (LLaDA-MoE-7B) confirms this complementarity. In stress tests of known attacks, every configuration that evades detection also fails to produce harmful content, suggesting that the detection and barrier-crossing thresholds are hard to separate.",
    "published": "2026-09-25T05:35:36Z",
    "updated": "2026-09-25T05:35:36Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.30841"
  },
  {
    "id": "2609.30840",
    "title": "Aligning One-Step Generative Models with Reward-Weighted Transport Distillation",
    "authors": [
      "Austin Wang",
      "Ziheng Cheng",
      "Lexing Ying"
    ],
    "abstract": "One-step generators enable high-quality visual generation with a single network evaluation, but their post-training is difficult: general implicit generators provide neither tractable likelihoods nor denoising trajectories, and many rewards are non-differentiable. We introduce Reward-Weighted Transport Distillation (RWTD), a post-training method that requires only generated samples and scalar reward evaluations. Rather than aligning solely to the conventional reward-tilted reference distribution, RWTD constructs an adaptive target that mixes separately tilted current and reference distributions. The current component incorporates improvements discovered during training, while the reference component anchors the target to the pretrained generator. RWTD realizes this target through feature-space optimal transport and fixed-point regression. Theoretical analysis shows that the fixed-point distributions of RWTD interpolate between off-policy reward tilting of the reference and on-policy tilting of the current model, providing a principled approach to balancing reward adaptation with retention of prior knowledge. Empirically, RWTD substantially improves the GenEval score of the one-step SANA Sprint 1.6B backbone from 0.73 to 0.80, while separate preference alignment experiments demonstrate strong cross-reward generalization that yields balanced improvements and preservation of compositional capabilities.",
    "published": "2026-09-25T05:35:32Z",
    "updated": "2026-09-25T05:35:32Z",
    "categories": [
      "cs.LG",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.30840"
  },
  {
    "id": "2609.30837",
    "title": "MOPD-Router: Rethinking Teacher Routing in Multi-Teacher On-Policy Distillation",
    "authors": [
      "Tianze Xu",
      "Yanzhao Zheng",
      "Zhentao Zhang",
      "Yuanqiang Yu",
      "Chao Ma",
      "Jihuai Zhu",
      "Lelun Wu",
      "Lyumanshan Ye",
      "Pengfei Liu",
      "Baohua Dong",
      "Hangcheng Zhu",
      "Ruohui Huang",
      "Gang Yu"
    ],
    "abstract": "Multi-teacher on-policy distillation (MOPD) integrates specialized capabilities into a single student, but existing practice typically hard-routes each prompt to a domain-matched teacher for the entire rollout. This dependence on prompt-level domain labels restricts using unlabeled training mixtures and leaves complementary signals from other teachers unused. We introduce MOPD-Router, a framework that routes supervision over the full teacher pool at each token, without domain labels or training a separate routing model. Its plug-in interface supports different metrics for selecting and weighting teacher-specific OPD signals. Within this interface, we propose ExpertAlign, which scores each teacher by whether its correction to the student at the current token expresses the specialization that teacher acquired during post-training, and compare it against two reference metrics built on teacher confidence (Entropy) and teacher-student discrepancy (Novelty). Experiments on unlabeled and domain-labeled training mixtures under strong-to-weak and same-size distillation scenarios show that ExpertAlign achieves the strongest overall performance in all four settings. On unlabeled data, it improves the overall score by 5.88 (+12.3%) points over Mean aggregation; on domain-labeled data, it outperforms standard MOPD by 3.95 (+7.8%) points without using available domain labels. These results demonstrate token-level routing can exploit cross-domain complementary supervision, and reduce exclusive reliance on prompt-level domain assignment. Code is available at: https://github.com/TURLEing/MOPD-Router.",
    "published": "2026-09-25T05:32:03Z",
    "updated": "2026-09-28T12:07:02Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.30837"
  },
  {
    "id": "2609.30836",
    "title": "PTC-Decoder: Towards Intelligent SLMs on Offline Resource-Constrained Edge Devices",
    "authors": [
      "Minghui Yu",
      "Ke Mu",
      "Gang Wu"
    ],
    "abstract": "Deploying small language models (SLMs) on offline, resource-constrained edge devices such as remote sensing satellites presents a fundamental challenge: their limited reasoning capacity hinders reliable execution of multi-step agent tasks requiring complex tool orchestration. Existing plan-solve paradigms rely on prompt-based enforcement, which our experiments show SLMs almost entirely disregard: weak models fail to invoke the plan. We propose PTC-Decoder (Plan-Tool Constrained Decoder), a training-free, plug-and-play decoder framework that combines (1) a Plan-to-Act paradigm, which elevates planning to an atomic tool and forces its invocation at the first inference step, and (2) TC-Decoder, a deterministic finite automaton that imposes token-level hard constraints on tool names while preserving freedom over parameter generation, thereby retaining SLM reasoning capability. Evaluated on 200 real remote-sensing satellite tasks across 7 SLMs, PTC-Decoder yields a statistically significant mean overall score gain of +1.21 (p<0.01), 95% CI [+1.13, +1.29]), with consistent improvements across models and other datasets. An ablation study that removes TC-Decoder causes substantial performance degradation across all quality metrics without reducing computational cost, confirming TC-Decoder as the primary driver. PTC-Decoder thus offers a lightweight yet effective solution for improving step-level reliability, with final-answer accuracy remaining an open challenge. In essence, we enforce plan adherence by constraining the permissible output vocabulary during inference, without requiring retraining.",
    "published": "2026-09-25T05:30:35Z",
    "updated": "2026-09-25T05:30:35Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.30836"
  },
  {
    "id": "2609.30832",
    "title": "Subject-Invariant Cross-Modal Decoding of Perceived Speech from Brain Recordings",
    "authors": [
      "Aoke Zhang",
      "Jing Chen"
    ],
    "abstract": "Perceived speech decoding based on non-invasive brain-computer interface (BCI) signals has been extensively studied in recent years. Research in this field primarily faces two challenges: extracting neural representations with rich spatiotemporal information and achieving cross-subject generalization. Although separate studies have proposed methods to cope with these issues, a unified approach that simultaneously tackles both challenges remains lacking. To fill this gap, we propose the Subject-Invariant Cross-Modal Perceived Speech Decoding (SICMD) method, which integrates functional magnetic resonance imaging (fMRI) and magnetoencephalography (MEG). We conduct comprehensive analyses of the fusion method, fusion position, encoder architecture, and model inputs. Our results demonstrate that the proposed method improves Top-1, Top-10, and Rankacc by more than 10.6%, 10.1%, and 1.7%, respectively, compared to baseline methods in cross-subject perceived speech decoding tasks, while reducing training costs by 88.8% and 60.5% compared to multi-subject and intra-subject decoding settings. Further visualization experiments also confirm the effectiveness of our approach.",
    "published": "2026-09-25T05:22:13Z",
    "updated": "2026-09-25T05:22:13Z",
    "categories": [
      "cs.SD",
      "cs.AI",
      "eess.AS"
    ],
    "url": "https://arxiv.org/abs/2609.30832"
  },
  {
    "id": "2609.30831",
    "title": "CDBG: Causally Motivated Dual-Invariance Learning against Topological and Predictive Shifts in EEG Workload Recognition",
    "authors": [
      "Yuzhe Zhang",
      "Wenmin Zhou",
      "Chengxi Xie",
      "Kai He",
      "Jihong Wang",
      "Huan Liu",
      "Man Yao",
      "Daoqiang Zhang"
    ],
    "abstract": "Generalizing Electroencephalography (EEG)-based mental workload recognition to unseen subjects remains a formidable challenge due to severe inter-subject variability. While functional brain graphs effectively model distributed cognitive dynamics, their inherent subject-specificity induces two coupled distribution shifts: a class-conditional topological shift in the underlying functional connectivity, and a predictive mechanism shift in the learned representation-to-label mapping. Motivated by the subject-induced distribution shifts, we propose CDBG, a Causally motivated Dual-invariance learning framework for Brain Graphs. CDBG disentangles and mitigates these shifts via a two-stage rationale learning pipeline. First, it employs stochastic edge masking to extract sparse, workload-predictive graph rationales, regularized by workload-conditional Laplacian spectral alignment to enforce topological invariance across subjects. Second, it applies subject-wise Invariant Risk Minimization (IRM) to the graph representations, ensuring environment-wise risk stationarity. Extensive experiments on a self-built air traffic controller EEG cognitive workload dataset and multiple public datasets under a strict leave-one-subject-out protocol demonstrate that CDBG significantly outperforms state-of-the-art cross-subject and graph-based baselines, improving the Macro-F1 score by up to 4.23%, while simultaneously providing neurophysiologically interpretable functional rationales.",
    "published": "2026-09-25T05:22:06Z",
    "updated": "2026-09-25T05:22:06Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2609.30831"
  },
  {
    "id": "2609.30818",
    "title": "Evaluation Is All You Need for Multi-Modal Autonomous Driving",
    "authors": [
      "Zeyu He",
      "Shiqi Liu",
      "Ke Chen",
      "Yun Yan",
      "Jinzi Wu",
      "Dianqiao Lei",
      "Sirui Wang",
      "ShuRui Peng",
      "Tao Chen",
      "Zhuo Huang",
      "Yu Wu",
      "Yadong Shao",
      "Zhichao Li",
      "Ke Sun",
      "Yang Guan",
      "Keqiang Li",
      "Shengbo Eben Li"
    ],
    "abstract": "Multi-modal planning is promising for autonomous driving by representing multiple plausible behaviors in ambiguous and long-tail scenarios. Existing methods mainly focus on improving trajectory multi-modality, enhancing trajectory representations, or reshaping the candidate distribution. Nevertheless, we identify a pronounced generation-evaluation asymmetry in multi-modal planning: despite strong oracle performance, existing planners often fail to reliably select the best available candidate, leaving substantial planning potential unrealized. To address this challenge, we propose iDriveVLA, a multi-modal planning framework that improves the candidate trajectory space while enabling more reliable and context-aware trajectory evaluation. Specifically, iDriveVLA introduces a unified trajectory evaluator comprising a Safety-aware Scorer for quality and risk estimation, together with a VLM-guided Modulator for scene-adaptive criterion weighting. We further develop an oracle-aligned progressive training strategy consisting of candidate imitation pretraining, candidate space refinement, and semantic ranking alignment. On the public NAVSIM v1 leaderboard, iDriveVLA achieves a new state-of-the-art performance of 94.95 PDMS, surpassing the human-expert reference.",
    "published": "2026-09-25T04:56:15Z",
    "updated": "2026-09-25T04:56:15Z",
    "categories": [
      "cs.RO",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.30818"
  },
  {
    "id": "2609.30813",
    "title": "A Benchmark and Diagnostic Study of Epistemic Admission in Shared Agent Memory",
    "authors": [
      "Xiaoyang Li",
      "Yiqi Wang",
      "Chencheng Zhu",
      "KE XU",
      "Wencheng Yang",
      "Zequn Sun",
      "Pingan Song",
      "Yiqun Duan",
      "Taotao Cai"
    ],
    "abstract": "Evaluating claim admission in shared agent memory is challenging because repeated claims may be mistaken for independent evidence. An agent may copy or paraphrase a retrieved belief, while admitting a false claim exposes subsequent agents to it. To study this problem, we introduce the Correlated Promotion Benchmark (CPB), which evaluates whether candidate claims should be admitted to shared memory.CPB-Static constructs a frozen test split from publicly annotated sources with fixed gold actions. CPB-Live runs multi-agent teams over a shared store, records all writes and retrievals, and tracks source lineage defined by each scenario. A separate consumer answers from the store alone. We evaluate eight admission policies across four agent families. Our results show that policies which deduplicate sources reject many true claims alongside false ones, whereas policies preserving answer coverage admit nearly as many false claims as unrestricted sharing. Gating on declared source type reduces false adoption to 0.06--0.09, compared with 0.22--0.47 for other answering policies. Once an uncontested false belief enters memory, the consumer asserts it in 0.97--0.99 of probes across all families. No non-oracle policy consistently rejects false claims across verbatim copies, paraphrases, and paraphrases declared authoritative. These findings reveal the limitations of admission policies without access to source lineage.",
    "published": "2026-09-25T04:48:31Z",
    "updated": "2026-09-25T04:48:31Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.30813"
  },
  {
    "id": "2609.30805",
    "title": "XPhysICS: Cross-Physical-Domain Threat Grounding for Industrial Control Systems Security",
    "authors": [
      "Sangshin Park",
      "Jainta Paul",
      "Lawrence Ponce",
      "Md Raihan Ahmed",
      "Mu Zhang",
      "Luis Garcia"
    ],
    "abstract": "Industrial control system (ICS) threats documented for one plant can express cyber-physical effects relevant to another, but semantic similarity alone does not establish whether those effects are structurally admissible or evaluable on a target. We present XPhysICS, a provenance-aware, target-conditioned method that separates analyst-guided source abstraction from deterministic grounding into target-specific validation slices. Given a fixed source abstraction, vocabulary and schema, and machine-validated target contract, XPhysICS evaluates candidate mappings using five eligibility criteria: role compatibility, implemented type compatibility, stage coherence, slice viability, and rule-surface applicability. Grounding acceptance, slice adequacy, dynamic realizability, consumer applicability, and consumer outcome remain distinct evidence layers. We evaluate 83 structured source-threat abstractions across water treatment, water distribution, hydro/water-energy, and chemical-process targets. Controlled target-side studies of SWaT-to-water-treatment and WADI-to-water-distribution groundings produce clean, nominal-confounded, and near-threshold consumer outcomes; nine Hydro/GRFICS cases extend bounded validation-slice execution. We also evaluate bounded predictive, state-aware, and phase-aware consumer lanes, the unmodified upstream GeCo implementation, and a paper-derived reproduction of a physics-guided search method over three frozen groundings. Results show that cross-domain ICS threat reuse requires traceable source semantics, explicit target-conditioned grounding criteria, and careful separation of subsequent target-side evidence.",
    "published": "2026-09-25T04:33:17Z",
    "updated": "2026-09-25T04:33:17Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.30805"
  },
  {
    "id": "2609.30798",
    "title": "Evaluating Real-Time Voice Agents: From Component Quality to Grounded Outcomes",
    "authors": [
      "Shivam Negi",
      "Arpit Rawat",
      "Rashi Jain"
    ],
    "abstract": "Real-time voice agents have moved from research prototypes to production deployments, yet the literature describing them is fragmented across three communities that rarely cite one another: speech foundation modelling, turn-taking psycholinguistics, and agentic evaluation. Architecture papers report latency, turn-taking papers report prediction accuracy, and agentic benchmarks report task success, so no single number describes whether a deployed agent is actually good. We address that gap with three evidence-based claims, each traceable to a corpus of 38 primary sources organised into an application-centric taxonomy of six categories. First, architecture choice is a deployment constraint rather than a settled verdict: a 2026 enterprise tutorial reports that no fully self-hostable end-to-end system yet meets production constraints, while a chunked cascade independently reaches state-of-the-art duplex behaviour, showing duplex behaviour is separable from duplex architecture. Second, evaluation has shifted decisively from component quality toward grounded outcomes, with recent benchmarks verifying backend state rather than trusting what the agent claims to have done. Third, the dyadic assumption in most models and benchmarks is breaking down: multiparty turn-taking and multi-speaker reasoning benchmarks show that deciding when not to speak, and reasoning about who may be told what, are first-class capabilities two-participant framings cannot measure. For each source we state the problem it targets, its mechanism, and its reported evidence, alongside the search strategy, inclusion criteria, and a verification step that caught a misattributed arXiv identifier in circulation. We propose TRG (Timing-Recovery-Grounded), a reporting standard characterising an agent by timing, post-disruption recovery, and state-verified outcome together, with a conditional fourth axis for multiparty deployments.",
    "published": "2026-09-25T04:22:20Z",
    "updated": "2026-09-25T04:22:20Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.30798"
  },
  {
    "id": "2609.30797",
    "title": "HasMem: Hard-Origin Adaptively Softened Memory for Long-Term LLM Agents",
    "authors": [
      "Zihong He",
      "Junxiao Shen",
      "Chen Liang",
      "Hai-Ning Liang"
    ],
    "abstract": "Text-based memory and context compression support reuse of past interactions. Resizing continuous memory changes the input to a frozen LLM, coupling capacity allocation with readout. We propose Hard-Origin Adaptively Softened Memory (HasMem). Frozen hard-prompt embeddings provide a verifiable initial state. A controller adjusts memory widths, a Writer re-encodes resized entries, and Reader and Global provide readout adaptation and cross-turn state. On all $535$ questions in a reconstruction probe derived from the Multi-Session Chat (MSC) development split, the main configuration achieves lexical F1 of $95.3$ ($+4.4$ percentage points) at $93.6\\%$ of the hard reference's framed memory positions. With approximately matched per-question target body budgets, six configurations at mean per-entry retention around $0.83$--$0.91$ exceed rule-based re-encoding by $8.0$--$23.6$ exact-match (EM) percentage points. With fixed model parameters and rule target width ratio $0.75$, Global's EM gain passes a user-level exact paired test with Bonferroni correction over eight comparisons. On all $500$ LongMemEval-S questions, local lexical F1 rises from the hard reference's $3.4$ to $8.9$, and answer negative log-likelihood (NLL) falls from $12.257$ to $5.274$. F1 gains accompany lower EM on both evaluations.",
    "published": "2026-09-25T04:22:05Z",
    "updated": "2026-09-25T04:22:05Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.30797"
  },
  {
    "id": "2609.17527",
    "title": "Agentic Societies Need a Social Harness",
    "authors": [
      "Tapan Chugh",
      "Vidushi Singh",
      "Krish Jain",
      "Arvind Krishnamurthy",
      "Ratul Mahajan"
    ],
    "abstract": "An agentic society is a collection of AI agents that coordinate autonomously across trust boundaries, on behalf of different principals whose objectives may only partially align. We show experimentally that in agentic societies even honest, competent agents often fail to reach satisfactory outcomes with existing harnesses and messaging primitives, and that faulty or malicious agents can stall collaboration, influence outcomes, and pursue other harmful goals by exploiting vulnerabilities in communication (``speech''). We argue that agentic societies need a \\emph{social harness} for inter-agent interactions, in addition to each agent's \\emph{personal harness}, which manages its private context and communication with its principal. We propose a layered architecture for social harnesses which (i) prevents classes of failures outright, (ii) enables agents to detect invalid messages at runtime, and (iii) supports post-facto investigation and consequences, and highlight directions for future research to realize these capabilities.",
    "published": "2026-09-15T17:57:27Z",
    "updated": "2026-09-15T17:57:27Z",
    "categories": [
      "cs.MA",
      "cs.AI",
      "cs.NI"
    ],
    "url": "https://arxiv.org/abs/2609.17527"
  },
  {
    "id": "2609.17523",
    "title": "ScienceBuddy: Recursive-in-Recursive Self-Improvement for Interactive Scientific Agents",
    "authors": [
      "Shuhan Xue",
      "Jianyuan Zhong",
      "Ziyuan Nan",
      "Wenbin Li",
      "Zhaochen Yu",
      "Jinchao Ding",
      "Qiang Gao",
      "Pengyu Zhan",
      "Yuntong Zhang",
      "Tian Cheng",
      "Zhenfei Yin",
      "Yingcheng Wu",
      "Ling Yang"
    ],
    "abstract": "We introduce and release ScienceBuddy, an interactive scientific research workspace that brings continually improving scientific agents into researchers' everyday workflows. ScienceBuddy supports researchers in carrying out scientific tasks while transforming their requests, feedback, and execution evidence into tasks and evaluation rubrics for continual learning. At its core is recursive-in-recursive self-improvement, a paradigm that couples harness evolution with model reinforcement learning: the inner recursion improves the harness with the model fixed, while the outer recursion trains the model under the improved harness. Harness evolution shapes training experience, and model learning creates new opportunities for harness adaptation. We present case studies of researcher interaction, harness refinement, and model learning, with the benchmark cases spanning four scientific task families. By releasing ScienceBuddy as a research product, we make this paradigm available to the scientific community and take a step toward discovery intelligence: scientific AI that advances through sustained collaboration with researchers and evolves alongside the research it supports. Website: http://science-buddy.io",
    "published": "2026-09-15T17:55:28Z",
    "updated": "2026-09-15T17:55:28Z",
    "categories": [
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2609.17523"
  },
  {
    "id": "2609.17521",
    "title": "PhysStream: Streaming Physics-Grounded Video Generation with Structured Scene Memory and Fine-Grained Motion Control",
    "authors": [
      "Chuhao Chen",
      "Peter Wonka",
      "Chaoyang Wang",
      "Chen Wang",
      "Qiao Feng",
      "Sergey Tulyakov",
      "Lingjie Liu"
    ],
    "abstract": "Interactive control for video generation is moving from coarse prompts toward fine-grained, physically meaningful manipulation of dynamic scenes. Yet existing controllable methods either require the full control schedule before generation starts, or use pixel-space signals that dictate object positions rather than physical dynamics. To address these limitations, we propose PhysStream, an autoregressive model for physics-grounded image-to-video synthesis that incorporates structured scene memory---positional maps and object tracking maps derived online from previously generated frames---and supports fine-grained motion control via sparse velocity-increment signals that encode physical quantities, letting the model learn the underlying dynamics. We train our model in two stages: a bidirectional model is first finetuned with motion-control conditioning, then a causal autoregressive model is trained with additional structured scene memory, further improving physical consistency. PhysStream enables interactive, mid-generation control over multi-object tabletop rigid-body scenes---a capability not supported by prior methods---reducing motion distribution distance (FVMD) by 33% and trajectory error by 12% over the strongest baselines on synthetic benchmarks, and is preferred by human evaluators in over 85% of in-the-wild comparisons. Please check our website for more details: https://czzzzh.github.io/PhysStream",
    "published": "2026-09-15T17:55:13Z",
    "updated": "2026-09-15T17:55:13Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.GR"
    ],
    "url": "https://arxiv.org/abs/2609.17521"
  },
  {
    "id": "2609.17516",
    "title": "When Should LLMs Abstain? Chain-of-Self-Questioning for Selective Risk Control",
    "authors": [
      "Ali Şenol"
    ],
    "abstract": "Large language models can produce fluent answers when their factual support is weak. This paper introduces Chain-of-Self-Questioning (CoSQ), a prompt-only framework that makes answer commitment conditional on an explicit assessment of the information required to answer a question. We evaluate three CoSQ variants under seventeen conditions on the 817-item TruthfulQA multiple-choice validation set using eleven open-weight and hosted model families. In the final balanced-option protocol, Grounded-CoSQ at τ=0.90 reduces the mean unconditional wrong-commitment rate from 13.1% under chain-of-thought prompting to 8.9%, a 32.1% relative reduction, while increasing answered accuracy from 86.9% to 89.7% and answering 87.6% of questions. Both improvements hold for all eleven models and at every evaluated threshold. Critical-CoSQ and Adaptive-CoSQ provide neighboring operating points with 88.6% and 86.5% coverage, respectively, while remaining more reliable than the baseline. A secondary Natural Questions Short-Answer evaluation provides convergent open-form evidence. These findings show that self-assessment can support explicit, tunable answer-or-abstain decisions when an unsupported commitment is more costly than referral or review.",
    "published": "2026-09-15T17:52:24Z",
    "updated": "2026-09-15T17:52:24Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.17516"
  },
  {
    "id": "2609.17509",
    "title": "LACE: Layer-Wise Compression for Dynamic Frame Rate Codecs",
    "authors": [
      "Thanapat Trachu",
      "Samuele Cornell",
      "William Chen",
      "Shinji Watanabe"
    ],
    "abstract": "Neural audio codecs are a key component in speech language modeling. However, their high frame rates lead to long sequence lengths, increasing computational costs. Dynamic frame rate codecs mitigate this by reducing the effective frame rate using a compression step to merge multiple frames together. However, most prior methods either operate on single-codebook codecs or apply a single compression step before multi-layer quantization. This forces all quantization layers to share the same segmentation boundaries, despite the residual embeddings at different quantization layers exhibiting different rates of change over time. We propose LACE (Layer-Adaptive Codec Encoding), a dynamic frame rate codec that applies an independent compression step at each quantization layer, enabling layer-specific segmentation boundaries. To use LACE tokens in downstream text-to-speech (TTS), we further introduce union alignment and boundary anchor mechanisms to make durations consistent across layers while preserving compression benefits. Experiments on LibriTTS show that LACE offers a better rate-quality tradeoff than prior dynamic frame rate methods on the reconstruction task and improves TTS inference efficiency while maintaining competitive synthesis quality. Our code is released as part of the ESPnet3 codec recipe.",
    "published": "2026-09-15T17:46:51Z",
    "updated": "2026-09-15T17:46:51Z",
    "categories": [
      "cs.SD",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2609.17509"
  },
  {
    "id": "2609.17499",
    "title": "ENCP: Episode-Normalized Conformal Prediction for Vision-and-Language Navigation",
    "authors": [
      "Vicky Feliren",
      "A. Taufiq Asyhari",
      "Muhamad Risqi U. Saputra"
    ],
    "abstract": "Uncertainty estimation for Vision-Language-Navigation (VLN) models is a critical task since it can help identify ambiguous and unreliable predictions, enabling agents to make safer navigation decisions. As one of the most advanced uncertainty estimation frameworks, conformal prediction (CP) offers a promising approach for uncertainty estimation in VLN. However, given that VLN agent requires a sequence of steps, standard calibration in conformal prediction fails to provide coverage guarantee it promises over a dependent, variable-length VLN episode. To this end, we propose Episode-Normalized Conformal Prediction (ENCP), which rescales a nonconformity score by the policy's residual confidence and calibrates one maximum score per episode. Under exchangeable calibration and test episodes, this construction covers the ground truth at every step with probability at least $1 - α$, while allowing dependence among steps within an episode. Across four VLN policies and three nonconformity scores on R2R and REVERIE dataset, ENCP meets all reported empirical step-coverage targets on the seen-to-unseen evaluation. These results demonstrate that ENCP can provide model-agnostic uncertainty estimates, which might be useful for determining when a VLN agent should defer to a more capable predictor, including human assistance.",
    "published": "2026-09-15T17:42:15Z",
    "updated": "2026-09-15T17:42:15Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2609.17499"
  },
  {
    "id": "2609.17496",
    "title": "Verifiable Social Reasoning for LLM Assistants",
    "authors": [
      "Amir Taubenfeld",
      "Zorik Gekhman",
      "Avigail Grinstein-Dabush",
      "Itay Laish",
      "Ariel Goldstein",
      "Marian Croak",
      "Avinatan Hassidim",
      "Yossi Matias",
      "Amir Feder"
    ],
    "abstract": "LLM assistants are widely used for daily social advice, yet evaluating their social reasoning in such consultation settings remains challenging since (i) it requires setups where the assistant learns about social situations from subjective user narratives, and (ii) social properties, such as others' intentions, typically lack verifiable ground truth. To address these challenges, we introduce Fuse, a multi-agent simulation framework for studying user-mediated social reasoning. In Fuse, a target agent with a hidden motive interacts with other agents including one representing the user, who then consults the evaluated assistant to infer the target's motive, providing verifiable ground truth by construction. Simulation faithfulness is validated through a human study with 24k annotations. We apply Fuse to 12 LLMs and demonstrate its analytical utility by systematically isolating key factors, showing that (i) user mediation compounds the inherent difficulty of social reasoning; (ii) LLMs exhibit systematic sensitivity to biased user framing; (iii) models can require more details than humans need to reach a correct prediction; and (iv) longer conversations do not always improve performance despite providing opportunities for clarifying questions. We open-source Fuse and a dataset with 21k examples.",
    "published": "2026-09-15T17:37:29Z",
    "updated": "2026-09-15T17:37:29Z",
    "categories": [
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2609.17496"
  },
  {
    "id": "2609.17488",
    "title": "LimiX-2: A Contextual Mechanism Network Towards General Structured-Data Intelligence",
    "authors": [
      "Xingxuan Zhang",
      "Gang Ren",
      "Hao Yuan",
      "Hao Zou",
      "Hongze Tan",
      "Hui Wang",
      "Jianhao Song",
      "Jiansheng Li",
      "Jiayao Zhang",
      "Jinghan Zhang",
      "Kaifang Li",
      "Lang Mo",
      "Li Mao",
      "Mingchao Hao",
      "Nuo Xu",
      "Rui Ding",
      "Ruiji Zhang",
      "Shuyang Li",
      "Siyu Mei",
      "Tianyang Zhang",
      "Weiyang Mu",
      "Yancheng Dong",
      "Yongxian Wei",
      "Yuan Xue",
      "Yuanrui Wang",
      "Yue He",
      "Zijia Yang",
      "Ziyun Li",
      "Dongzhe Li",
      "Fuqiang Wang",
      "Jiandong Liu",
      "Jiawei Chen",
      "Jiaxin Du",
      "Kaijie Cheng",
      "Kehan Li",
      "Lei Sun",
      "Linjun Zhou",
      "Ningbo Dai",
      "Qi Wang",
      "Renzhe Xu",
      "Shaoxing Du",
      "Shumeng Yang",
      "Wang Lu",
      "Wenjing Chu",
      "Xiannan Huang",
      "Xiaoyu Lin",
      "Xing Ai",
      "Xinyan Han",
      "Xuanyue Li",
      "Xuanyue Su",
      "Xukun Zhang",
      "Yan Lu",
      "Yaxin Zhang",
      "Yi Qin",
      "Yifei Huang",
      "Yihan Xu",
      "Yongle Lv",
      "Yuanyuan Jiang",
      "Yushan Han",
      "Peng Cui"
    ],
    "abstract": "We introduce LimiX-2, a new model in the LimiX family, developed through model and data scaling guided by our previously established scaling laws. LimiX-2 adopts the Contextual Mechanism Networks (CMNs) paradigm and is pretrained with Context-Conditional Masked Modeling (CCMM). CMNs shifts the organizing principle of in-context learning from target-centric prediction to mechanism-oriented joint modeling. Rather than centering the network on the $p(y \\mid x, D_{\\mathrm{context}})$ objective of conventional tabular PFNs, it is designed around learning $p(x, y \\mid D_{\\mathrm{context}})$, a context-dependent representation of the joint structure underlying data generation. Pretraining uses synthetic datasets generated by structural causal models (SCMs) spanning diverse graph structures, functional mechanisms, and observation processes. Evaluations on TabArena, TALENT, and BCCO show that LimiX-2 outperforms current dataset-specific models and tabular foundation models. Beyond predictive performance, the CMN paradigm also promotes causal awareness in LimiX-2: its feature attention encodes direct causal relationships, enabling accurate causal skeleton recovery.",
    "published": "2026-09-15T17:30:02Z",
    "updated": "2026-09-15T17:30:02Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.17488"
  },
  {
    "id": "2609.17485",
    "title": "Quick-View Takeaways: How Does Title Framing Influences Pattern Identification in Line Charts?",
    "authors": [
      "Jasmine Lim",
      "Tapendra Pandey",
      "Arran Zeyu Wang",
      "Ghulam Jilani Quadri"
    ],
    "abstract": "Visual data communication in digital media is increasingly characterized by short attention spans and snapshot-based viewing, often employing line charts to convey trends and patterns. Among all visual elements, titles are crucial ones that can shape how viewers interpret visual information and form chart takeaways. In this study, we examine how title characteristics, particularly title word count and intended message, influence people's pattern identification in single-class line charts. Participants viewed 50 line charts collected from online news media and identified the pattern they perceived. Our results demonstrate that both title word count and intended message significantly influence viewers' pattern identification. Our findings highlight the importance of title design in shaping chart takeaways and effective visualization communication.",
    "published": "2026-09-15T17:26:12Z",
    "updated": "2026-09-15T17:26:12Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2609.17485"
  },
  {
    "id": "2609.17479",
    "title": "Det-LIME: Detector-Aware, Multi-Instance Local Interpretable Model-Agnostic Explanations for Automated Marine Mammal Detection",
    "authors": [
      "Jiayi Zhou",
      "David W. Johnston",
      "Brinnae Bent"
    ],
    "abstract": "Despite the rapid uptake of black-box object detectors in marine mammal research and monitoring, explainability techniques are rarely integrated into conservation workflows. Furthermore, most classification-oriented explainability tools are ill-suited to detection tasks involving imagery of social organisms or those with colonial life histories, as they ignore multiple detections within a scene and produce single-instance outputs that blur evidence across individuals. These methods also generate low-resolution, often biologically irrelevant visuals, limiting their utility for debugging, targeted data augmentation, and refined data collection. We proposed Det-LIME, a detector-aware, multi-instance adaptation of Local Interpretable Model-Agnostic Explanations (LIME) that produced instance-specific, box-aligned explanations by combining per-detection weighting, a proximity kernel that emphasizes regions near each box, and Intersection-over-Union-based matching to track the same instance across perturbations. We evaluated Det-LIME on aerial drone imagery for harbor seal detection, with an additional seabird case study to assess generality, and compared it with vanilla LIME, Stabilized LIME, Deterministic LIME, and gradient-based attribution methods. Using the Attribution Ratio and Max Saliency Hit Rate metrics, we showed that Det-LIME consistently improved multi-instance attribution. In practice, these higher-resolution, instance-aware explanations provide insight into model outputs and support post-processing, debugging, and actionable improvements in modeling and data collection or augmentation.",
    "published": "2026-09-15T17:20:16Z",
    "updated": "2026-09-15T17:20:16Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.17479"
  },
  {
    "id": "2609.17475",
    "title": "JustFit: 200K-Token LLM Serving on a 24 GiB Laptop with Just-in-Time State Management",
    "authors": [
      "Yuhua Chen"
    ],
    "abstract": "Capable open-weight models make local coding and reasoning attractive, but their context and execution state strain laptop memory. We present JustFit, an MLX-based inference runtime that combines KVExec for compressed KV execution, PhaseSwap for component residency, and StateTrans for state-preserving serving transitions. These mechanisms fuse reconstruction and coordinate just-in-time materialization and release, independently of model-weight quantization. In full-execution capacity tests on a 24 GiB M4 Pro MacBook running Qwen3.8-27B MXFP4, three independent runs complete 196,608 input and 16,384 output tokens, increasing completed single-request context from the mlx-vlm baseline's 30,720 positions to 212,992 (6.93x); a separate two-request run retains 229,376 positions in aggregate. In separate performance tests, a 32K-input, 64-output probe reaches 19.11 tokens/s, and a repeated 32K+6K workload has a median peak process footprint of 16,374 MiB. The integrated runtime answers 29 of 30 AIME 2026 problems correctly, showing how compact state and lifetime-aware execution expand local serving capacity while supporting extended generated reasoning.",
    "published": "2026-09-15T17:15:48Z",
    "updated": "2026-09-15T17:15:48Z",
    "categories": [
      "cs.AI",
      "cs.PF"
    ],
    "url": "https://arxiv.org/abs/2609.17475"
  },
  {
    "id": "2609.17474",
    "title": "Coupled Calibration and Learning: Mitigating Teacher Bias in LLM Distillation without Target-Domain Reward Feedback",
    "authors": [
      "Haichen Hu",
      "Yuheng Zhang",
      "David Simchi-Levi"
    ],
    "abstract": "Large language model (LLM) distillation aims to transfer the capabilities of a powerful teacher to a smaller student. Direct imitation, however, can also transfer the teacher's systematic bias and errors. This challenge is particularly pronounced under covariate shift, when the teacher's reliability on target questions is uncertain and target-domain reward feedback is unavailable. We propose Coupled Calibration and Learning (CCL), an LLM distillation algorithm that couples teacher calibration with student updates through token-level branching, using reward feedback only on source questions. Each iteration calibrates the teacher using source feedback and then uses the calibrated teacher to train the student on target questions. The updated student, in turn, informs subsequent calibration. In an autoregressive policy framework, we prove that the output student's expected average Kullback-Leibler divergence to the oracle student converges to zero at a polynomial rate in the number of iterations. The oracle maximizes the true reference-regularized target reward within the student class, which need not represent the unrestricted optimal policy. Our analysis quantifies the progress of projected student gradient updates while controlling the error in teacher calibration. We further establish a separation from regularized direct matching: its error relative to the oracle student can remain bounded away from zero even when the teacher achieves higher regularized target reward than every student policy. These results demonstrate that LLM distillation can overcome persistent teacher bias and recover the optimal student through coupled calibration and learning, without target-domain reward feedback.",
    "published": "2026-09-15T17:15:40Z",
    "updated": "2026-09-15T17:15:40Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "math.ST",
      "stat.ML"
    ],
    "url": "https://arxiv.org/abs/2609.17474"
  },
  {
    "id": "2609.17355",
    "title": "Evaluating Ambient Clinical Scribes in India: The Need for Multilingual Real-World Clinical Conversation Data",
    "authors": [
      "Siddharth D Jaiswal",
      "Krithi S",
      "Ashish Makani",
      "Suvrankar Datta",
      "Sunayana Sitaram",
      "Mohit Jain"
    ],
    "abstract": "Ambient clinical scribes (ACS) are being rapidly deployed at scale across Global South healthcare settings, aiming to reduce clinician documentation time, especially in overburdened environments like India. These ACS are primarily developed or distilled from models built and validated on Global North speech, languages and consultation styles. Indian clinical encounters are brief, triadic, multilingual, code-mixed with low-resource languages, and conducted in highly resource-constrained, noisy settings -- increasing the likelihood of ASR and note-generation errors manyfold. We posit an urgent need to develop a standardized evaluation infrastructure to assess whether these systems are safe, reliable, and well-suited to the Indian healthcare setting. We substantiate our claims through a mixed-methods study -- a systematic survey of publicly available patient-clinician conversational datasets, a quantitative comparison of these datasets against conversational and cultural markers drawn from the Indian clinical-communication literature, and semi-structured interviews with five organizations building and deploying ACS in India and Africa. Our survey shows that there are no publicly available, large-scale, real-world benchmarks for ACS in India, with existing datasets being overwhelmingly synthetic. We note that the available Global North datasets diverge significantly from the expected conversational and cultural structures of Indian encounters. Finally, our interviews reveal that deploying organizations have each built proprietary, incomparable evaluation pipelines, creating a fragmented ecosystem with no independent and reliable basis for procurement. We call for the development of a publicly shared, real-world, multilingual benchmark for ACS evaluation and outline the properties and policies such a benchmark would require.",
    "published": "2026-09-15T15:52:15Z",
    "updated": "2026-09-15T15:52:15Z",
    "categories": [
      "cs.CY",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2609.17355"
  },
  {
    "id": "2609.17346",
    "title": "Where Should a Document Live: Context, Representations, or Parameters?",
    "authors": [
      "Nathanaël Carraz Rakotonirina",
      "Momchil Hardalov",
      "Gonzalo Iglesias",
      "Adrià de Gispert"
    ],
    "abstract": "To answer questions outside of their pre-training data, large language models (LLMs) need access to new information, which can be presented in the context window as documents, encoded into the model's parameters, or injected as latent representations. However, each of these methods comes with different efficiency, cost, and performance trade-offs, with no single winner. We present a controlled comparison of representation-based (KV-cache based) and parametric (fine-tuning-based) adaptation methods on five knowledge-intensive benchmarks. We show that in the oracle setting, Cartridges (KV) are the most accurate injection method at nearly every storage budget, outperforming parametric methods by 10 points. Compaction (KV) matches Cartridges only at low compression rates, lagging behind the parametric methods by 10 points at rates higher than $50\\times$. In the more realistic multi-document retrieval scenario, Cartridges are the only method that matches in-context learning (ICL), leading the parametric methods by 29 points and Compaction by 15 points. Nonetheless, Cartridges are also the only method, besides full fine-tuning and large MLP adapters, that suffers from catastrophic forgetting, i.e., a 6% performance degradation on control benchmarks, with 13% in coding.",
    "published": "2026-09-15T15:47:02Z",
    "updated": "2026-09-15T15:47:02Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.17346"
  },
  {
    "id": "2609.17335",
    "title": "LumiNote: LLM-Assisted Multimodal Instruction for VR Stage Lighting Education",
    "authors": [
      "Danxuan Liang",
      "Chun Yin Li",
      "Zheng Wei",
      "Xian Xu",
      "Meng Xia",
      "Huamin Qu",
      "Wai Tong"
    ],
    "abstract": "Stage lighting education requires instructors to bridge abstract concepts, technical operations, and learner-understandable representations. While Virtual Reality (VR) removes physical constraints, existing systems provide limited support for live instruction. We present LumiNote, an LLM-assisted VR system that transforms spoken pedagogical intent into instructor-reviewable spatial annotations, executable demonstrations, and linguistic support. In an exploratory study with 3 instructors and 24 students, we examined how instructors incorporated LumiNote into familiar lighting topics and how students received the resulting representations. We found LLM assistance most valuable for expressive, under-specified goals, but requiring greater expert intervention for fixture-specific or spatial configuration requests. Instructors engaged with generated suggestions as a controllable refinement process, shifting effort from manual setup toward pedagogical expression. However, representations that externalized expert reasoning did not always align with novice comprehension. These findings characterize LLM-assisted VR instruction as a domain-grounded mediation process among expert expression, executable operations, and learner-facing representations.",
    "published": "2026-09-15T15:38:49Z",
    "updated": "2026-09-15T15:38:49Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2609.17335"
  },
  {
    "id": "2609.15855",
    "title": "K-Bench: a clinically calibrated benchmark for evaluating large language models in high-risk mental health conversations",
    "authors": [
      "Laura M. Vowels",
      "Matthew J. Vowels",
      "Shivali Sharma",
      "Apoorv Jha",
      "Rehnuma Choudhury",
      "Wasseem El Sarraj",
      "Rachel Francois-Walcott",
      "Aruba Hussain",
      "Sarah Ingram",
      "Angela Loulopoulou",
      "Adva Segal",
      "Elena Volkova"
    ],
    "abstract": "People increasingly use large language models (LLMs) for mental health support, yet their safety in evolving, high-risk conversations remains poorly characterised. We developed K-Bench, a clinician-calibrated, protected benchmark evaluating 125 model configurations representing 33 base models from 14 providers across a fixed cohort of 200 multi-turn vignettes involving suicide, self-harm, domestic violence, substance misuse, and no-risk presentations. Synthetic patient conversations showed substantial distributional overlap with real human-AI conversations. A frozen GPT-4o judge achieved 94.2% exact agreement with clinician consensus across 6,751 eligible item comparisons from 151 clinician-rated transcripts. Leading models combined strong supportive conversation with combined-risk scores above 95, whereas risk exploration exposed substantial variation among lower-performing configurations. Therapeutic prompting produced configuration-specific gains concentrated among weaker models, while elevated reasoning produced no average improvement. K-Bench combines broader clinical coverage and configuration-scale comparison with a continuously updated public leaderboard whose operational test materials are protected from direct optimisation. The leaderboard is available at www.k-bench.ai.",
    "published": "2026-09-14T16:49:23Z",
    "updated": "2026-09-15T07:30:50Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.15855"
  },
  {
    "id": "2609.15849",
    "title": "Before You Poll with LLMs: A Deliberative Diagnostic Framework",
    "authors": [
      "Ahmed Wali",
      "Hassaan Tayyab"
    ],
    "abstract": "Can LLMs reason through new information like humans, or do they merely retrieve cached opinions? This is critical for silicon sampling, where LLM personas simulate public opinion at scale. Current evaluations test only whether personas hold the right opinions -- a static snapshot. But opinion research increasingly depends on dynamic fidelity: whether personas update beliefs in response to new arguments, as humans do during deliberation. No existing benchmark tests this. We introduce the Deliberative Polling Diagnostic Framework, which compares human and LLM belief shifts after identical informational interventions. Grounded in deliberative polling, it surfaces failures invisible to static evaluation: models that produce plausible partisan opinions can still misrepresent how those opinions change. Applying the framework to five frontier models using data from America in One Room (526 personas, 72 questions), we find that every model fails, each in a unique manner. GPT-5.1 exhibits reversal: its personas become more hostile toward the opposing party after balanced information, while humans become less so. This reversal is selective (80% on outgroup vs. 26% on policy questions) and symmetric across partisan identities. Gemini 2.0 Flash, Claude Sonnet 4.5, and Llama 3.3 70B exhibit overshoot, shifting correctly but at 5-7x human magnitude. DeepSeek V3 exhibits rigidity with near-zero change. Targeted ablations reveal that policy content triggers these failures and that they are identity-specific: GPT-5.1 reverses on outgroup questions but overshoots on ingroup; Gemini shows the inverse. We term this signature self-sycophancy: conformity to the model's internal stereotype of the persona rather than reasoning from the information provided. Our framework offers a concrete protocol: run the deliberative diagnostic before trusting LLM personas to mimic revised beliefs.",
    "published": "2026-09-14T16:41:48Z",
    "updated": "2026-09-14T16:41:48Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.CY"
    ],
    "url": "https://arxiv.org/abs/2609.15849"
  },
  {
    "id": "2609.15847",
    "title": "Proportional-Fair Resource Allocation and Dual-Threshold Early-Exit Inference for Secure Cooperative Multi-Layer Edge Intelligence",
    "authors": [
      "Thai T. Vu",
      "John Le",
      "Tu N. Nguyen",
      "Jun Shen",
      "Quang Vinh Duong",
      "Ha Nguyen"
    ],
    "abstract": "This paper proposes FREDI (Fair Resource Allocation for Edge Dual-Threshold Inference), a secure wireless edge-intelligence framework for event-triggered inference in a cooperative user equipment (UE)--edge server (ES)--cloud system. Each UE performs early-exit convolutional neural network (CNN) screening using dual confidence thresholds, while critical events are securely offloaded to an edge server for detailed classification. We formulate a proportionally-fair utility maximization problem that jointly optimizes UE--ES association, wireless and processing resources, and confidence thresholds. FREDI decomposes the problem into proportional-fair resource allocation and dual-threshold inference optimization. We prove that the detected-critical event set is set-monotone non-increasing in both thresholds, and exploit the finite empirical confidence domain for exact threshold optimization. An empirical resource--utility response envelope yields a computable global suboptimality bound and a sufficient condition for global optimality. By pre-eliminating infeasible UE--ES pairs and exactly projecting out bandwidth and transmit-power variables, the resource-allocation subproblem is reduced to a mixed-integer exponential-cone program solvable to the certified global optimality within a prescribed gap. Numerical results with early-exit MobileNetV2 and ShuffleNetV2 demonstrate near-perfect UE fairness with aggregate utility close to a Sum-Utility benchmark, reveal security-induced resource fragmentation, and demonstrate the Stage-A scalability from 6 to 144 UEs with median solving time below 0.1~s in the tested configurations.",
    "published": "2026-09-14T16:41:15Z",
    "updated": "2026-09-14T16:41:15Z",
    "categories": [
      "cs.NI",
      "cs.CV",
      "cs.ET",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.15847"
  },
  {
    "id": "2609.15838",
    "title": "Per-Matrix Optimality Is Not Enough: Three-Level Optimization for Low-Rank LLM Compression",
    "authors": [
      "Huicheng Zhang",
      "Xiyao Feng",
      "Ze-Tong Li",
      "Chengkai Zhu",
      "Xiao Shi",
      "Xiwei Pan",
      "Jinguo Liu",
      "Ge Bai",
      "Xin Wang"
    ],
    "abstract": "Per-matrix singular value decomposition (SVD) truncation is Eckart-Young optimal in the whitened Frobenius norm, but errors from independently compressed matrices compound through the block's nonlinear forward pass. Inspired in part by hierarchical variational optimization in quantum many-body methods, we introduce a three-level chain that widens optimization scope from individual matrices to Transformer blocks to the full model: whitened SVD~(L1), block-level joint optimization~(L2), and end-to-end language-modeling loss refinement~(L3), all from 256 calibration sequences, with no instruction or recovery data. On LLaMA-7B at 60% compression, the chain reduces WikiText-2 perplexity from 42.1 to 19.1 to 11.4. The block-level stage acts as a regularizer: skipping it worsens Penn Treebank (PTB) perplexity by 24 points, a gap that additional end-to-end training did not close in our experiments. Perplexity gains hold across 20-80% compression, five architectures up to 13B parameters, and both in-distribution and out-of-distribution benchmarks, though the cross-architecture rows use architecture-specific configurations and the ratio sweep was not run under one common protocol. With more calibration data, skipping the block-level stage becomes competitive, revealing an offline compute--data trade-off. We therefore claim improvements only in perplexity and compression fidelity; downstream accuracy remains well below the dense model.",
    "published": "2026-09-14T16:36:46Z",
    "updated": "2026-09-14T16:36:46Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.15838"
  },
  {
    "id": "2609.15834",
    "title": "TRACE: Two-Stage Detector-Response Estimation With Angular Cosine Expansion for Ring Artifact Correction in Photon-Counting CT",
    "authors": [
      "Jigang Duan",
      "Heran Wang",
      "Ligen Shi",
      "Zheng Sun",
      "Ping Yang",
      "Xing Zhao"
    ],
    "abstract": "Detector response nonuniformity introduces systematic projection errors and ring artifacts in photon-counting detector computed tomography (PCD-CT). In measured PCD-CT data, residual stripe amplitudes vary slowly with projection angle, which fixed-bias models cannot adequately capture. We propose TRACE, a two-stage unsupervised sinogram decomposition method for estimating and correcting these response-related errors. TRACE represents stripes as a fixed bias plus low-order discrete cosine transform (DCT) components, using a small number of coefficients to describe angular variations at each detector element. A learnable analysis--synthesis architecture represents the ideal projections, while two-stage optimization separates them from fixed and then dynamic stripes. An angular-gradient soft orthogonality constraint suppresses correlated variations within the shared DCT gradient subspace, reducing the leakage of object structures into the artifact estimate. All parameters are optimized directly on the measured sinogram without paired training data. Experiments on measured QRM mouse phantom and porcine trotter data show that TRACE suppresses ring artifacts and improves image uniformity while preserving edge sharpness, soft-tissue texture, and trabecular detail.",
    "published": "2026-09-14T16:31:32Z",
    "updated": "2026-09-14T16:31:32Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.15834"
  },
  {
    "id": "2609.15833",
    "title": "Integrating Multi-view Multi-light Surface Reconstruction into Cultural Heritage Workflows",
    "authors": [
      "Baptiste Brument",
      "Robin Bruneau",
      "Benjamin Coupry",
      "Vincent Demoulin",
      "Jean Mélou",
      "Antoine Laurent",
      "Fabien Castan",
      "Jean-Denis Durou",
      "Lilian Calvet"
    ],
    "abstract": "Cultural heritage documentation increasingly relies on image-based 3D surface reconstruction, with photogrammetry software making such workflows accessible to archaeologists, conservators, and heritage technicians. These tools have been successful for conventional multi-view acquisition, but they do not routinely exploit richer multi-view, multi-light data, despite its potential for improving fine-scale surface reconstruction. This limitation is particularly relevant in heritage contexts, where controlled-light acquisition devices such as RTI domes are already used to capture illumination-varying image sets. The challenge is therefore to connect these existing acquisition practices with recent computer vision methods in a form that can be used within operational heritage workflows. In this work, we address this need by integrating state-of-the-art components from computer vision for multi-view, multi-light surface reconstruction into Meshroom, an open-source photogrammetry framework. Rather than proposing a new reconstruction algorithm, our contribution is to assemble and expose existing advanced methods, namely a complete photometric stereo ecosystem (calibrated, self-calibrated and universal), automatic object masking, and multi-view normal-and-reflectance integration, within a usable heritage-oriented workflow. The proposed system thus provides an intermediate software layer between computer vision research code and practical cultural heritage applications, making recent techniques easier to use and evaluate.",
    "published": "2026-09-14T16:31:18Z",
    "updated": "2026-09-14T16:31:18Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.15833"
  },
  {
    "id": "2609.15830",
    "title": "CiteGuard-RAG: A Validation-Centered AI System for Evidence-Grounded Question Answering",
    "authors": [
      "Sumit Barua",
      "Guan Hong",
      "Halil Dursunoglu",
      "Charles Rodgers",
      "Alvis Fong"
    ],
    "abstract": "Retrieval-augmented generation (RAG) can improve access to complex information; however, retrieving evidence alone does not ensure that answers are grounded, citation-valid, or appropriately refused. This paper introduces CiteGuard-RAG, a validation-centered AI system for evidence-grounded question answering. The system integrates hybrid semantic-lexical retrieval, citation-constrained generation, sentence-level grounding validation, and single-pass regeneration. Validation is used at runtime to determine whether a candidate answer should be accepted, refused, or regenerated before final delivery. CiteGuard-RAG is evaluated on 400 questions across a controlled housing-law dataset, PrivacyQA, and CUAD. In the controlled evaluation, it achieves 99.1% retrieval accuracy, 98.3% grounded-answer accuracy, and 98.3% citation validity, with no validation-detected hallucinations. Ablation results show that grounded-answer accuracy drops sharply when validation is removed, even when retrieval accuracy remains unchanged. External evaluation shows that while citation validity remains strong, evidence utilization, span alignment, and refusal calibration become harder under domain shift. These findings indicate that trustworthy RAG systems require explicit validation between retrieval and final answer delivery. CiteGuard-RAG provides a practical architecture for linking retrieval, generation, citation checking, abstention, and regeneration in high-stakes information access.",
    "published": "2026-09-14T16:30:54Z",
    "updated": "2026-09-14T16:30:54Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.IR"
    ],
    "url": "https://arxiv.org/abs/2609.15830"
  },
  {
    "id": "2609.15820",
    "title": "AlgoEvo: Self-Evolving Agentic Search for Automated Algorithm Discovery",
    "authors": [
      "Junhao Qiu",
      "Qinglong Hu",
      "Xialiang Tong",
      "Mingxuan Yuan",
      "Liyong Lin",
      "Qingfu Zhang"
    ],
    "abstract": "Large language models have advanced automated algorithm discovery by synthesizing executable code, but existing frameworks trap them in rigid search pipelines with pre-defined control flows. This limitation restricts adaptive reasoning, blocks cross-paradigm transfer, and discards valuable execution feedback. We propose AlgoEvo, a unified agentic framework that transforms automated algorithm discovery into an interactive, knowledge-accumulating process. An autonomous agent dynamically inspects, diagnoses, and edits code based on runtime feedback. A design skill hub decouples paradigm-specific knowledge from the core discovery engine, allowing a single workflow to seamlessly handle single-objective, multi-objective, and multi-component design. Meanwhile, a hierarchical experience mechanism organizes search trajectories into a task-level tree to guide exploration and consolidates cross-task patterns into reusable skills. Across six representative benchmark tasks, AlgoEvo matches or surpasses specialized methods with substantially fewer evaluations and reduced token consumption, demonstrating strong intra-task accumulation, cross-task transfer, and the ability to reproduce or exceed existing state-of-the-art performance through flexible skill activation.",
    "published": "2026-09-14T16:24:27Z",
    "updated": "2026-09-14T16:24:27Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.15820"
  },
  {
    "id": "2609.15818",
    "title": "Atria Dawn: The Dawn of Agentic Superintelligence",
    "authors": [
      "Honglin Guo",
      "Tao Gui",
      "Yicheng Chen",
      "Guanting Dong",
      "Qiming Ge",
      "Yuyang Hu",
      "Zixian Huang",
      "Jiajie Jin",
      "Alexander Lam",
      "Yining Li",
      "Jiahang Lin",
      "Yanjiang Liu",
      "Xinyu Lu",
      "Haijun Lv",
      "Junlin Shang",
      "Qisheng Su",
      "Guoqiang Wang",
      "Rui Wang",
      "Zhecan Wang",
      "Hao Xiang",
      "Xinchen Xie",
      "Shuhao Xing",
      "Xiaoyu Xing",
      "Wanghan Xu",
      "Xinyu Yang",
      "Yajie Yang",
      "Chengfeng Zhao",
      "Haoran Zhao",
      "Ruojun Zhou",
      "Yunhua Zhou",
      "Yicheng Zou",
      "Kun Cai",
      "Qiye Cai",
      "Xinmeng Che",
      "Haodong Chen",
      "Jiabei Chen",
      "Jiahao Chen",
      "Jiayi Chen",
      "Yujia Chen",
      "Lizhi Cui",
      "Youheng Dai",
      "Xin Deng",
      "Yi Dong",
      "Shihan Dou",
      "Chenya Gu",
      "Xu Guo",
      "Ding Han",
      "Feiyang Hao",
      "Haotan He",
      "Jie Hou",
      "Binze Hu",
      "Zijian Hu",
      "Junhao Huang",
      "Huicheng Jiang",
      "Jiazhen Jiang",
      "Shufan Jiang",
      "Jiahao Kuang",
      "Bowen Lai",
      "Bo Li",
      "Jiaqiang Li",
      "Peng Li",
      "Qilong Li",
      "Zhuoqun Li",
      "Jiaxiang Liu",
      "Shuainan Liu",
      "Tong Liu",
      "Yi Liu",
      "Zhonghang Lu",
      "Jianwen Luo",
      "Yanyi Luo",
      "Huijie Lv",
      "Ningsheng Ma",
      "Zerun Ma",
      "Houcheng Min",
      "Chengjun Pan",
      "Qiyuan Peng",
      "Xiaoxuan Peng",
      "Jianmin Qian",
      "Jiantao Qiu",
      "Wanying Ren",
      "Huayu Sha",
      "Jifei Shan",
      "Zixin Shang",
      "Bing Shao",
      "Zhuohui Sheng",
      "Jiayang Shi",
      "Yang Shu",
      "Aierpanjiang Simayi",
      "Sirui Song",
      "Yuxiao Song",
      "Zhe Sun",
      "Zhichao Sun",
      "Wenzhe Tan",
      "Wenhui Tian",
      "Zhongbo Tian",
      "Hanchen Wang",
      "Pengbo Wang",
      "Rui Wang",
      "Yiding Wang",
      "Yuhui Wang",
      "Zhiheng Xi",
      "Caijun Xu",
      "Chao Xu",
      "Yongfeng Xu",
      "Xiaolei Yang",
      "Zhixiong Yang",
      "Qian Yao",
      "Shihong Yi",
      "Yuankai Ying",
      "Jia Yu",
      "Dingbo Yuan",
      "Hao Yuan",
      "Junjie Yuan",
      "Bo Zhang",
      "Caixian Zhang",
      "Qiuyinzhe Zhang",
      "Jiyuan Zhao",
      "Penghao Zhao",
      "Ying Zhao",
      "Pujun Zheng",
      "Xiaoxue Zhong",
      "Xiaohao Zhou",
      "Xinyu Zhou",
      "Dongsheng Zhu",
      "Guanru Zhu",
      "Yulun Zhu",
      "Yaojie Lu",
      "Tao Ji",
      "Hongyu Lin",
      "Yutao Zhu",
      "Pengfei Cao",
      "Guoxiu He",
      "Xianpei Han",
      "Ben He",
      "Zhicheng Dou",
      "Kang Liu",
      "Qi Zhang",
      "Le Sun",
      "Jun Zhao",
      "Ji-Rong Wen",
      "Xuanjing Huang",
      "Yu-Gang Jiang",
      "Bowen Zhou"
    ],
    "abstract": "As AI agents become participants in the development of their successors, they reshape both the production of intelligence and the role of human researchers. We introduce Atria Dawn Preview, a foundation agentic language model designed for scientific research and engineering workflows, with the goal of expanding the frontier of agent productivity in the real world. This model is trained via a Verifiable Experience Pipeline that connects tool-mediated interactions to executable environments and externally verified outcomes. Across 16 benchmarks spanning real-world research, engineering, and digital work, Atria Dawn Preview is competitive with frontier agents and achieves the highest reported score on five of them. Beyond standalone performance, we examine the real research-and-development process behind this model as a case study of human--AI collaboration, analyzing 769 task records from 56 participants together with agent logs. When asked to evaluate completed tasks under comparable conditions, participants rated about one-third of completed AI-assisted tasks as infeasible without AI. More strikingly, agents frequently propose methods and implement revisions, while humans retain most final decisions and guide exploration through judgment and feedback. These observations indicate a shift from task-level execution to project-level partnership, with human effort concentrating on what is worth pursuing and how evidence should guide research. Progress toward more autonomous AI research must therefore advance both the capacity for discovery and the capacity for meaningful human oversight, preserving accountable human authority over the risks and direction of continued development.",
    "published": "2026-09-14T16:22:30Z",
    "updated": "2026-09-14T16:22:30Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.15818"
  },
  {
    "id": "2609.15779",
    "title": "EvoOntology: A Self-Evolving Ontology Layer for Data Agents",
    "authors": [
      "Meiduo Chong",
      "Shaolei Zhang",
      "Ju Fan",
      "Xiaoyong Du"
    ],
    "abstract": "Data agents aim to fulfill natural-language instructions over heterogeneous data, including tables, files, and databases. However, data agents face a challenging agent-data gap: heterogeneous data resides outside the agent, while the agent can access it (e.g., column names and file paths) only through generic tools. Existing approaches either let agents directly explore raw data sources or inject manually constructed semantic layers into prompts. However, neither scales well to large heterogeneous data sources nor adapts to different agent behaviors. In this paper, we introduce EvoOntology, a self-evolving ontology layer for data agents. EvoOntology encapsulates the ontology as an MCP server comprising a schema layer, a content layer, and a tool layer, enabling agents to actively query and interact with the ontology at runtime. To this end, we introduce a builder agent for autonomous ontology construction and a self-evolution loop that continuously refines the ontology through attribution-guided typed edits that are accepted only after a backbone-conditional paired evaluation. Experiments on three well-adopted data-agent benchmarks with four LLM backbones demonstrate that EvoOntology consistently outperforms strong baselines and existing semantic-layer approaches, effectively bridging the agent-data gap and enabling more effective interaction with heterogeneous data. Code: https://github.com/ruc-datalab/EvoOntology",
    "published": "2026-09-14T15:59:24Z",
    "updated": "2026-09-14T15:59:24Z",
    "categories": [
      "cs.AI",
      "cs.CL",
      "cs.DB"
    ],
    "url": "https://arxiv.org/abs/2609.15779"
  },
  {
    "id": "2609.15773",
    "title": "Transfer Learning for Socioeconomic Estimation in Forced-Displacement Settings",
    "authors": [
      "Steven Ndung'u",
      "Adel Daoud",
      "Ismael Yacoubou Djima",
      "Hai-Anh H. Dang",
      "Patrick Michael Brock"
    ],
    "abstract": "Progress in inclusive household surveys has strengthened socioeconomic evidence for forcibly displaced populations, providing indispensable benchmarks on living conditions and welfare. However, these surveys remain resource-intensive and periodic, while conditions can change between rounds, particularly in settings affected by fragility, conflict, and violence. More frequently updated, spatially granular complementary evidence is therefore needed to identify where socioeconomic conditions may be changing between survey rounds and to inform operational prioritization. Earth observation and machine learning offer a scalable source of spatially explicit socioeconomic information. However, tools developed for general populations have not been systematically adapted and evaluated in forced displacement settings, where living conditions, settlement patterns, and displacement impacts may differ substantially. We address this gap by adapting a multimodal spatiotemporal vision transformer, pretrained on Demographic and Health Survey data from approximately 1.2 million households across 36 African countries, to forced displacement and host community settings in South Sudan, Cameroon, and Zambia. We develop and evaluate the updated, adapted model using socioeconomic indices derived from UNHCR FDS and RMS data. Our results show that satellite-derived geospatial covariates explain up to 66% of the variation in socioeconomic outcomes in camp-intersecting grids, with a mean absolute error (MAE) of 4.37 index points, and 41% in non-camp-intersecting areas, with an MAE of 5.41. The framework complements and adds value to periodic household surveys by filling critical spatial and temporal data gaps with regularly updated, model-based socioeconomic estimates. These estimates sustain insight between survey rounds and support timely humanitarian prioritization and field verification.",
    "published": "2026-09-14T15:55:57Z",
    "updated": "2026-09-14T15:55:57Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.15773"
  },
  {
    "id": "2609.15772",
    "title": "Event-Native Symbolic-Temporal Spike Encoding Framework for Heterogeneous Cyber Streams",
    "authors": [
      "Dalton Diez",
      "Peyton Andras",
      "Max Shroyer",
      "James Ghawaly"
    ],
    "abstract": "Spiking neural networks (SNNs) have shown promise for sparse, event-driven computation through stateful processing that is naturally compatible with low-power edge hardware. These properties align with cyber monitoring, where data arrives asynchronously, and malicious behavior often emerges through temporal patterns across event sequences. However, cyber streams are not composed solely of continuous numeric signals: their informative structure is also carried by categorical identifiers, irregular timing, and local behavioral context. Traditional rate- and population-based spike encodings are not naturally suited to these heterogeneous semantics, while conventional intrusion detection system (IDS) pipelines typically resolve the mismatch by converting raw events into flows, fixed aggregation windows, or dense tensors. Although useful for conventional classifiers, these transformations introduce buffering latency, obscure native temporal structure, and weaken the computational advantages of event-driven neuromorphic processing. We introduce an event-native symbolic-temporal spike encoding framework that maps heterogeneous cyber events directly into sparse, spike-compatible inputs. By assigning encoding roles to semantic identity, local frequency context, and inter-event timing, the framework preserves categorical semantics and temporal dynamics. We validate the approach on packet-level Network IDS and extend it to message-level CAN IDS, using both domains to evaluate whether the encoding exposes usable structure for recurrent SNNs operating directly on native event streams. Under edge-oriented, $μ$Caspian-aligned hardware constraints, compact recurrent SNNs achieve strong anomaly detection performance, with an operational hybrid metric ($J_{hybrid}$) of 0.987 on Network IDS and 0.980 on CAN IDS.",
    "published": "2026-09-14T15:55:43Z",
    "updated": "2026-09-14T15:55:43Z",
    "categories": [
      "cs.NE",
      "cs.AI",
      "cs.CR"
    ],
    "url": "https://arxiv.org/abs/2609.15772"
  },
  {
    "id": "2609.15763",
    "title": "Sylvas: Synergistic Learning Value based Device Scheduling in Federated Continual Learning",
    "authors": [
      "Yuxuan Sun",
      "Yuxuan Bai",
      "Tan Chen",
      "Sheng Zhou",
      "Zhisheng Niu"
    ],
    "abstract": "Federated continual learning (FCL) enables shared global models to continuously adapt to distributed and non-stationary data streams, making it important for Internet of Things applications such as intelligent transportation, industrial monitoring, and unmanned systems. Under spatio-temporal data distribution dynamics and label scarcity, a key challenge is how to quantify the contribution of each edge device to global learning performance and schedule the most valuable devices under resource constraints for timely model updating. This article presents Sylvas, a synergistic learning value based device scheduling framework for FCL at the wireless edge. Sylvas evaluates the learning value of distributed data from two perspectives: distributional value, which characterizes the contribution of device data to global model learning from a spatio-temporal distribution perspective, and label value, which captures the quantity and reliability tradeoff of pseudo-labeled data. By integrating these factors into a synergistic learning value metric, Sylvas schedules devices with high learning value while satisfying communication and computation resource constraints. Case studies demonstrate that Sylvas supports timely model adaptation under spatio-temporal distribution dynamics and effectively exploits unlabeled data.",
    "published": "2026-09-14T15:48:21Z",
    "updated": "2026-09-14T15:48:21Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.15763"
  },
  {
    "id": "2609.15746",
    "title": "TopoRig: Topology-Agnostic Facial Rigging via Multi-Source Supervision",
    "authors": [
      "Andrew Fleet",
      "Soroush Mehraban",
      "Vida Adeli",
      "Cole Clifford",
      "Babak Taati"
    ],
    "abstract": "Automatic facial rigging across heterogeneous mesh topologies remains challenging because high-quality expression supervision is often tied to canonical templates, while deformation transfer to arbitrary meshes can introduce geometric artifacts and correspondence errors. We present TopoRig, a topology-agnostic facial rigging framework that predicts FACS-conditioned deformations directly on input mesh vertices while preserving the original topology. Starting from the ICT FaceKit expression model, we construct complementary supervision from accurate but template-biased common-topology rigs, topology-diverse but noisier transferred rigs, and targeted image-based cues for controls poorly captured by geometric transfer. TopoRig combines local surface geometry, landmark-relative semantic features, global shape context, and FACS controls to predict per-vertex displacements. We train on 3,496 generated identities using 45 non-gaze expression controls from the 53-control ICT FaceKit vocabulary. On held-out identities and unseen mesh topologies, TopoRig more faithfully reproduces the reference expression space than prior neural facial-rigging methods, while qualitative results show consistent localized deformations across diverse character geometries. Ablations demonstrate that semantic landmark features and complementary supervision improve cross-identity and cross-topology generalization. Overall, TopoRig amortizes heterogeneous and imperfect expression supervision into a single topology-preserving deformation model.",
    "published": "2026-09-14T15:37:03Z",
    "updated": "2026-09-14T15:37:03Z",
    "categories": [
      "cs.GR",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.15746"
  },
  {
    "id": "2609.15745",
    "title": "Look Before You Leap: Factual Decoding with Internal Attribution Signals",
    "authors": [
      "Hayeong Ryu",
      "JungMin Yun",
      "Byeonggeuk Lim",
      "Sunhee Jo",
      "YoungBin Kim"
    ],
    "abstract": "Hallucination remains a critical challenge in large language models (LLMs), where early factual errors compound through autoregressive generation in a snowballing effect that neither post-hoc correction nor weight-level intervention can effectively preempt. We propose DescaPE (DEcoding Signal Control Against Path Error-snowballing), a decoding framework that leverages internal model signals to suppress hallucination-prone trajectories at inference time. Through sliding-window MLP ablation, we identify a factual-salient layer span within LLMs whose derived signal is selectively elevated for factual tokens and exhibits anomalous spikes at hallucination-prone steps. We train a lightweight probe to approximate this signal from a single forward pass and integrate it into candidate scoring to penalize high-risk continuations while rewarding factually grounded ones. Experiments across five factuality benchmarks on three LLMs demonstrate that DescaPE achieves factuality improvements over decoding-time baselines in multiple settings, while incurring only 1.10x latency overhead in our efficiency evaluation. Our code is available at https://github.com/hayeonggg/DESCAPE.",
    "published": "2026-09-14T15:35:42Z",
    "updated": "2026-09-14T15:35:42Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.15745"
  },
  {
    "id": "2609.15744",
    "title": "Design of a Deep Learning Credit Risk Early Warning System Integrating Multi-source Heterogeneous Data",
    "authors": [
      "LiYang Wang",
      "Zhen Zhong",
      "Zhen Tian",
      "Keyu Chen",
      "Keyu Chen"
    ],
    "abstract": "Advancements in data fusion and real-time analytics technologies have opened new avenues for addressing complex domain challenges. Financial risk early warning systems often suffer from inefficiency due to information silos and monitoring delays. This paper proposes a credit risk early warning system based on heterogeneous information fusion. The system employs a model architecture integrating deep neural networks and attention mechanisms to extract multidimensional features from diverse data sources such as transaction behaviors and social networks, thereby establishing an early identification mechanism for corporate and individual credit risks. System testing demonstrates that this approach significantly enhances the accuracy and timeliness of risk warnings, outperforming traditional rule-based engine solutions. The findings offer innovative insights for early intervention in financial risks, holding practical significance for safeguarding financial stability.",
    "published": "2026-09-14T15:35:41Z",
    "updated": "2026-09-14T15:35:41Z",
    "categories": [
      "cs.AI",
      "cs.CE",
      "cs.DB",
      "cs.LG",
      "q-fin.RM"
    ],
    "url": "https://arxiv.org/abs/2609.15744"
  },
  {
    "id": "2609.15740",
    "title": "A Language-Guided Multimodal Foundation Model for Zero-Shot and Multi-Task Brain Signal Analysis",
    "authors": [
      "Mingzhi Chen",
      "Yiyu Gui",
      "Guibo Luo",
      "Yuchao Yang"
    ],
    "abstract": "Brain signal analysis is essential for both neuroscience research and clinical diagnostics, yet current approaches face critical limitations. End-to-end models require task-specific retraining and exhibit limited generalization, while pre-trained models lack semantic depth and still depend on extensive fine-tuning. Meanwhile, general-purpose multimodal foundation models, though powerful in other domains, struggle to interpret brain signals due to representational misalignment and lack of domain knowledge. This study introduces a multimodal foundation model for zero-shot and multi-task brain signal analysis (METIS) through a unified language-signal alignment framework. METIS is pretrained on the largest and most diverse brain-signal corpus to date, comprising over 70,000 h of recordings from more than 11,000 subjects across 20 datasets. In a comprehensive zero-shot evaluation across 12 datasets, METIS outperformed the leading generalist model by over 20.9% in average accuracy. Remarkably, without any fine-tuning, METIS's performance matches or exceeds that of supervised, task-specific models. Furthermore, METIS demonstrates exceptional data efficiency and strong generalization, achieving an average AUROC advantage of over 16.0% in few-shot settings and 15.9% in cross-dataset transfer. This work establishes a new paradigm for general-purpose brain signal analysis, paving the way for next-generation neurotechnology.",
    "published": "2026-09-14T15:32:38Z",
    "updated": "2026-09-14T15:32:38Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.15740"
  },
  {
    "id": "2609.15735",
    "title": "Transforming harmonic coefficients for 3D splat compression",
    "authors": [
      "Tam Thuc Do",
      "Philip A. Chou",
      "Gene Cheung"
    ],
    "abstract": "We address the problem of color attribute compression for 3D splats. We show that all images generated by 3D splats are linear in the coefficients for each color channel, each spherical harmonic, and each splat, and we identify a basis for the space of all such images. We identify an inner product for the coefficient space that induces the squared error loss on images. We show that orthonormalizing the coefficients with respect to this innner product before coding can yield over 2 dB gain.",
    "published": "2026-09-14T15:28:29Z",
    "updated": "2026-09-14T15:28:29Z",
    "categories": [
      "eess.SP",
      "cs.CV",
      "cs.GR"
    ],
    "url": "https://arxiv.org/abs/2609.15735"
  },
  {
    "id": "2609.15727",
    "title": "Are LLMs Good Financial User Simulators? A Preliminary Study",
    "authors": [
      "Jiajie He",
      "Jiangyuan Hong",
      "Dongling Ni",
      "Wenjin Liu",
      "Xintong Chen"
    ],
    "abstract": "Large language models (LLMs) are increasingly used as user simulators, but their ability to reproduce evolving individual financial decisions remains unclear. We present a preliminary study in a controlled paper-trading environment with 120 volunteers. Participants used non-redeemable virtual funds under real-time market conditions; no real brokerage accounts, real-money positions, or real transaction records were accessed. Given only information available before a prediction cutoff, a simulator predicts the participant's next-trading-day action, traded security, and transaction quantity. We evaluate temporally aligned rolling predictions and compare settings with and without point-in-time market information. Market context improves action and ticker prediction in the controlled ablation, while transaction sizing remains difficult. We also observe systematic behavioral compression: models overproduce hold actions, underpredict sell decisions, and simplify multi-security transactions. These results provide an initial empirical characterization and motivate larger-scale evaluation of individual, temporal, and portfolio-level behavioral fidelity.",
    "published": "2026-09-14T15:23:26Z",
    "updated": "2026-09-14T15:23:26Z",
    "categories": [
      "cs.AI",
      "cs.CY",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2609.15727"
  },
  {
    "id": "2609.15726",
    "title": "Bench2Dex: Benchmarking Visuo-Tactile Bimanual Dexterous Manipulation Across Dexterous Hands",
    "authors": [
      "Zhenjie Yang",
      "Yideng Zhang",
      "Dongjie Zhang",
      "Chenyu Jiang",
      "Xianshuai Liu",
      "Yufeng Li",
      "Zuhao Ge",
      "Xingyu Jiao",
      "Zheng Zhang",
      "Kaiyu He",
      "He Wang",
      "Yuwen Zhong",
      "Yi Deng",
      "Muyun Jiang",
      "Xianliang Huang",
      "Haisheng Su",
      "Donghang Zhang",
      "Jian Zhang",
      "Xue Yang",
      "Hongyang Li",
      "Zuxuan Wu",
      "Yu-Gang Jiang",
      "Xiaosong Jia",
      "Junchi Yan"
    ],
    "abstract": "Tactile sensing provides contact information that can be difficult to infer from vision alone, but tactile hardware for dexterous hands has not converged to a common design. Dexterous hands differ in finger structure, contact surfaces, and sensor layouts, while simulated tactile signals still differ from measurements produced by physical sensors. These factors make it difficult to study visuo-tactile manipulation across diverse dexterous hands within a consistent experimental setting. We present Bench2Dex, a simulation benchmark for visuo-tactile bimanual manipulation across 12 dexterous hands. We adapt existing robot models with a shared simulated tactile interface that converts local contact geometry into image-like tactile observations. The interface provides a consistent observation format across different hand morphologies without attempting to reproduce the output of a specific physical tactile sensor. Bench2Dex includes 26 bimanual manipulation tasks that involve tool use, articulated-object interaction, and multi-stage manipulation, together with about 1.3K human-teleoperated demonstrations. The benchmark provides synchronized visual, tactile, proprioceptive, action, and object-state observations, together with executable task metrics. For robustness, we group seven perturbation types into invariance axis, where the correct action does not change, and equivariance axis, where the correct action changes together with the perturbation. We evaluate ACT, Diffusion Policy, pi0.5, and GR00T N1.5 on Bench2Dex and report their performance and failure modes. Bench2Dex is meant as a platform for studying visuo-tactile learning across dexterous hands. It does not assume that simulated tactile observations can replace real tactile sensing; it offers a shared setting for algorithm development while tactile hardware and simulation models are still evolving.",
    "published": "2026-09-14T15:22:59Z",
    "updated": "2026-09-14T15:22:59Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.15726"
  },
  {
    "id": "2609.15722",
    "title": "Data storytelling meets interpretable machine learning: Decoding AI decisions for non-experts without revealing sensitive data and model details",
    "authors": [
      "Lemen Chao",
      "Zixuan Yang",
      "Anran Fang",
      "Mingran Sun",
      "Ming Lei"
    ],
    "abstract": "AI-driven automated decision-making requires both predictive performance and interpretability. Recent advances in interpretable machine learning (IML) provide tools for explaining model predictions, but the technical complexity of these explanations may hinder accessibility to non-experts. To address this challenge, this study integrates data storytelling with IML to enhance the explainability of AI-generated decisions for a broader audience. Following the design science research (DSR) paradigm, this study proposes a formal definition of data storytelling in IML, introduces the DIST Pyramid to align data storytelling with IML, and presents the I-P-O Model to describe their interactions. It further develops an architecture to explain AI decisions through distinct \"What-if\" and \"Why-not\" event-generation processes. The architecture also employs data desensitization to protect sensitive input data. To validate the approach, a case study is conducted with the Boston Housing dataset, using SHapley Additive exPlanations (SHAP) values and large language models (LLMs) to generate data stories with And-But-Therefore (ABT) structures. An empirical evaluation shows that 76.4% and 74.3% of respondents rated the \"What-if\" and \"Why-not\" data stories as more comprehensible, with significantly higher accessibility scores than traditional SHAP visualizations. The paper concludes with the presentation of a narrative interpretation framework that integrates IML and data storytelling, thereby expanding the research scope as well as the practical applicability of AI decision-making.",
    "published": "2026-09-14T15:20:56Z",
    "updated": "2026-09-14T15:20:56Z",
    "categories": [
      "cs.AI",
      "cs.CL",
      "cs.HC",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.15722"
  },
  {
    "id": "2609.14596",
    "title": "Direct Conditional Transition Sampling for Diffusion Inverse Problems",
    "authors": [
      "Qi Yu",
      "Hanlin Wu",
      "Xiaohui Sun"
    ],
    "abstract": "Training-free diffusion inverse solvers typically choose between local measurement guidance and costly clean-space posterior updates. Independent posterior refresh can improve global correction by sampling a clean conditional and re-noising it, but its practical realization requires probability-flow ODE integration and clean-space Markov chain Monte Carlo (MCMC). We propose Direct Conditional Transition Sampling (DCTS), a direct stochastic-flow approximation to the same ideal refresh target. Rather than explicitly drawing a clean sample, DCTS estimates the measurement-conditioned clean mean along a short inner path and transports Gaussian source noise directly to the next noisy state. A denoiser-compatible sufficient statistic and a covariance-scaled operator update enable this conditional-mean estimation. Experiments on four inverse problems demonstrate that DCTS achieves competitive reconstruction quality with up to $16.8\\times$ speedups over competing methods.",
    "published": "2026-09-13T15:24:33Z",
    "updated": "2026-09-13T15:24:33Z",
    "categories": [
      "cs.CV",
      "stat.ML"
    ],
    "url": "https://arxiv.org/abs/2609.14596"
  },
  {
    "id": "2609.14595",
    "title": "Diagnosing Temporal Misalignment in Multichannel Time-Series Classification with Minimum Description Length",
    "authors": [
      "Sebastian Buschjäger",
      "Michael Frichert",
      "Daniel Kuhe",
      "Jian-Jia Chen"
    ],
    "abstract": "Multichannel time-series classification commonly assumes synchronized sensor streams, although latency, clock drift, and preprocessing can introduce relative delays during data collection or after deployment. Existing synchronization solutions are often hardware-specific and difficult to apply retrospectively. Consequently, synchronization problems may remain undetected while classification performance is suboptimal. We introduce a classifier- and label-free diagnostic based on minimum description length (MDL). Our method applies candidate temporal shifts to sensor groups and measures how efficiently one group can be encoded through a representation of the remaining channels. An increased codelength indicates that the shift destroys shared temporal structure, whereas the minimum identifies the alignment most strongly supported by the data. Unlike learned synchronization methods, the diagnostic requires neither retraining nor a trusted aligned reference and can therefore test both training and deployment data for misalignments. Experiments on two controlled synthetic tasks and nine real-world datasets show that the metric exposes alignment structure and can recover accuracy under induced deployment drift. A whole-dataset audit further identifies stable nonzero MDL optima in established benchmarks including FordChallenge, Opportunity, PAMAP2, and UCIActivity, revealing potential systematic offsets that conventional model evaluation does not expose. Our method thus provides a general-purpose tool for detecting, understanding, and correcting temporal misalignment throughout the time-series learning pipeline. Our code is available under https://github.com/sbuschjaeger/mdl-temporal-misalignment.",
    "published": "2026-09-13T15:24:24Z",
    "updated": "2026-09-13T15:24:24Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.AR"
    ],
    "url": "https://arxiv.org/abs/2609.14595"
  },
  {
    "id": "2609.14593",
    "title": "SENTINEL: A Multi-Pathway Architecture for Detecting Living-Off-the-Land APT Attacks on Windows Command Lines",
    "authors": [
      "Ahad Bin Islam Shoeb",
      "Kamrul Hasan",
      "Jamal Uddin Tanvin",
      "Liang Hong",
      "Imtiaz Ahmed",
      "Md Arif Billah",
      "Al Amin"
    ],
    "abstract": "Living-Off-the-Land (LOTL) is the dominant evasion technique of Advanced Persistent Threat (APT) actors, exploiting legitimate Windows utilities to conduct malicious operations without deploying custom malware and enabling state-sponsored campaigns to maintain persistent access within military and critical defense infrastructure for extended periods. Existing detection methods fail against obfuscated commands and multi-stage attack sequences, as demonstrated by the Volt Typhoon APT campaign, which maintained undetected access to U.S. critical infrastructure for over 18 months using exclusively signed Windows utilities. We present SENTINEL, a multi-pathway architecture integrating BERT-based semantic encoding, character-level CNN for obfuscation invariance, inter-command attention for multi-stage pattern recognition, and autoencoder-based anomaly scoring. Evaluated on a balanced Volt Typhoon benchmark derived from Microsoft and CISA threat intelligence advisories, SENTINEL achieves 92.0% accuracy on documented state-sponsored attack commands and 91.2% on obfuscated variants, compared to 74.0% and 72.0% for standalone BERT. Per-class analysis reveals that models achieving over 98% overall validation accuracy on imbalanced data exhibit only 44-58% malicious recall on balanced adversarial sets. Character-level processing contributes 5.6 percentage points of obfuscation invariance, and the 8.0 percentage point gap over augmentation-only baselines confirms structural architectural value beyond data-driven robustness alone.",
    "published": "2026-09-13T15:20:34Z",
    "updated": "2026-09-13T15:20:34Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.14593"
  },
  {
    "id": "2609.14592",
    "title": "AI Deployment Accountability Engineering: A Vision for Accountable AI in Safety-Critical Socio-Technical Systems",
    "authors": [
      "Murat Kantarcioglu"
    ],
    "abstract": "Artificial intelligence systems are rapidly becoming critical components in healthcare, finance, public services, and other safety-critical domains. Yet the engineering practices used to evaluate these systems remain predominantly model-centric, emphasizing properties such as accuracy, robustness, fairness, and interpretability before deployment. These properties are necessary but insufficient once an AI system operates within an ever changing socio-technical environment characterized by distribution shifts, institutional constraints, human feedback loops, privacy requirements, and interactions among multiple AI agents. This vision paper introduces AI Deployment Accountability Engineering (ADAE), a proposed AI engineering subdiscipline concerned with establishing measurable, continuous, and actionable accountability for deployed AI systems. ADAE treats accountability as a deployment-layer property rather than solely as a property of an individual model. It seeks to determine whether an AI-enabled system continues to operate within acceptable risk limits, identify the contexts in which failures emerge, attribute failures across interacting technical and human components, translate technical failures into downstream consequences, and support timely intervention. We articulate a research agenda built around four interconnected pillars: structured discovery of context-dependent failure modes, privacy-preserving accountability measurement, system-level risk analysis for agentic AI, and translation of technical failures into operational, and institutional risks. The broader goal is to establish foundational principles, mathematical tools, and system architectures for accountable AI deployment across safety-critical applications.",
    "published": "2026-09-13T15:18:41Z",
    "updated": "2026-09-13T15:18:41Z",
    "categories": [
      "cs.AI",
      "cs.CR",
      "cs.CY"
    ],
    "url": "https://arxiv.org/abs/2609.14592"
  },
  {
    "id": "2609.14590",
    "title": "Reverse Spatio-Temporal Disease Progression Modelling",
    "authors": [
      "Ulugbek Shernazarov",
      "Moucheng Xu",
      "Inomjon Ramatov"
    ],
    "abstract": "Deep learning-based spatio-temporal disease progression models commonly overlook the incubation period of progressive diseases, limiting the use of those models in early interventions, which are vital for not easily reversible diseases such as Alzheimer's. This is because, the existing deep learning based longitudinal disease-progression models are almost always run forward: from an observed baseline they predict future decline. In many clinical settings, however, imaging begins only after pathology is suspected or already visible, the earlier, healthier patient-specific reference was never acquired. To address this, we propose to study reverse disease progression prediction: given later diseased anatomy, reconstruct the unobserved healthier anatomy that preceded it. We use a two-stage model in which a frozen 3D vector-quantised autoencoder defines a compact discrete latent space, while a Neural Ordinary Differential Equation (ODE) learns continuous-time dynamics in that space. A recurrent encoder reads late observations in reverse temporal order, initialises the latent state, and the ODE is integrated backwards across the trajectory. On a controlled Morpho-MNIST benchmark with a sinusoidal perturbation, our model successfully recovered the unseen previous states from later observations of the non-monotonic trajectory. On longitudinal brain MRIs from Alzheimer's Disease Neuroimaging Initiative, at the task to recover the previous unseen trajectory towards healthy states of the patients from observed later diseased states, our model outperforms the baselines that uses copy-nearest and mean-observed, with positive disease-reversal scores in every diagnostic stratum. We hope that our work can provide insights and tools towards discovering the incubation periods from single-shot scans, and developing early interventions of diseases based on imaging.",
    "published": "2026-09-13T15:17:59Z",
    "updated": "2026-09-13T15:17:59Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.14590"
  },
  {
    "id": "2609.16071",
    "title": "Schema-Adaptive Action-Conditioned JEPA for Cross-Machine CNC Transfer under Partial Sensor Overlap",
    "authors": [
      "Ayoub Louaye Bouaziz",
      "Matthieu Ostertag",
      "Anton Demasles"
    ],
    "abstract": "Cross-machine deployment of industrial world models requires transfer across changes in dynamics, sensing interfaces, sampling regimes, and control units. We study a schema-adaptive action-conditioned Joint-Embedding Predictive Architecture (SAAC-JEPA) for CNC dynamics, where the source machine has 17 canonical sensor channels and the target shares only 10. Evaluation uses group-disjoint source splits, source-only normalization, held-out self-supervised validation, unit audits, and a sealed target test after model locking. Across five seeds, JEPA pretraining gives no clean-source forecasting gain: scratch and pretrained-body models obtain \\(\\mathrm{RMSE}=0.811\\pm0.022\\) and \\(0.813\\pm0.022\\). A source-only search over 20 candidates selects a schema-consistent action-conditioned JEPA after seven-seed stability checks. On the confirmatory target pass, the locked model reaches zero-shot \\(\\mathrm{RMSE}=0.546\\), \\(R^2=0.012\\), and \\(\\mathrm{NLL}=0.52\\), outperforming persistence but not RevIN-equipped PatchTST and iTransformer baselines (\\(0.503\\) and \\(0.498\\)). A pre-declared paired ablation shows that RevIN in the same architecture improves RMSE to \\(0.495\\pm0.004\\) over three seeds, but degrades target calibration (\\(\\mathrm{NLL}=20.6\\)) on stationary context windows. A pre-lock adaptation sweep further reduces RMSE to \\(0.520\\) with limited target support. These results show that source-domain forecasting accuracy alone is insufficient to assess industrial predictive representations, and that cross-machine adaptation under partial sensor overlap is a distinct evaluation axis.",
    "published": "2026-09-13T15:10:06Z",
    "updated": "2026-09-13T15:10:06Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.16071"
  },
  {
    "id": "2609.16070",
    "title": "Efficient Multimodal Generative Recommendation with Latent Narrative Reasoning",
    "authors": [
      "Chenxing Wang",
      "Nantao Zheng",
      "Hao Miao",
      "Juyuan Wang",
      "Xinke Jiang",
      "Yuchen Fang",
      "Aolin Li",
      "Haijun Wu"
    ],
    "abstract": "Generative recommendation reformulates item prediction as semantic identifier generation, yet episodic content introduces a fundamentally different setting where the target is determined by narrative evolution rather than user preference. This task requires models to understand multimodal storyline progression while addressing the efficiency challenges caused by redundant visual contexts and costly explicit reasoning generation. We propose \\textbf{NarraLite}, an efficient multimodal generative recommendation framework that jointly compresses perception and reasoning. Specifically, Progressive Spectral Compression selectively distills long visual contexts into compact narrative-relevant evidence, preserving transition-critical information while reducing redundant visual computation. Latent Narrative Reasoning introduces context-routed latent reasoning tokens and aligns their contextualized representations with future continuation semantics, enabling implicit narrative inference without autoregressively decoding textual rationales. We further establish a user-agnostic multimodal benchmark for short-form drama continuation across UGC, PGC, and OOD settings. Extensive experiments demonstrate that NarraLite consistently improves continuation accuracy, narrative coherence, and robustness over existing approaches, while achieving a favorable accuracy--efficiency trade-off.",
    "published": "2026-09-13T15:04:05Z",
    "updated": "2026-09-13T15:04:05Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.16070"
  },
  {
    "id": "2609.14578",
    "title": "A Building as a Repository: KIR, a Typed Intermediate Representation for Agent-Authored Building Information Models",
    "authors": [
      "Dmitry Kuklev"
    ],
    "abstract": "Autonomous agents that author building information models need more than access to a host API. They need a representation of what they intended, what a compiler decided on their behalf, what was refused, what was observed after execution and what remains unknown. We present KIR, a typed intermediate representation in which a building is authored as a program held in a versioned repository and lowered to host applications as build targets. KIR is organised around seven ways in which a generator writing into a stateful, partially observable host goes silently wrong, and gives each a representation in data: ambiguous selectors become typed refusals with candidates; defaults keep their provenance; obligations that will not be checked are named before execution; vacuous witnesses are rejected statically; a lost transaction response becomes the state UNCONFIRMED with a verify-before-retry rule; the reverse path obeys a census invariant; and decisions are bound by digest to the state they were made against. On a pinned snapshot with 83 operation contracts and Revit as the only backend, offline experiments refuse 29 of 42 stress-test programs with diagnostic codes and no uncaught exception, name 38 of 377 witness obligations as unwitnessable, admit 31 of 100 combinations of execution, witness and acceptance states under seven stated invariants, and find no vacuous witness in 219 certificate runs; a 60-storey tower is 11,263 characters as KIR against 3,709,235 characters of emitted C#. Native Revit runs are reported from project records and kept separate from reproduced results. A controlled comparison with agents that write host code directly is specified but not yet executed; it is the principal open question.",
    "published": "2026-09-13T15:01:58Z",
    "updated": "2026-09-13T15:01:58Z",
    "categories": [
      "cs.CV",
      "cs.SE"
    ],
    "url": "https://arxiv.org/abs/2609.14578"
  },
  {
    "id": "2609.14572",
    "title": "AlgoRAG: Retrieval-Augmented Generation for Theoretical Computer Science Education -- A Comprehensive Evaluation Framework for Algorithm Analysis and Complexity Theory",
    "authors": [
      "Sushan Adhikari"
    ],
    "abstract": "Teaching abstract theoretical computer science (TCS) concepts such as algorithm analysis and complexity theory is challenging because students must handle formal proofs and asymptotic reasoning that conventional resources rarely explain in an adaptive, on-demand way. We present AlgoRAG, a specialized Retrieval-Augmented Generation (RAG) system that couples a large language model (LLM) with a curated, domain-specific knowledge base to address these challenges. The knowledge base integrates authoritative textbooks, 847 lecture slides, 312 practice problems with solutions, 156 worked proof templates, and 89 complexity worksheets. AlgoRAG incorporates domain-specific optimizations including mathematical entity recognition, notation-aware retrieval, and pedagogical re-ranking. We evaluate AlgoRAG on 179 curated exam-style questions spanning asymptotic analysis, recurrence relations, dynamic programming, graph algorithms, NP-completeness, sorting, and divide-and-conquer. The system achieves a 100% success rate with a mean response time of 38.0 seconds. While BLEU-4 scores are zero -- a known limitation of n-gram matching on mathematical proofs where equivalent reasoning may use entirely different notation -- AlgoRAG attains ROUGE-1 F1 of 0.0963, ROUGE-L F1 of 0.0683, and a pedagogical quality score of 0.7620, indicating that responses are well-structured and didactically sound even when surface wording diverges from reference answers. Performance is especially strong on NP-completeness (ROUGE-1 F1 = 0.1285, pedagogical quality = 0.7643) and graph algorithms (ROUGE-1 F1 = 0.1023, pedagogical quality = 0.8086). These results support the conclusion that RAG is an effective architecture for personalized theoretical-CS instruction, providing correct, context-rich explanations even for highly abstract topics.",
    "published": "2026-09-13T14:58:56Z",
    "updated": "2026-09-13T14:58:56Z",
    "categories": [
      "cs.CY",
      "cs.AI",
      "cs.IR",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.14572"
  },
  {
    "id": "2609.14570",
    "title": "Disentangling Topology and Diversity in Multi-Agent LLMs for Multilingual Low-Resource Emotion Detection",
    "authors": [
      "Ulugbek Shernazarov",
      "Charitha Ruwansiri Weerakon Basnayake",
      "Abdelkhaleq El Jarjini",
      "Noel Crespi",
      "Praboda Rajapaksha"
    ],
    "abstract": "Multi-agent LLM systems combine multiple inference calls, but prior work often confounds how calls are connected with how they are diversified. We study these factors independently: inference topology and source of inter-agent diversity. In a controlled $2 \\times 3$ matrix, we cross parallel aggregation and sequential refinement with stochastic sampling, role prompting, and learned QLoRA specialization, under a fixed three-call budget and output protocol within each backbone. Using Qwen2.5-14B-Instruct and Llama-3.1-8B-Instruct, we evaluate all six configurations on multilingual low-resource emotion detection across nine languages. Parallel learned specialization is strongest on Qwen at 52.83 Macro-F1 and reaches 52.94 on Llama. On Qwen it also exceeds same-backbone zero-shot, few-shot, CoT, and seven-call self-consistency baselines. The preferred topology depends on diversity source: sequential refinement helps stochastic and prompted settings, while the learned Width advantage shrinks from 2.83 points on Qwen to 0.17 on Llama. Depth-wise analysis suggests that later learned specialists can overwrite correct early predictions, although the aggregate effect is backbone-dependent. Overall, how agents are differentiated produces larger performance shifts than topology, which should be evaluated jointly with specialization.",
    "published": "2026-09-13T14:58:26Z",
    "updated": "2026-09-13T14:58:26Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.14570"
  },
  {
    "id": "2609.14560",
    "title": "Small Object Detection in Drone Aerial Imagery with LAF-YOLOv10",
    "authors": [
      "Quratulain Nayeem",
      "Fahmina Taranum",
      "Mohammed Mudassir Uddin"
    ],
    "abstract": "General-purpose object detectors lose accuracy on UAV footage, where targets span only a handful of pixels and onboard compute is limited. Prior work composes independently-validated architectural techniques into one detector, assuming gains reported in isolation transfer once combined. We stress-test that assumption directly. LAF-YOLOv10 integrates four techniques into YOLOv10n: a Partial Convolution C2f (PC-C2f) backbone block, an Attention-Guided Feature Pyramid Network (AG-FPN), a P2 detection head replacing the large-object P5 head, and Wise-IoU v3 regression, asking whether their combined effect matches what each contributes alone. We train LAF-YOLOv10 three times (seeds 42, 123, 256) on VisDrone-DET2019, benchmark against unmodified YOLOv10n, and use TIDE error decomposition, per-category breakdown, per-component ablation, attention/loss comparisons, zero-shot transfer to UAVDT, and held-out/test-dev evaluation to localize where the combination succeeds or fails. Composability does not hold here. LAF-YOLOv10 reaches 24.0+/-0.4% mAP@0.5 at 2.14M parameters, 7.8 points below YOLOv10n (31.8%), a deficit that transfers to UAVDT (-10.0 points) and is confirmed by held-out and test-dev evaluation (23.5%, 22.5%). Background false positives, localization error, and duplicate detections move in the direction AG-FPN and Wise-IoU were designed to push. Ablation traces the deficit to a specific source: the P2/-P5 head swap costs 2.5 points independently plus a 2.5-point interaction penalty when layered onto a backbone weakened by PC-C2f, whose own 2.0-point loss is consistent with a partial pretrained-weight transplant (73/150 backbone tensors transfer). The failure is attributable to a specific interaction, not the four components individually. Composability must be verified directly, not assumed. Code/checkpoints: https://github.com/Mudassiruddin7/Small-Object-Detection-in-UAV-Imagery.",
    "published": "2026-09-13T14:46:43Z",
    "updated": "2026-09-13T14:46:43Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.14560"
  },
  {
    "id": "2609.16069",
    "title": "Beyond Distribution Matching: Semantics-Consistent Tabular Diffusion with Weak Semantic Priors",
    "authors": [
      "Yili Wang",
      "Ruxue Shi",
      "Mengnan Du",
      "Hangting Ye",
      "Yi Chang",
      "Xin Wang"
    ],
    "abstract": "Synthetic tabular data can match real data distributions while still violating the semantic constraints that govern valid tabular rows. This reveals a key limitation of existing tabular generators: they mainly optimize distributional fidelity, but do not explicitly model weak semantic priors encoded in tabular schema and textual descriptions. In this paper, we propose \\ours, a semantics-consistent tabular diffusion framework for high-fidelity synthetic data generation under weakly specified semantic priors. \\ours\\ first constructs two types of priors, namely intra-column semantics and inter-column symbolic rules, with LLM-assisted extraction from metadata and validation on the real training split. These priors are then used as generation conditions rather than post-hoc filters. Specifically, \\ours\\ maps heterogeneous column values, column identities, and semantic priors into a unified semantic space, and performs column-wise forward corruption and prior-conditioned reverse denoising to preserve both marginal distributions and rule-consistent cross-column dependencies. Extensive experiments on six real-world tabular benchmarks show that \\ours\\ consistently improves distributional fidelity, semantic consistency, and downstream task utility over representative VAE-, GAN-, LLM-, and diffusion-based baselines. Additional analyses further demonstrate the robustness of \\ours\\ when semantic priors are partially unavailable.",
    "published": "2026-09-13T14:42:10Z",
    "updated": "2026-09-13T14:42:10Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.16069"
  },
  {
    "id": "2609.12890",
    "title": "Large Distant Gradients Need Not Be Reliable: reliability-weighted credit assignment for long-horizon autoregressive forecasting",
    "authors": [
      "Junhao Zhao",
      "David Michael Simberg",
      "Jacob Kang",
      "Colin Connor Kurniawan",
      "Nan Xu"
    ],
    "abstract": "In autoregressive forecasting, long prediction rollouts provide distant supervision, but backpropagation through time (BPTT) carries gradients from those losses through many autoregressive steps. Repeated Jacobian products can make distant gradients dominate the update while amplifying predictable signal and unpredictable noise together; a large distant gradient therefore need not carry reliable learning signal. Motivated by this observation, we introduce Internal Dual-Wiener routing (Internal-DW), a principled backward-only intervention that preserves the full forward rollout and all horizon losses while reliability-weighting internal gradient routes. At each residual block, we derive bounded Wiener gains for the identity and nonlinear routes that balance preserving predictable learning signal against suppressing unpredictable variation, and estimate them from route-level gradient statistics and an explicit noise model. In a controlled system with known gradient signal-to-noise ratio (SNR), we show that distant gradients can grow even as their SNR falls, and that Internal-DW reduces held-out error in recovering predictable gradient signals and improves forecasting. On four history-dominated, weak-drive testbeds, Internal-DW reduces forecast error by 5.2%-13.8% relative to full BPTT, outperforms gradient clipping and Jacobian regularization on all four, and outperforms validation-selected truncated BPTT (TBPTT) on three. It also extends or preserves the fitted optimal training-horizon range across these four testbeds. Across the full benchmark suite, the current Internal-DW estimator has a clear applicability boundary: its benefit diminishes or reverses when usable history is limited or when the selected sampler fails to represent dominant drive-dependent variation. The results show that retaining long-horizon supervision does not require trusting every backward contribution equally.",
    "published": "2026-09-11T14:18:59Z",
    "updated": "2026-09-11T14:18:59Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.12890"
  },
  {
    "id": "2609.12885",
    "title": "Learning Sign Language Recognition under Label Noise: A Study of Noise-Robust Losses for Isolated and Continuous Settings",
    "authors": [
      "Akihisa Shitara",
      "Yoichi Ochiai"
    ],
    "abstract": "In sign language recognition, the isolated (ISLR) classification loss treats a single label as ground truth, as does the frame-level auxiliary classifier over pseudo-labels we add to continuous (CSLR) methods, which lack one. Stylistic variation blurs ISLR annotation and the lack of temporal boundaries in CSLR forces pseudo-labels; both are noisy. We therefore apply symmetric and generalized cross entropy (SCE, GCE), robust alternatives to cross entropy (CE) from image classification, not to connectionist temporal classification but to the preceding single-label classifier. On ASL Citizen with injected symmetric noise on three backbones (three seeds for ST-GCN), robust losses cost at most 2.5 pt when labels are clean and beat CE by 2.9-10.0 pt in all six conditions at noise rate 0.2, one of which only after q was re-selected on dev. GCE gains more, but its optimal q does not transfer across backbones, whereas one SCE setting works in all nine conditions; both vary 2-11 times more than CE across runs, so a favorable point estimate does not establish stability. For CSLR (PHOENIX-2014) we report no gain; our frame-level targets carry a systematic assignment bias, making that study a diagnosis of a single configuration. At lambda_aux = 25 the pseudo-label CE auxiliary raises word error rate above the no-auxiliary baseline on VAC, CorrNet and SlowFastSign, and GCE/SCE improve on CE by 1.7-3.2 pt (three of six conditions return below that baseline). However, the three losses differ by more than an order of magnitude in effective gradient at a common lambda_aux: matching the initial gradient shrinks the gap to 0.4-0.9 pt, and lowering the CE weight alone already beats that baseline, so neither the degradation nor the improvement can be separated from the effect of the weight. We use only symmetric noise; multi-seed evaluation covers only ST-GCN and VAC isolated.",
    "published": "2026-09-11T14:11:20Z",
    "updated": "2026-09-11T14:11:20Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.12885"
  },
  {
    "id": "2609.12874",
    "title": "VideoTok4D: A 4D-Aware Video Tokenizer for Compact World Representation",
    "authors": [
      "Xinyi Chen",
      "Hanxin Zhu",
      "Xijun Wang",
      "Xingrui Wang",
      "Sen Liang",
      "Xin Li",
      "Zhibo Chen"
    ],
    "abstract": "Video tokenizers have emerged as a cornerstone of modern video modeling, underpinning progress in compression, reconstruction and generation by mapping high-dimensional visual signals into compact latent spaces. However, despite this progress, current tokenization paradigms largely remain within the 2D visual domain, treating videos as image sequences rather than observations of an underlying dynamic 3D world. Consequently, the learned tokens inherit this observation-centric bias, limiting their capacity to compactly represent real-world 4D scenes. To mitigate this issue, we propose VideoTok4D, a novel 4D-aware video tokenizer for compact world representation. Specifically, our approach comprises three key designs: 1) a spatiotemporal disentanglement strategy that factorizes videos into static and dynamic tokens for holistic world modeling; 2) a track-aware dynamic attention mechanism that aggregates trajectory-aligned cues to promote cross-view motion consistency; and 3) Co4DGen, a diffusion prior learned over the resulting VideoTok4D token space for efficient 4D scene generation. Extensive experiments have demonstrated that our proposed method achieves state-of-the-art performance while requiring up to 4 orders of magnitude less storage than dense 4D representations. Moreover, the compact token space substantially shortens diffusion sequences, enabling efficient generation.",
    "published": "2026-09-11T14:03:02Z",
    "updated": "2026-09-11T14:03:02Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.12874"
  },
  {
    "id": "2609.12871",
    "title": "A Multi-Vehicle Dataset with Camera, LiDAR, and Radar Sensors and Scanned 3D Models for Custom Auto-Annotation using RTK-GNSS",
    "authors": [
      "Philipp Berthold",
      "Bianca Forkel",
      "Mirko Maehlisch"
    ],
    "abstract": "Datasets are a crucial element in the development of perception algorithms. They relate sensor measurement data to annotated reference information and allow for the deduction of sensor and object characteristics. In autonomous driving, the reference data commonly consist of semantic image segmentation, point-wise associations, or bounding box annotations. The dataset proposed in this work, however, aims to dig deeper into the evaluation of measurement principles and provides scanned 3D models of all vehicles together with a pose and continuous kinematics reference obtained by RTK-GNSS. Combined, the state of the complete dynamic surrounding of the sensor vehicle is known for any point in time. Subsequent reference formats can be easily computed in user-defined granularity. This dataset involves single-object and multi-object recordings with seven target vehicles. In particular, measurement effects such as occlusion, as well as reflections, can be evaluated, as the normals of the shape of the target vehicles are known. We describe the dataset, discuss the technical background of its development, and briefly present exemplary evaluations.",
    "published": "2026-09-11T13:55:30Z",
    "updated": "2026-09-11T13:55:30Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.12871"
  },
  {
    "id": "2609.12860",
    "title": "3D CT-to-PET Translation via Latent Brownian Bridge Diffusion",
    "authors": [
      "Sarita Mourya",
      "Francesco Di Feola",
      "Pierangelo Veltri",
      "Paolo Soda"
    ],
    "abstract": "Computed tomography (CT) and positron emission tomography (PET) provide complementary anatomical and functional information for cancer diagnosis and treatment planning. However, the widespread use of PET is limited by high radiation exposure, elevated costs, and restricted availability. To address these limitations, deep learning-based CT-to-PET translation has emerged as a promising approach for synthesizing PET-like information directly from CT images, although accurately modeling the large cross-modal gap remains challenging. In this work, we propose a 3D CT-to-PET translation framework based on latent Brownian Bridge Diffusion (BBDM). The method consists of two stages. First, a Variational Autoencoder (VAE) is trained on paired CT-PET patches, integrating contrastive learning to improve latent alignment between anatomical and metabolic representations. Second, a BBDM is trained in the latent space to translate CT latent representations into their corresponding PET counterparts. The translated PET latents are then decoded and stitched to reconstruct the final 3D PET volume. We evaluate the proposed approach on two publicly available datasets. Quantitative results based on image fidelity and lesion-level PET-specific metrics demonstrate improved performance compared with competing methods. In particular, the proposed approach improves PET signal fidelity, better preserves clinically relevant uptake patterns, and shows improved performance in preserving small-lesion metabolic activation, paving the way for virtual imaging applications.",
    "published": "2026-09-11T13:47:50Z",
    "updated": "2026-09-11T13:47:50Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.12860"
  },
  {
    "id": "2609.12851",
    "title": "MedRoundsQA: A Persona and Difficulty Aware Evaluation for Multi-Turn Medical Consultations",
    "authors": [
      "Youssef Mohamed",
      "Ahmed Heakl",
      "Qinrong Cui",
      "Junhong Liang",
      "Rafiq Ali",
      "Bdour Babillie",
      "Nazira Dunbayeva",
      "Lang Gao",
      "Omar Hussein",
      "Ahmed Nada",
      "Ahmed Mohamed Magdy Mohamed",
      "Jinghui Liu",
      "Salman Khan",
      "Imran Razzak",
      "Yuxia Wang",
      "Xiuying Chen"
    ],
    "abstract": "Medical benchmarks are dominated by single-turn, multiple-choice clinical cases that poorly reflect real consultations. Practically, clinicians elicit evidence interactively and patient communication varies widely. We introduce MedRoundsQA, a multi-turn diagnostic benchmark derived from 1,387 board-exam cases across 17 specialties. Each case is converted into a structured 24-slot clinical record, and then instantiated as controlled doctor-patient dual-agent dialogues under varying patient personas, with the underlying clinical content held fixed. We further classify cases by difficulty using model-based uncertainty to enable easy-to-hard analysis. Evaluations of fifteen LLM doctor agents show that (i) moving from a single-turn diagnosis on the standardized records to multi-turn consultations causes large degradations of roughly 13-39 points; (ii) more turns reliably improves question relevance, but diagnostic accuracy exhibits diminishing returns and typically plateaus after 6-12 turns; and (iii) patient persona differences can shift diagnosis accuracy by about 7-8 points (lowest to highest education), highlighting equity risks that single-turn benchmarks miss.",
    "published": "2026-09-11T13:41:53Z",
    "updated": "2026-09-11T13:41:53Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.12851"
  },
  {
    "id": "2609.12850",
    "title": "MGAvatar: Mesh-Bound Gaussians for Head Avatar Geometry and Appearance Modeling",
    "authors": [
      "Lei Shi",
      "Sen Peng",
      "Zhiyang Deng",
      "Zhonggui Chen",
      "Xiaohu Guo",
      "Baorong Yang",
      "Xiao Dong"
    ],
    "abstract": "Accurate head modeling requires a stable yet expressive geometric representation. Existing Gaussian-based head avatars commonly rely on parametric templates (e.g., FLAME) for Gaussian initialization and deformation, but these templates lack personalized priors and struggle to represent structures such as hair and clothing. To address this issue, we propose MGAvatar, a Gaussian-mesh hybrid representation that jointly models geometry and appearance through two Gaussian-mesh binding modes. Specifically, we introduce vertex-bound Gaussians and constrain their learnable parameters, enabling progressive mesh deformation to represent complex head geometry, while a pose-dependent offset module accounts for non-rigid deformations. Once geometry is stabilized, MGAvatar switches to face-bound Gaussians for appearance modeling. To improve appearance consistency across novel poses and viewpoints, we introduce a view-conditioned neural color field that alleviates artifacts caused by independently optimized Gaussian colors. In addition, we design a Gaussian offset network to predict Gaussian offset maps in the observation space, providing greater flexibility for face-bound Gaussians to capture dynamic facial textures. Extensive experiments on multi-view and monocular videos show that MGAvatar outperforms existing methods in rendering quality, producing high-fidelity head avatars with rich texture details.",
    "published": "2026-09-11T13:41:06Z",
    "updated": "2026-09-14T11:23:47Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.12850"
  },
  {
    "id": "2609.12843",
    "title": "Pre-Trained Low-Rank Tensor Decomposition for Multi-Dimensional Image Recovery",
    "authors": [
      "Bing-Zhang Fu",
      "Zhi-Long Han",
      "Ting-Zhu Huang",
      "Xi-Le Zhao",
      "Deyu Meng"
    ],
    "abstract": "Recently, tensor decompositions are prevalent for multi-dimensional image representation, which learn the instance-specific structure of each image from scratch. However, tensor decompositions neglect the common structure across different images, leading to limited semantic modeling capability, high computational cost, and a large number of learnable parameters. To address this challenge, we suggest the first pre-trained low-rank tensor decomposition (PLTD) framework, which organically integrates the pre-trained large vision model into the classical tensor decomposition framework. Beyond the shallow and untrained deep tensor decomposition, the suggested PLTD achieves an unprecedented balance among higher recovery fidelity, fewer learnable parameters, and smaller carbon footprint. Specifically, PLTD factorizes the target tensor into a latent tensor and a learnable transform that maps the latent tensor back to the original data domain. The latent tensor consists of two indispensable and complementary terms, i.e., a fixed pre-trained latent tensor and a learnable low-rank latent tensor. The fixed pre-trained latent tensor is distilled from a pre-trained large vision model (i.e., DINOv3) to capture the common structure of the target tensor, while the learnable low-rank latent tensor characterizes the instance-specific structure of the target tensor. To examine the potential of PLTD, we develop the corresponding multi-dimensional image recovery model and theoretically justify the advantages of this framework. Additionally, we discuss the connections between PLTD and classical tensor decomposition frameworks. Extensive experiments on multi-dimensional image recovery demonstrate that PLTD consistently achieves superior performance compared with state-of-the-art methods.",
    "published": "2026-09-11T13:36:36Z",
    "updated": "2026-09-11T13:36:36Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.12843"
  },
  {
    "id": "2609.12841",
    "title": "A Graph-Based Approach for Mapping Kernel-Level Telemetry to MITRE ATT&CK",
    "authors": [
      "Matteo Lupinacci",
      "Luigi Arena",
      "Francesco Blefari",
      "Angelo Furfaro"
    ],
    "abstract": "Mapping observed system behavior to standardized frameworks like MITRE ATT&CK is essential for threat-informed defense, but remains largely manual. Existing automated methods depend on Cyber Threat Intelligence reports, which offer only retrospective accounts of attacks. Low-level telemetry, i.e. kernel-level system calls, instead provides evidence of adversary behavior, yet its volume and complexity have limited its use for automated mapping. We present a methodology that collects kernel-level events via eBPF, correlates attacker commands into a provenance graph, and derives compact graph representations suitable for LLM-based reasoning. These representations are mapped to the MITRE ATT&CK framework using both pure LLM prompting and retrieval-augmented generation (RAG) grounded in the ATT&CK knowledge base, producing ranked technique candidates along with supporting rationales. We implement this methodology as an end-to-end pipeline, named Trace2ATT&CK and evaluate it on 347 Linux Atomic Red Team tests using locally deployed open-weights LLMs. RAG consistently improves ATT&CK mapping performance over pure prompting, while provenance graph substantially outperforms raw telemetry. These results show that local inference over graph-based behavioral descriptions can make automated ATT&CK mapping from kernel-level telemetry operationally viable, without compromising data confidentiality.",
    "published": "2026-09-11T13:35:27Z",
    "updated": "2026-09-11T13:35:27Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.12841"
  },
  {
    "id": "2609.12839",
    "title": "Evaluating Context Segmentation in Locally Deployable SLMs for Cybersecurity CTF Tasks",
    "authors": [
      "Sebastiano Nordio",
      "Michele Lotto"
    ],
    "abstract": "The proliferation of highly capable open-weight Small Language Models (SLMs) democratizes access to advanced cybersecurity capabilities, posing a escalating risk as these models can bypass proprietary API guardrails when deployed locally. However, SLMs deployed as autonomous agents often struggle with long-horizon, exploratory tasks like cybersecurity Capture The Flag (CTF) challenges due to context bloat and cognitive degradation from accumulated tool-call outputs. To understand and mitigate this cybersecurity threat, we introduce context segmentation, a two-level agentic framework that divides complex exploitation tasks into manageable, contextually isolated sub-problems. Evaluating on the picoCTF dataset using memory-constrained gemma-4 models, we demonstrate that for the E4B model, our strategy acts as an intelligent search, achieving competitive rewards with superior token efficiency compared to brute-force retries, and successfully solving 18.52% of tasks that standard agentic execution fails to complete. Code is available at https://github.com/9xeb/context-segmentation.",
    "published": "2026-09-11T13:34:48Z",
    "updated": "2026-09-14T16:33:10Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.12839"
  },
  {
    "id": "2609.12835",
    "title": "HemaHier: Chain-Conditioned Ordinal Hierarchies for Lineage-Aware Bone-Marrow Cytology",
    "authors": [
      "Afshin Bozorgpour",
      "Peter Schüffler",
      "Edgar Jost",
      "Dorit Merhof"
    ],
    "abstract": "Bone-marrow cytology is inherently structured: each cell belongs to a hematopoietic lineage, and many cell types lie on ordered maturation trajectories. Standard flat classifiers ignore this structure, treating a mild same-lineage confusion the same as a severe cross-lineage mistake and predicting only discrete labels. We propose HemaHier, an ordinal-hierarchical prediction head for a frozen or lightly adapted cytology foundation model. Its central component is a chain-conditioned maturity score that reads a single maturity value under a per-chain query, supervised only on biologically valid healthy chains, while dysplastic and off-chain cell types remain classes but are excluded from maturity supervision. Fine and lineage predictions are coupled through a shared posterior that guarantees hierarchical consistency, and a staged objective first stabilizes recognition, then adds lineage and maturity supervision. On three bone-marrow datasets under a shared ontology, HemaHier achieves competitive recognition while reducing biologically severe errors and adding a within-lineage maturity ordering that flat classifiers lack. Code is available at https://github.com/xmindflow/HemaHier.",
    "published": "2026-09-11T13:30:20Z",
    "updated": "2026-09-11T13:30:20Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.12835"
  },
  {
    "id": "2609.12834",
    "title": "Self-supervised Pre-training Helps Retinal Disease Progression Modelling Most When Data Is Scarce",
    "authors": [
      "Ifeoma Veronica Nwabufo",
      "Julius Gervelmeyer",
      "Sarah Müller",
      "Philipp Berens"
    ],
    "abstract": "Modelling how a disease progresses over time requires longitudinal imaging cohorts, which are scarce and small, whereas cross-sectional data -- one image per participant -- is abundant. Self-supervised pre-training on such data offers a way to bridge this gap, but it is unclear which strategy best supports progression modelling, or how that answer depends on the amount of labelled longitudinal data. We study this for age-related macular degeneration (AMD), pre-training encoders on the large cross-sectional NAKO cohort and predicting time to late AMD on the longitudinal AREDS dataset. We compare in-house self-supervised encoders against a general-purpose (DINOv2) and a domain-specific (RETFound) foundation model, across contrastive, masked-autoencoding, and self-distillation objectives, under frozen and fine-tuned protocols, and across labelled training sets from 100 to 32,250 examples. Which model performs best depends on how the encoder is used. When the encoder is frozen and labels are few -- the regime typical of longitudinal cohorts -- pre-trained representations reach clinically reasonable discrimination from a few hundred labelled samples, while models trained from scratch do not; this advantage fades under fine-tuning. Transfer is governed by the self-supervision objective rather than corpus scale or domain match, so that an encoder pre-trained on a modest cross-sectional cohort matches or exceeds a far larger in-domain foundation model. Together, these results offer a practical recipe for building progression models where longitudinal data is scarce: a frozen self-supervised encoder with a lightweight survival head.",
    "published": "2026-09-11T13:28:36Z",
    "updated": "2026-09-11T13:28:36Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.12834"
  },
  {
    "id": "2609.11739",
    "title": "LOCUS: Task-Aware Low-Rank Post-Training for Token-Efficient Language Generation",
    "authors": [
      "Dongfang Zhao"
    ],
    "abstract": "Large language model serving costs scale directly with output sequence length, yet standard preference alignment often inflates response verbosity without improving utility. We study whether the parameterization of post-training updates affects generation length: low-rank subspaces alter sequence length without modifying the alignment loss. We present LOCUS, a method that selects a task-aware low-rank adaptation subspace to minimize output-token cost subject to a utility constraint. Within this subspace, post-training retains the native preference objective with a frozen backbone. Across Anthropic HH-RLHF dialogue preferences, we evaluate two $\\sim$3B decoder backbones, Pythia-2.8B and Qwen2.5-3B, against protocol-matched full-parameter DPO and DrDPO branches and the released SamPO checkpoint. LOCUS reduces continuation length by up to 39.84\\% on Pythia-2.8B and by 14.87--17.58\\% on Qwen2.5-3B while updating only 0.24--0.28\\% of model parameters, with no material change in the internal preference diagnostic.",
    "published": "2026-09-10T15:53:25Z",
    "updated": "2026-09-10T15:53:25Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.11739"
  },
  {
    "id": "2609.11737",
    "title": "ORCH: Organizational Principles Enable Collective Intelligence in Embodied AI",
    "authors": [
      "Zhengran Ji",
      "Jonathan Hyun",
      "Boyuan Chen"
    ],
    "abstract": "Collective intelligence depends not only on the capabilities of individual members, but also on how those members are organized. Yet artificial multi-agent systems are typically assembled using fixed organizational structures, even when the physical tasks they perform impose fundamentally different coordination requirements. Here we show that principles from human organization theory can be operationalized to organize large, heterogeneous collectives of embodied artificial agents. We introduce ORCH (Organizing Roles and Coordination Hierarchies), which constructs task-specific hierarchical organizations by combining pooled interdependence for work that can proceed concurrently with sequential interdependence for work governed by prerequisite relationships. Across 25 wildfire-response missions spanning reconnaissance, rescue, transportation, resource management, containment and suppression, we evaluated teams of up to 50 heterogeneous agents using eight large language models. Organizations constructed using these principles consistently outperformed four representative embodied multi-agent approaches across mission outcome, execution efficiency, exploration and computational resource use. Human-designed ORCH organizations improved final score by 63.97% and execution efficiency by 74.29% on average relative to the four prior frameworks. Organizations generated automatically by language models improved these measures by 43.63% and 52.53%, respectively. These advantages persisted across missions and underlying language models. Notably, collective performance was not monotonically determined by model scale. Analysis of long-horizon missions showed that hierarchical organization enabled teams to preserve concurrent activity within specialized groups while coordinating ordered transitions between mission phases.",
    "published": "2026-09-10T15:52:35Z",
    "updated": "2026-09-10T15:52:35Z",
    "categories": [
      "cs.MA",
      "cs.AI",
      "cs.LG",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2609.11737"
  },
  {
    "id": "2609.11725",
    "title": "Continuous-Time Acoustic Modelling with Neural Controlled Differential Equations",
    "authors": [
      "Mattias Cross",
      "Minghui Zhao",
      "Anton Ragni"
    ],
    "abstract": "Text-to-speech (TTS) models commonly address text--speech alignment by expanding phone-level encoder states to frame-level decoder inputs using predicted durations. While this length-regulation step resolves alignment structurally, this use of duration typically changes only where and how often latent states appear, not the values of the states themselves. This paper proposes a continuous-time mechanism for duration-aware acoustic modelling in TTS using neural controlled differential equations (CDEs). We formulate the phone representation as a temporally parameterised control path and use a neural acoustic vector field to produce a continuous-time hidden state whose values evolve with phonetic content and duration-derived timing. The resulting trajectory can be sampled at discrete points and integrated into a standard acoustic decoder pipeline. Objective results contrast CDEs and typical recurrent models. Subjective results suggest that CDE-based models evaluating one phone per step can improve rank-order agreement between synthesised and reference emotion intensity while maintaining comparable emotion-expression quality to a strong baseline. Additional experiments with half-phone step-sizes suggest that temporal resolution changes the trade-off between style tracking and absolute calibration. These results position CDEs as a promising design space for continuous-time and duration-aware style-sensitive TTS.",
    "published": "2026-09-10T15:41:32Z",
    "updated": "2026-09-10T15:41:32Z",
    "categories": [
      "cs.SD",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.11725"
  },
  {
    "id": "2609.11477",
    "title": "Pre- and Post-Treatment Brain Metastases Segmentation Using nnU-Net with Post-Processing for BraTS 2026",
    "authors": [
      "Haobin Liu",
      "Xin Wang"
    ],
    "abstract": "Brain metastases exhibit high inter-lesion variability in size, enhancement pattern, and post-treatment appearance, making volumetric segmentation of both pre- and post-treatment cases the central challenge of the BraTS 2026 Task 1 (Brain Metastases). We build a pragmatic pipeline on a 5-fold nnU-Net ResEnc-L ensemble, in which each fold is trained independently for 1,000 epochs with the standard Dice + cross-entropy loss on 1,296 four-modality training cases. This ensemble is followed by a rule-based post-processing cascade tuned for the lesion-wise Dice similarity coefficient (LW-DSC), a detection-oriented metric that behaves very differently from the traditional global Dice. The final pipeline reaches an LW-DSC of 0.733 / 0.751 / 0.713 / 0.549 on the enhancing tumour (ET), tumour core (TC), whole tumour (WT), and resection cavity (RC) sub-regions on the official validation leaderboard. Rather than trusting these leaderboard gains, we audit every post-processing stage with a five-fold out-of-fold (OOF) analysis with no model-training leakage over all 1,296 training cases, scored with the official BraTS evaluation code (BraTS_evaluation): it confirms two stages as robust, per-fold-consistent improvements while the third improves only the leaderboard and does not reproduce out-of-fold. We further provide a mechanistic analysis of the LW-DSC metric that explains why recall-recovering post-processing carries low risk whereas component deletion does not, and we report thirteen negative results spanning loss engineering, alternative backbones, and inference-time settings, several of which run counter to widely held intuitions. Source code is released under Apache-2.0 at https://github.com/hornbeamliu/brats2026-met.",
    "published": "2026-09-10T12:43:04Z",
    "updated": "2026-09-10T12:43:04Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.11477"
  },
  {
    "id": "2609.11472",
    "title": "BridgeMatch: Conditional Transport Bridges in Matching Matrix Space for 3D Deformable Registration",
    "authors": [
      "Qianliang Wu",
      "Haobo Jiang",
      "Guangwei Gao",
      "Shuo Chen",
      "Jin Xie",
      "Jian Yang",
      "Yaqing Ding"
    ],
    "abstract": "Reliable non-rigid point cloud correspondences are important for deformable anatomical registration, embodied perception and manipulation, and dynamic 3D reconstruction. Coarse-to-fine methods reduce computational cost by selecting the top-\\(K\\) coarse regions. However, this pruning may remove weak but correct hypotheses and restrict fine matching to an incomplete search space. We present \\paper, a two-stage generative solver that maintains the complete soft matching matrix at both coarse and high resolutions. Stage~I uses denoising diffusion to estimate a global matching matrix in the compact coarse-resolution space. We then lift this matrix to high resolution while preserving its hierarchy. The lifted matrix is rank-bounded and block-constant. Stage~II refines it through a conditional transport bridge. We implement the bridge with two types of dynamics: a deterministic endpoint-parameterized conditional Flow Matching (CFM) ODE and a stochastic Brownian-bridge SDE inspired by Schrödinger bridges. Both variants share the lifted source, a time-conditioned transformer, and a matching-matrix endpoint predictor. Experiments on 4DMatch and 4DLoMatch show that both variants produce more accurate correspondences than the compared methods and improve downstream registration, with larger gains in low-overlap cases. They also improve cross-dataset generalization on CAPE and DeepDeform without target-domain adaptation while using the same deformation solver.",
    "published": "2026-09-10T12:39:58Z",
    "updated": "2026-09-10T12:39:58Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.11472"
  },
  {
    "id": "2609.11463",
    "title": "BruNet: A Cross-Domain Transfer Framework for Bruise Segmentation",
    "authors": [
      "Qiming Wang",
      "Richard J. Motley",
      "Ebube E. Obi",
      "Xianfang Sun",
      "Paul L. Rosin"
    ],
    "abstract": "Segmenting bruises is a challenging task in medical imaging due to limited data and annotations, diffuse boundaries, and highly variable appearance. In this work, we propose BruNet, a segmentation framework that combines a ViT-based visual encoder (a self-supervised DINOv3 or a pretrained LingBot-Vision backbone) with a SAM-based mask decoder. BruNet is trained on the HAM10000 skin lesion dataset and evaluated on a separate bruise dataset without additional fine-tuning. Although a small number of prior studies have explored machine learning and computer vision for bruise analysis, existing work has primarily focused on detection, classification, or colour analysis rather than pixel-level localisation. To the best of our knowledge, this is the first study to address automatic bruise segmentation. Our results show that BruNet outperforms CNN-based models, state-of-the-art segmentation models, ChatGPT-4o/5-assisted SAM2 zero-shot baselines, and the medical-oriented MedSAM model, demonstrating strong cross-domain generalisation to bruise segmentation.",
    "published": "2026-09-10T12:35:20Z",
    "updated": "2026-09-10T12:35:20Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.11463"
  },
  {
    "id": "2609.11458",
    "title": "Flexible and Interpretable Accent Distance Measurements",
    "authors": [
      "Charles McGhee",
      "Mark J. F. Gales",
      "Kate M. Knill"
    ],
    "abstract": "Determining the differences between two speakers' accents is a fundamental task in linguistics and speech technology research. The methodology used to measure these differences depends on the specific research area. A phonetics researcher may demonstrate accent variation by comparing vowel formants in paired recordings of individual words. These results will be interpretable, but the recordings will be time-consuming to collect and may not be representative of connected speech. Accented Text-to-Speech (TTS) research has pushed towards using accent embeddings derived from accent classification tasks. These embeddings can be produced from any speech recording, but are not readily interpretable. In this paper, we demonstrate that articulatory representations created through articulatory inversion can be used as an interpretable basis for accent comparison and that optimal transport provides a framework for accent comparison across arbitrary recording types.",
    "published": "2026-09-10T12:32:13Z",
    "updated": "2026-09-10T12:32:13Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.11458"
  },
  {
    "id": "2609.11452",
    "title": "RouteRepair: Instance-Level Failure Diagnosis and Targeted Repair in LLM-Based Automated Heuristic Design for Routing Optimization",
    "authors": [
      "Binghao Ji",
      "Di Huang",
      "Jiahui Fang",
      "Zhiyuan Liu"
    ],
    "abstract": "Efficient routing optimization is essential to freight transportation, urban logistics, and shared mobility, where high-quality heuristics are often required under limited computational budgets. Recent large language model (LLM)-based automated heuristic design methods can generate effective routing rules, but aggregate evaluation may mask recurrent failures on particular instance structures. To address this limitation, this study develops RouteRepair, which diagnoses parent-specific weaknesses from instance-level performance and applies targeted modifications to the corresponding heuristic components while protecting behavior that already performs well. Routing evidence, solver behavior, and program context are combined to define bounded repair objectives, and each intervention is validated through matched parent-child evaluation of failure recovery and collateral degradation. Experiments on the traveling salesman problem (TSP) and capacitated vehicle routing problem (CVRP) span constructive search, guided local search, and ant colony optimization. RouteRepair-GLS reduces the mean TSP optimality gap from 1.7476% to 0.7587%, while the constructive CVRP heuristic lowers average route cost by 1.91% relative to the savings heuristic; the generated ACO priors also outperform matched hand-designed priors. These results show that failure-aware, evidence-constrained refinement can improve routing heuristics on difficult instances while preserving performance on cases they already solve well.",
    "published": "2026-09-10T12:21:18Z",
    "updated": "2026-09-10T12:21:18Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.11452"
  },
  {
    "id": "2609.11450",
    "title": "Cross-Lingual Clinical Annotation Projection as Constrained Text Generation: A Six-Language Study",
    "authors": [
      "Álvaro Rey-Blanes",
      "Francisco J. Moreno-Barea",
      "Francisco J. Veredas"
    ],
    "abstract": "Background: To determine whether cross-lingual clinical annotation projection can be formulated as a text-preserving, document-level generative task that produces verifiable character-level annotations for multilingual clinical corpus construction, and to characterize its robustness and computational trade-offs relative to candidate-based projection pipelines. Methods: We developed a constrained LLM projection workflow that inserts entity tags directly into immutable target-language text, followed by deterministic validation and character-offset reconstruction. We evaluated it alongside supervised candidate-span projection and hybrid ML-LLM refinement for transferring Spanish Disease, Symptom, and Procedure annotations into six languages. Evaluation used MultiClinAI gold standard with strict span matching and character-overlap F1 Results: Direct LLM projection achieved the strongest and most consistent performance. GLM 5.2 obtained a mean Strict F1 of 0.9201 across 18 language-entity combinations, while locally deployable Gemma4:31B achieved 0.9133. The best LLM configuration improved Strict F1 over the previous state of the art in all 18 settings, by 0.0564-0.1512, yielding 55,416 grounded mentions with reconstructed offsets. Conclusions: Direct LLM-based projection enables high-quality multilingual clinical annotation transfer and provides a practical approach for extending clinical NLP resources to languages with fewer annotated datasets and language-specific tools. Combined with local inference and deterministic validation, it can substantially reduce expert time and cost for multilingual clinical corpus construction.",
    "published": "2026-09-10T12:17:52Z",
    "updated": "2026-09-10T12:17:52Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.11450"
  },
  {
    "id": "2609.11449",
    "title": "Prevalence Determines Precision:Silent Contamination in Detector-Defined Datasets",
    "authors": [
      "Jia Huang",
      "Yankai Wan",
      "Yangjun Ou"
    ],
    "abstract": "Many ML datasets are constructed by running a detector, heuristic, or model over candidate pools; accepted items become labels. Dataset precision is then governed by true-positive prevalence in each pool via Bayes, not solely by detector quality. Using one instrument and period, we hold a detector-defined event dataset plus an independent official index labeling every detected item as real or phantom. One detector, three pools yield phantom rates 81.7%, 9.0%, and 0.0%. Transferring precision from the two high-rate pools to the low-rate pool predicts 0.955 versus measured 0.183, a +422% error; the Bayes expression predicts all three within 3.3%. The detected response curve is an exact convex combination of a true-event and a phantom component (residual 1.1e-16), with phantoms outnumbering true events 473 to 308, so contamination is a second signal with detector-inherited shape, not additive noise. Contamination direction depends on the estimator: on identical windows one statistic is diluted and another inflated because its denominator is also contaminated. A common normalization turns the estimator into a mean of ratios whose expectation need not exist; on the same 335 events it returns 0.40 where the well-defined estimator returns 0.10.",
    "published": "2026-09-10T12:17:44Z",
    "updated": "2026-09-10T12:17:44Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.11449"
  },
  {
    "id": "2609.11447",
    "title": "Investigating catastrophic forgetting in sound event classification",
    "authors": [
      "Riccardo Casciotti",
      "Annamaria Mesaros"
    ],
    "abstract": "This work investigates a number of approaches to prevent catastrophic forgetting in class incremental learning scenarios for sound event classification tasks. We analyze the problem using architectural and regularization approaches, using FSD50K and AudioSet datasets. We design incremental stages and solutions that selectively protect the kernels of the network from weight updates to prevent catastrophic forgetting, and a dynamic head solution that expands itself each time a new task is learned. The findings show that catastrophic forgetting mainly happens in deeper layers, in particular in the classifier head. For the studied in-domain sound classification problem, the solution that seems to alleviate catastrophic forgetting and is the most efficient is a full freezing of the feature extractor with a fine-tuning of the dynamic head classifier, showing little to no forgetting and great training stability, and a good balance between memory-stability and learning plasticity.",
    "published": "2026-09-10T12:16:56Z",
    "updated": "2026-09-10T12:16:56Z",
    "categories": [
      "eess.AS",
      "cs.AI",
      "cs.SD"
    ],
    "url": "https://arxiv.org/abs/2609.11447"
  },
  {
    "id": "2609.11446",
    "title": "Calibration-Aware Uncertainty Cascades for Efficient Heterogeneous Model Collaboration",
    "authors": [
      "Yilin Zhang",
      "Han Jiang",
      "Cai Xu",
      "Ying Liu",
      "Wei Zhao"
    ],
    "abstract": "Heterogeneous model collaboration seeks to exploit the complementary strengths of different models to balance predictive performance and inference cost. Existing approaches typically rely either on trained routers, which tie routing decisions to a fixed task and model pool, or on raw-confidence cascades, whose thresholds lack consistent reliability semantics across heterogeneous models. Consequently, these approaches adapt poorly to changing model pools and deployment budgets. We propose Calibration-Aware Uncertainty Cascades (CAUC), a simple post-hoc framework that independently calibrates each model's confidence and selects deployment policies using validation data. The resulting calibrated confidence scores establish a common reliability scale for accepting an early prediction, invoking a stronger model, or selectively combining model outputs. This unified decision criterion decouples deployment policies from any particular model pool or operating budget. We further show theoretically that calibration gives confidence thresholds an explicit selective-risk interpretation, whereas uncalibrated scores offer no comparable reliability guarantee. Extensive experiments demonstrate that, across six language benchmarks, CAUC achieves an average relative accuracy improvement of 1.9% over strong-model-only inference while avoiding approximately 47% of strong-model calls. On image classification benchmarks, it maintains or improves predictive performance while reducing measured GFLOPs by up to 57%.",
    "published": "2026-09-10T12:14:54Z",
    "updated": "2026-09-10T12:14:54Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.11446"
  },
  {
    "id": "2609.10366",
    "title": "AVSRBench: A Multi-Condition AVSR Benchmark",
    "authors": [
      "Rishabh Jain",
      "Naomi Harte"
    ],
    "abstract": "While AVSR has achieved sub-1% word error rates on the standard LRS3 benchmark, its reliance on broadcast speech obscures whether this reflects true generalization or just domain adaptation. To investigate this gap, we evaluate three AVSR architectures across six conditions: controlled broadcast speech, fixed-grammar utterances, hyper-articulated Lombard speech, read speech from professional lipspeakers and non-professional speakers, and spontaneous multi-party video conversations. We find that visual-only performance deteriorates rapidly beyond broadcast domains, and audio-video fusion mainly benefits Lombard speech environments. Visual understanding degrades sharply at 90° profile views, with multimodal systems relying largely on acoustic fallback. Additionally, speaker articulation proves more critical than minor camera shifts, and LLM-based architectures suffer from poor out-of-domain generalization. Our work highlights a significant generalization gap in current AVSR research. To address this, we also introduce RoomReader-AV as a new benchmark for AVSR and release a unified data preprocessing pipeline to make comprehensive multi-condition evaluation accessible.",
    "published": "2026-09-09T15:58:44Z",
    "updated": "2026-09-09T15:58:44Z",
    "categories": [
      "eess.AS",
      "cs.CV",
      "cs.MM"
    ],
    "url": "https://arxiv.org/abs/2609.10366"
  },
  {
    "id": "2609.10364",
    "title": "OmniMed-FL: A Robust Multimodal Federated Learning Framework for Clinical Diagnosis",
    "authors": [
      "Ayush Debnath",
      "Ruelia Saha",
      "Sudip Misra"
    ],
    "abstract": "Simultaneous assessment of medical imaging and patient records is often required in clinical diagnosis. However, standard machine learning algorithms cannot analyze these data types together. Meanwhile, compliance with HIPAA and GDPR can constrain centralized aggregation of sensitive patient data. This leaves a crucial void of secure fusion of visual and textual context across distant networks. Thus, we present OmniMed-FL, a controlled systems study of multimodal federated learning for five-class clinical condition classification (Normal, Pneumonia, COVID-19, Pleural Effusion, Cardiomegaly). Our proxy corpus pairs 3,000 public chest radiographs with 3,000 class-conditioned synthetic notes, matched by class, not by patient. The framework benchmarks eight fusion strategies, three initializations, four missing-text imputation rules, and matched federated baselines under non-IID Dirichlet partitioning across 3 to 20 hospital clients. As all notes are synthetic and pairing is not patient-level, these are descriptive proxy comparisons, not estimates of diagnostic performance or deployment readiness. Within those limits with clients ($K=5$) and severe skew ($α=0.1$), local-only training achieves a macro-F1 score of 0.297, FedAvg achieves $0.662\\pm0.074$, FedProx $0.737\\pm0.085$, a matched FedMME-style one-shot ensemble $0.647\\pm0.080$, and our SCAFFOLD-AdamW adaptation $0.070\\pm0.015$, the 0.075 FedProx-FedAvg gap falling inside the wider of the two two-seed standard deviations. Over a $4\\times3$ grid, label skew costs up to 0.27 F1 whereas a near-sevenfold client increase costs at most 0.10, while bidirectional volume grows linearly to 183.5 GiB at $K=20$. Multimodal fusion leads on both corpora, scoring 0.956 against 0.934 for text and 0.664 for images on the synthetic corpus and 0.906 against 0.880 and 0.737 on the radiograph corpus, for $2.3\\times$ the model state of text alone.",
    "published": "2026-09-09T15:56:26Z",
    "updated": "2026-09-09T15:56:26Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.10364"
  },
  {
    "id": "2609.10363",
    "title": "SceneHI: High-Resolution 3D-Consistent Scene Texturing with Controllable Illumination",
    "authors": [
      "Athanasios Tragakis",
      "Marco Aversa",
      "Daniela Ivanova",
      "Chaitanya Kaul",
      "Roderick Murray-Smith",
      "Daniele Faccio",
      "Paul Henderson"
    ],
    "abstract": "SceneHI is a framework that lifts high-resolution, illumination-aware priors from 2D diffusion models to perform 3D texture synthesis. It is the first to demonstrate that high-resolution textures, previously limited to 2D synthesis, can be generated directly on 3D objects without model fine-tuning or optimization. Designed for complex, multi-object environments, SceneHI uniquely combines 3D-consistency, high-resolution fidelity, and physically plausible baked shadows within a single generative pipeline. To enforce strict geometric coherence, we introduce an exact analytical pixel-to-texel mapping that aligns diffusion trajectories across multiple viewpoints. We utilize High-Resolution Latent Textures (HRLTs) as a persistent canvas for gradually denoised textures, while camera views perform the denoising steps in latent pixel space. This ensures a shared base texture that can be subsequently refined to high resolution without compromising multi-view consistency. Finally, a light-aware generative pass embeds realistic geometry-consistent shadows directly into the atlases, bridging the gap to production workflows. SceneHI achieves high visual fidelity while reducing generation time by 80% compared to existing scene-level methods.",
    "published": "2026-09-09T15:56:02Z",
    "updated": "2026-09-09T15:56:02Z",
    "categories": [
      "cs.CV",
      "cs.GR"
    ],
    "url": "https://arxiv.org/abs/2609.10363"
  },
  {
    "id": "2609.10356",
    "title": "Spot-the-shift: Evaluating Grounded Image Difference Captioning of Long-term Changes",
    "authors": [
      "Benedetta Liberatori",
      "Nermin Samet",
      "Paolo Rota",
      "Matthieu Cord",
      "Elisa Ricci",
      "Andrei Bursuc",
      "Monika Wysoczańska"
    ],
    "abstract": "Long-term change understanding from images of the same place revisited over time is a challenging task with applications in map maintenance and urban infrastructure monitoring. Prior work addresses it either through pixel-level prediction or difference captioning, neither of which is sufficient to reliably measure how well models detect and describe such changes. We introduce SPOT-THE-SHIFT, a human-verified benchmark for grounded image difference captioning of long-term changes in real-world driving scenes. Our benchmark provides natural language captions and spatial masks for structural changes across each image pair. We further propose an evaluation protocol that reliably assesses models' captioning ability, validated through human studies. Benchmarking state-of-the-art MLLMs, we find that models struggle with the fine-grained multi-image spatial capability required for this task. Finally, we develop a synthetic data generation pipeline that improves an off-the-shelf MLLM without sacrificing general capabilities.",
    "published": "2026-09-09T15:52:04Z",
    "updated": "2026-09-09T15:52:04Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.10356"
  },
  {
    "id": "2609.10261",
    "title": "When Fusion Fails: Corruption-Aware Rebalanced Fusion for Multi-Modal Medical Image Segmentation",
    "authors": [
      "Yuchen Pei",
      "Xiaoyu Hu",
      "Yixiong Zou",
      "Dingwen Hu",
      "Hui Chu",
      "Yutao Ma",
      "Shijun Qiu",
      "Gang Li"
    ],
    "abstract": "Multi-modal medical image segmentation leverages complementary diagnostic information, yet fusion can underperform single-modality baselines when spatially aligned inputs differ in quality. Here, \"corruption\" primarily denotes resolution-induced degradation rather than misalignment or complete modality absence, while synthetic noise is evaluated only as an auxiliary setting. We identify a critical optimization-inference inconsistency: degraded modalities can receive weak training updates yet substantially affect predictions, indicating active interference with fusion. We attribute this failure to resampling-induced feature corruption and optimization bias, where noisy features propagate through skip connections and encourage unreliable modality selection. We therefore propose CoReFuse-Med, a Corruption-aware Rebalanced Fusion framework that suppresses corruption during feature transmission and rebalances modality contributions during high-level fusion. Experiments on EPVS, BraTS, and WMH, including multiple Z-axis slice-retention ratios and an auxiliary noise test, demonstrate improved accuracy and robustness under modality-quality discrepancies. Our code is available at https://github.com/lrever/CoReFuse.",
    "published": "2026-09-09T14:46:37Z",
    "updated": "2026-09-09T14:46:37Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.10261"
  },
  {
    "id": "2609.10253",
    "title": "DiSCo: A Distribution-First Steering and Cultural Prior Evaluation Framework for Measuring Cultural Preference Bias in LLMs",
    "authors": [
      "Bhuvan Arora",
      "Devesh Saraogi",
      "Sravya Varada",
      "Dhruv Kumar"
    ],
    "abstract": "Large language models (LLMs) are increasingly deployed in globally used assistants, yet their default choices in culturally grounded everyday situations can systematically favour some cultures over others, affecting localisation, user trust, and equitable behaviour. Existing cultural benchmarks evaluate accuracy against a single \"correct\" answer, making it difficult to characterise an LLM's cultural preference prior when multiple culturally grounded responses are all valid; they also conflate default preferences with context-driven adaptation. We propose DiSCo, a distribution-first forced-choice evaluation framework that isolates default cultural priors and tests steerability via a four-level context gradient (C0--C3). Using DiSCo-Bench (304 items) derived from BLEnD spanning 12 cultures, we evaluate six diverse instruction-tuned LLMs. Default priors are heavily concentrated, with UK and US together absorbing approximately 35\\% of all selections despite representing only 2 of 12 cultures. Most critically, prompt-based steering consistently widens the selection gap between high- and low-resource cultures, and injecting explicit cultural facts produces negligible distributional disruption, confirming that cultural preference bias cannot be resolved through prompt-based personalisation alone.",
    "published": "2026-09-09T14:40:08Z",
    "updated": "2026-09-09T14:40:08Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.10253"
  },
  {
    "id": "2609.10248",
    "title": "A-JIT: Agentic Just-In-Time Software Construction",
    "authors": [
      "Mark Marron",
      "Earl T. Barr"
    ],
    "abstract": "Traditional software delivery assumes a static paradigm: code is constructed prior to execution and deployed as a fixed artifact. We present Agentic Just-In-Time Software Construction (A-JIT), a paradigm that replaces static binaries with dynamic, software systems that can perpetually evolve to meet changing demands. In A-JIT, an application is an integrated assembly comprising code, a runtime harness, and an embedded AI agent that continuously observes system usage and live execution traces. Much like a traditional JIT compiler specializes machine code to runtime execution paths, A-JIT specializes software logic, workflows, and tool interfaces to meet the specific needs of the end-user. By integrating synthesis directly into the ambient application lifecycle, A-JIT enables applications to dynamically construct missing implementations, generate new capabilities on the fly, and continuously adapt to end-user behavior. We demonstrate how this model supports trace-driven human-AI co-construction and opens a new design space for adaptive, self-evolving software.",
    "published": "2026-09-09T14:36:51Z",
    "updated": "2026-09-09T14:36:51Z",
    "categories": [
      "cs.SE",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.10248"
  },
  {
    "id": "2609.10239",
    "title": "LiteRAG: Cost-Efficient Graph-Based Retrieval-Augmented Generation",
    "authors": [
      "Daniel Alejandro Coll Tejeda",
      "Pedro García López",
      "Daniel Barcelona-Pons"
    ],
    "abstract": "Graph-based retrieval can improve multi-hop question answering, but existing approaches often incur high query-time costs and produce diffuse, oversized contexts that reduce generation efficiency. We present LiteRAG, a graph-based retrieval method that replaces expensive retrieval-time LLM control with query-conditioned algorithmic exploration and reasoning-chain context construction. On DistComp, a benchmark for multi-hop retrieval over distributed-systems papers, LiteRAG attains the highest overall quality among the evaluated methods (0.798) while reducing per-query latency by over 100$\\times$ and cost by over 99% relative to GraphRAG Global and DRIFT. On UltraDomain, it matches LinearRAG on overall quality while using about 14$\\times$ fewer tokens. An ablation study indicates that LiteRAG's query-adaptive thresholding and community-aware hub penalization are the main drivers of its token-efficiency gains.",
    "published": "2026-09-09T14:32:07Z",
    "updated": "2026-09-09T14:32:07Z",
    "categories": [
      "cs.IR",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2609.10239"
  },
  {
    "id": "2609.10225",
    "title": "Hierarchical and Permutation-Invariant Feature Transformation Learning via Policy-Guided Embedding Search",
    "authors": [
      "Rui Liu",
      "Tao Zhe",
      "Yanyong Huang",
      "Sankha Narayan Guria",
      "Xiao Luo",
      "Wei Fan",
      "Yanjie Fu",
      "Dongjie Wang"
    ],
    "abstract": "Feature transformation improves predictive performance on tabular data by constructing informative abstractions from raw features. Recent generative approaches encode transformation knowledge into continuous embedding spaces for efficient exploration of candidate strategies, but face three key limitations: (1) overlooking hierarchical relationships between low-level features, operations, and high-level abstractions; (2) enforcing order-sensitive embeddings on inherently permutation-invariant transformation sequences, thereby introducing systematic bias; and (3) relying on gradient-based search, which is ill-suited to non-convex transformation spaces. We propose a framework with two complementary components. First, a permutation-invariant hierarchical module captures interactions across features, operations, and abstraction levels, with a self-attention pooling mechanism that maps semantically equivalent structures to consistent embeddings aligned with downstream performance. Second, a policy-guided multi-objective reinforcement learning strategy initializes the search from empirically strong seeds and jointly optimizes predictive accuracy and transformation efficiency. Extensive experiments on diverse tabular benchmarks demonstrate the effectiveness and robustness of our framework against strong baselines. Our code and data are publicly available at: https://github.com/RayLiu1103/PHER.",
    "published": "2026-09-09T14:23:34Z",
    "updated": "2026-09-09T14:23:34Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.10225"
  },
  {
    "id": "2609.10224",
    "title": "UOT-Gap: A Variational Principle for the Modality Gap in Vision-Language Models via Unbalanced Optimal Transport",
    "authors": [
      "Zonglin Yang",
      "Huilan Ma",
      "Xudan Zheng",
      "Yuejun Xie"
    ],
    "abstract": "Vision-language models such as CLIP embed images and text in a shared space, where modality-specific distributions often remain separated. Existing accounts connect this modality gap to initialization, contrastive dynamics, and information imbalance, while its distributional and pairwise contributions to retrieval remain unresolved. We introduce UOT-Gap, a training-free variational diagnostic that models frozen image and text embeddings with unbalanced entropic optimal transport (UOT). The UOT optimum separates transport, coupling complexity, and marginal mass variation; a complementary pair-aware residual compares observed image-caption pairs with the UOT soft matching. On Flickr8K and COCO-1K with frozen CLIP, OpenCLIP, and SigLIP encoders, caption degradation reduces Flickr8K Recall@1 from 0.559 to 0.003. Across six dataset-model conditions, the pair-aware residual tracks retrieval degradation with mean absolute Spearman 0.973, compared with 0.392 for the mean gap. The association remains stable across five random COCO-1K subsets at $0.954\\pm0.026$, with a minimum of 0.943. UOT barycentric updates reduce the transport objective while degrading retrieval, distinguishing geometric objective descent from task improvement. These results establish UOT-Gap as a diagnostic for caption quality, modality alignment, and retrieval robustness.",
    "published": "2026-09-09T14:23:13Z",
    "updated": "2026-09-09T14:23:13Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.10224"
  },
  {
    "id": "2609.10221",
    "title": "Why Sample What You Can Enumerate? Exact Policy Optimization for Genomic Tool Selection",
    "authors": [
      "Haoyue Liu",
      "Xiaoyu Ma",
      "Ye Chen",
      "Zhichao Wang",
      "Xiaoying Tang"
    ],
    "abstract": "Reinforcement learning over a frozen reasoner has become a common recipe for teaching a policy which external tools to invoke. We show that this recipe becomes structurally mismatched in specialist scientific settings where the complete tool-subset space is enumerable. There, a small set of recurring computational capabilities covers the domain, so the space of tool subsets is combinatorial yet small enough to enumerate, and GRPO still estimates an action expectation from a handful of sampled rollouts. Worse, the approximation degrades as training succeeds: as the policy concentrates on preferred subsets it resamples them, sampled rewards collide, and the group-normalized advantage vanishes. On genomic reasoning the fraction of questions yielding no reward signal rises from 0.2% under a uniform reference policy to 20.8% after GRPO training. As a remedy, we introduce FGPO (Full-Group Policy Optimization), which (1) scores every tool subset and optimizes the exact action expectation, so each update sees the complete action space, and (2) precomputes the reward of each question--subset pair into an exhaustive table, removing frozen-reasoner calls from the training loop entirely. Across five frozen reasoners and three genomic benchmarks, FGPO outperforms GRPO in all 15 settings by 6.75 points on average and up to 14.20, while a standard on-demand GRPO schedule would require 2.4 times as many frozen-reasoner reward evaluations and, on GenomeQA, FGPO cuts invoked tools per question from 2.36 to 1.40.",
    "published": "2026-09-09T14:20:47Z",
    "updated": "2026-09-10T01:52:39Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.10221"
  },
  {
    "id": "2609.10199",
    "title": "Seeing the Voice, Preserving the Self: A Participatory Design Approach to Deaf-Centric Text-to-Speech",
    "authors": [
      "Shela Atemnkeng",
      "Patrick Boudreault",
      "Paige DeVries",
      "Lloyd May",
      "Christian Vogler"
    ],
    "abstract": "We describe a participatory design approach toward developing Deaf-centric text-to-speech (TTS) technologies. While TTS is growing rapidly in the mainstream, it has received little attention to date in the deaf and hard of hearing (DHH) technology space. Critical problems have remained unaddressed for DHH users, including the ability to manipulate tone, emotions and delivery via non-auditory means. Verifying that the generated speech matches intent and is appropriate for a given situation without having to listen to it is another challenge. Respecting cultural and identity factors in the generated speech is also important. This work explores the design space with DHH participants through two focus groups, three co-design sessions, and four one-on-one early-stage design evaluation sessions. Participants included people both familiar and unfamiliar with TTS, as well as DHH content creators. We describe key findings, design ideas, results, and implications for future Deaf-centric TTS development. We also identify unmet technology requirements that pose barriers to adoption of Deaf-centric TTS technology.",
    "published": "2026-09-09T14:04:39Z",
    "updated": "2026-09-09T14:04:39Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2609.10199"
  },
  {
    "id": "2609.08765",
    "title": "Benchmark Scores Are Pipeline-Dependent: A Reliability Audit of Cybersecurity LLM Benchmarks",
    "authors": [
      "Aymene Berriche",
      "Cathrine Shalby",
      "Mohannad Alhanahnah",
      "Yazan Boshmaf"
    ],
    "abstract": "Large language model (LLM) benchmarks are often treated as fixed datasets with stable scores, yet their outcomes depend on configurable evaluation pipelines. We audit eight cybersecurity benchmarks across 10 proprietary, open-weight, and cybersecurity-specialized LLMs. By modeling benchmarks as measurement pipelines, we identify 15 systematic failure modes and show that a single pipeline choice can change a model's score by more than 80 percentage points and substantially alter model rankings. At the cross-benchmark level, two semantically similar task pairs rank the same models differently because of incompatible evaluation conventions. Under an evaluation harness that standardizes pipeline choices while preserving task semantics, nine of 10 models shift by at least three ranks on at least one benchmark. These results show that cybersecurity LLM benchmark scores are pipeline-dependent and motivate pipeline-aware auditing as a core requirement for reliable model evaluation.",
    "published": "2026-09-08T14:01:22Z",
    "updated": "2026-09-08T14:01:22Z",
    "categories": [
      "cs.CR",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2609.08765"
  },
  {
    "id": "2609.09250",
    "title": "No Free Checker: A Survey of Verifiers for Robot Policies",
    "authors": [
      "Yang Wan",
      "Xihang Yue",
      "Zhirui Liu",
      "Ziyuan Chu",
      "Shuxun Wang",
      "Yuhan Chen",
      "Xiaonan Jiang",
      "Xukun Zhu",
      "Yubo Dong",
      "Linchao Zhu"
    ],
    "abstract": "A verifier for robot policies reads a candidate behavior and returns a score for how well it did, used both to evaluate vision-language-action policies and to train them. Verifiers range from success detectors and reward models to runtime monitors, safety filters, and temporal-logic specifications. We survey roughly 150 verifiers and compare them along two properties. Availability is how much a verdict costs, how early in a rollout the verdict arrives, and how often a verdict can be asked for. Availability rises as verdicts get cheaper, earlier, and denser. Credibility is how much a high score tells us about the task. Credibility falls as the judgment becomes gameable and self-serving. We group the verifiers by who supplies the judgment: human verifiers, rule-based and formal verifiers, learned and pretrained verifiers, and model-intrinsic verifiers. Across the four families, we find that credibility falls as availability rises. Regardless of who supplies the judgment, there is no free checker. We then examine what validates a verifier itself, and how much a high score tells us. Three measures appear in the literature: agreement with human labels, the performance of the policy it trains, and behavior under reward hacking. We close with nine metrics that make a verifier claim checkable, and coordinates for the verifiers still to be built.",
    "published": "2026-09-08T13:52:59Z",
    "updated": "2026-09-08T13:52:59Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.CV",
      "cs.LG",
      "eess.SY"
    ],
    "url": "https://arxiv.org/abs/2609.09250"
  },
  {
    "id": "2609.08755",
    "title": "Kairos: A Dataset for Fine-Grained Video-Language Modeling over Space, Time, and Dynamics",
    "authors": [
      "Ruibo Ming",
      "Lei Sun",
      "Deheng Zhang",
      "He Zhang",
      "Jialu Li",
      "Jian Wang",
      "Zhendong Li",
      "Mengshun Hu",
      "Danda Pani Paudel",
      "Luc Van Gool",
      "Jinjin Gu"
    ],
    "abstract": "Many emerging video language modeling tasks require systems to move beyond clip-level abstraction and model visual content as it unfolds over extended time horizons. However, most existing video datasets rely on coarse or sparsely aligned supervision, which compresses temporal variation and limits the ability of models to learn reusable representations of continuous visual dynamics. We introduce Kairos, a video dataset for video-language modeling with time-resolved annotations. Kairos consists of long-duration videos, ranging from ten minutes to half an hour, annotated with fine-grained temporal alignment. The annotations capture ongoing actions, entity appearances and attributes, interactions, and evolving contextual cues along the video timeline. This time-resolved structure supports fine-grained evaluation, long-range modeling and reasoning, instruction data construction, representation learning, and video generation. Kairos provides a general-purpose foundation for modeling visual experiences over time.",
    "published": "2026-09-08T13:50:30Z",
    "updated": "2026-09-08T13:50:30Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.08755"
  },
  {
    "id": "2609.08736",
    "title": "When Can One Obtain Certificates of Optimality Using Positivstellensaetze?",
    "authors": [
      "Nayoon Kim",
      "Allen Gehret",
      "Shenyuan Ma",
      "Jakub Marecek"
    ],
    "abstract": "We study certificates of positivity and optimality for learning problems whose objectives and constraints need not be polynomial. We isolate an axiomatic core of Fischer's constructive strict and weak Positivstellensätze and prove the resulting theorems for abstract function algebras over ordered fields. The framework separates two roles that can otherwise be conflated: objective and constraint functions may be built from broad classes of continuous or definable operations, while the auxiliary primitives used to construct a certificate satisfy explicit scalar and closure axioms. We give instances over continuous and definable function algebras, including ordered fields not closed under square roots, derive lower-bound and global-optimality certificates, and analyze both expanded term length and shared computation-graph complexity.",
    "published": "2026-09-08T13:30:18Z",
    "updated": "2026-09-08T13:30:18Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.08736"
  },
  {
    "id": "2609.08730",
    "title": "CVT-GS: Learning to Simplify 3D Gaussian Splatting with Centroidal Voronoi Tessellation",
    "authors": [
      "Bingxian Li",
      "Yilong Li",
      "Jingliang Peng",
      "Peng-Shuai Wang",
      "Fei Zhu",
      "Guozheng Li",
      "Chi Harold Liu",
      "Guoping Wang",
      "Bo Pang"
    ],
    "abstract": "While 3D Gaussian Splatting (3DGS) has emerged as a powerful representation for real-time novel view synthesis, rendering high-fidelity scenes often relies on a massive number of Gaussian primitives, incurring substantial storage and computational overhead. Existing simplification techniques are largely intrusive, requiring training-time pruning, architectural modifications, or computationally expensive per-scene fine-tuning. These drawbacks limit their deployment on off-the-shelf pretrained models. In this paper, we propose CVT-GS, a novel optimization-free post-hoc simplification framework that directly compresses trained 3DGS scenes without sacrificing visual fidelity. Our approach first constructs spatially coherent cells over Gaussian centers via a geometry-aware Centroidal Voronoi Tessellation (CVT). Subsequently, a lightweight neural cell merger predicts the geometry and appearance of a single, highly representative Gaussian primitive for each cell under differentiable rendering supervision. By formulating simplification as a rendering-aware many-to-one merging process rather than naive primitive pruning, CVT-GS outputs a standard 3DGS scene that is seamlessly compatible with existing renderers. Experiments on various datasets demonstrate the superiority of our method. Notably, when achieving a 100-fold reduction in Gaussian points, our method operates 12 times faster than state-of-the-art methods while improving the PSNR by 1.3 dB.",
    "published": "2026-09-08T13:26:32Z",
    "updated": "2026-09-08T13:26:32Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.08730"
  },
  {
    "id": "2609.08729",
    "title": "Application of curiosity driven exploration methods for hardware interference identification",
    "authors": [
      "Ludovic Matar",
      "Clement Moulin-Frier",
      "Pierre-Yves Oudeyer"
    ],
    "abstract": "The transition from single-core to multi-core architectures in safety-critical embedded systems introduces significant challenges due to inter-core interference caused by contention for shared hardware resources. Such interference affects execution times and complicates the verification of strict temporal requirements, particularly in domains such as avionics where standards require comprehensive identification of interference sources. Existing interference analysis approaches, whether manual or model-based, struggle to capture the full range of behaviors arising from the complex interactions among micro-architectural components. In this paper, we frame multi-core interference analysis as the exploration of a complex system behavior space. We propose the use of curiosity-driven exploration algorithms from artificial intelligence to systematically and efficiently cover the space of possible interference behaviors. Using a simulator-based environment, we show that the proposed approach achieves broader and more uniform behavioral coverage within a limited experimental budget compared to traditional pseudo-random program generation methods.",
    "published": "2026-09-08T13:26:24Z",
    "updated": "2026-09-08T13:26:24Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.08729"
  },
  {
    "id": "2609.08722",
    "title": "Inverse Digital Marbling: Recovering Gesture Programs with a Replay Adjoint",
    "authors": [
      "Tianqi Liu",
      "Yushan Han",
      "Hang Liu"
    ],
    "abstract": "Pigment deposition in paper marbling displaces the pattern already present, coupling the appearance of each gesture to later actions. We recover executable programs for a deposition-based digital marbling model: given a target image, we optimise an ordered program of capsule insertions whose replay approximates it. The capsule primitive continuously joins circular drops to elongated deposits. Its transport is exactly area-preserving and has a closed-form inverse on the exterior of the deposited region. A replay adjoint reconstructs intermediate states, retaining coordinates lost inside deposits and periodic position checkpoints. At 2000 gestures and 1024^2 pixels, the PyTorch replay implementation uses 8.7x less memory than the tested checkpointed-autograd configuration at comparable step time; the fused implementation fits a program in about four minutes on one workstation GPU. We evaluate image reconstruction on five marbled sheets, compare against transport-disabled fitting, one-pass geometric compensation and a published stroke-based fitter at matched stroke count, and measure sensitivity to an alternative ordered-drop transport. Recovered programs replay across a 4x range of linear resolution. Edits specified in program order or in palette space -- inserting a gesture, recolouring a stage, translating a stage -- replay correctly under the same model; edits specified by image content, such as moving a motif, do not. On synthetic targets with known generating programs, the recovered programs match the images but not the generating gestures under a positional matching statistic. The output is an editable program in the specified digital medium.",
    "published": "2026-09-08T13:20:07Z",
    "updated": "2026-09-08T13:20:07Z",
    "categories": [
      "cs.GR",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.08722"
  },
  {
    "id": "2609.08719",
    "title": "GoAnt: Quality-Diversity Multi-Agent Search for Alpha Factor Discovery in Market Microstructure Data",
    "authors": [
      "Stella Zhao",
      "Tommy Sha"
    ],
    "abstract": "Automated alpha factor discovery searches symbolic trading signals from price-volume panels and order-book data under a fixed evaluation budget. Existing single- and multi-agent program-search systems can overfit predictive proxies that fail after execution costs and repeatedly explore redundant factor families, limiting execution robustness and behavioral diversity. We introduce GoAnt, a quality-diversity multi-agent search framework that combines non-communicating Explorer, Exploiter and Connector workers with a shared adaptive Mental Map and a compact Queen dispatcher. The Mental Map organizes candidates by leakage-free execution profiles and retains one elite per niche, while the Queen reallocates the evaluation budget from explicit search-state summaries. We also define a map-independent effective-yield protocol that counts high-quality, mutually nonredundant factors directly from each method's evaluation records, giving archive-based and map-free systems the same ruler. On real A-share microstructure data spanning 2023--2026, GoAnt reaches quality-weighted yields of 41.8 and 47.6 in price-volume and order-book settings, improving the strongest baseline by 57% and 97% under matched budgets. Its locked populations retain 0.64 and 0.67 of in-sample quality out of sample, compared with 0.61 and 0.63 for a static map.",
    "published": "2026-09-08T13:19:18Z",
    "updated": "2026-09-08T13:19:18Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.08719"
  },
  {
    "id": "2609.08705",
    "title": "Enhancing Table Structure Recognition via Bounding Box Guidance",
    "authors": [
      "Lei Hu",
      "Shuangping Huang"
    ],
    "abstract": "Table Structure Recognition (TSR) aims to extract the bounding boxes of cells and table structure (e.g., HTML) from table images. Although current approaches have made significant progress, the latest image-to-sequence methods overlook the explicit utilization of the bounding box information when predicting HTML sequences, leading to error predictions in complex scenes. In this paper, we introduce a novel framework BGTR (Bounding Box-Guided Table Recognizer). To more effectively utilize bounding box information, we first predict the bounding boxes of cells and then use this information to guide the generation of HTML sequences. While utilizing bounding box information can enhance the accuracy of HTML sequences, for natural scene tables, the data volume is too small to allow for sufficient training of bbox-guided HTML generation. In response, we adopt a progressive training method for natural scene tables and introduce SNSTab, a synthetically generated natural scene table dataset. Our experiments on five benchmark datasets demonstrate SOTA performance.",
    "published": "2026-09-08T13:04:39Z",
    "updated": "2026-09-08T13:04:39Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.08705"
  },
  {
    "id": "2609.08696",
    "title": "MorphoOrgaAgent: A Foundation-Model-Based Multi-Agent System for Autonomous Organoid Analysis",
    "authors": [
      "Hanyi Zhang",
      "Maximilian Hoermann",
      "Lion J. Gleiter",
      "Yiling Xu",
      "Bettina Katalin Budai",
      "Hans-Ulrich Kauczor",
      "Carsten Marr",
      "Tingying Peng"
    ],
    "abstract": "Organoids are three-dimensional tissue models whose morphology provides important insights into tumor development, disease progression, and drug testing. Extracting these morphological features relies heavily on manual segmentation, which is time-consuming and labor-intensive. Furthermore, performing quantitative statistical analysis typically requires custom coding skills and a mathematical background, presenting a major barrier for experimental biologists. To address these challenges, we introduce MorphoOrgaAgent, a multi-agent framework that achieves zero-shot organoid segmentation, automated data analysis, and report generation based on natural language input. The framework consists mainly of three core components: a TaskUnderstandingAgent that identifies requested measurements and visualization types; a hybrid segmentation module that combines Cellpose-derived geometric prompts with text prompts to guide SAM3 for zero-shot organoid instance segmentation; and a ReportAgent that computes quantitative metrics and compiles them alongside generated visualizations into a structured report. We further introduce MorphoOrgaVQA, a benchmark designed for quantitative evaluation of agent systems in organoid morphology analysis. Experimental results demonstrate that MorphoOrgaAgent handles both explicit and descriptive user requests, produces measurements closely matching ground truth, and generates complete analysis reports without requiring manual programming. The complete source code and MorphoOrgaVQA benchmark are publicly available at https://github.com/peng-lab/MorphoOrgaAgent.",
    "published": "2026-09-08T12:59:46Z",
    "updated": "2026-09-08T12:59:46Z",
    "categories": [
      "cs.MA",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.08696"
  },
  {
    "id": "2609.08690",
    "title": "Hyperparameter Scaling Laws Across MoE Sparsity",
    "authors": [
      "Changxin Tian",
      "Kunlong Chen",
      "Jia Liu",
      "Ziqi Liu",
      "Zhiqiang Zhang",
      "Jun Zhou"
    ],
    "abstract": "Mixture-of-Experts (MoE) models expand model capacity without a proportional increase in training compute, but increasing sparsity makes reliable hyperparameter transfer challenging. In this work, we show that conventional hyperparameter scaling laws are insufficient for ultra-sparse MoEs: the optimal learning rate and batch size vary with activation ratio, and these shifts cannot be explained by either total or activated parameter count alone. To characterize this dependence, we conduct 1,800 pre-training runs spanning six activated-parameter scales and models with up to 6B total non-embedding parameters, processing approximately 20 trillion tokens at a cost of 200,000 equivalent H800 GPU-hours. Our results reconcile conflicting findings in prior work by revealing two scaling regimes. At fixed sparsity, the optimal batch size follows a power-law relationship with training tokens $D$, whereas the optimal learning rate scales with training compute $C$ and remains robust to the allocation between model size and data. Across sparsity levels, the activation ratio $A$ enters both relationships as an additional multiplicative power-law factor. These observations lead to unified hyperparameter scaling laws that transfer across MoE sparsity levels. Large-scale evaluation shows that the scaling form outperforms alternative functional forms. On a held-out ultra-sparse MoE with 12B total parameters and only 1/64 of its experts activated, the predicted hyperparameters remain close to the observed optima, supporting joint extrapolation across model scale and sparsity. Further experiments demonstrate transfer across expert granularities and isolate the effect of activation ratio from that of total expert count.",
    "published": "2026-09-08T12:57:20Z",
    "updated": "2026-09-08T12:57:20Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2609.08690"
  },
  {
    "id": "2609.08686",
    "title": "CausalChapter: Improving Long-Video Chaptering with Interventional Dependency Modeling",
    "authors": [
      "Xinran Duan",
      "Guozhang Li",
      "Yaoyao Zhong",
      "Mei Wang",
      "Lizhi Wang",
      "Hua Huang"
    ],
    "abstract": "Long-form instructional videos require automatic chaptering to support browsing, navigation, and knowledge access. Recent long-context language models can perform chaptering from textualized video inputs, but they remain costly and brittle for content-dense lecture videos with long transcripts, smooth topic transitions, and detailed chapter outputs. A scalable segment-then-caption paradigm reduces this cost, but introduces two new challenges: boundary error propagation and fragmented cross-chapter context. We propose \\textbf{CausalChapter}, an intervention-inspired framework for long-video chaptering that estimates prediction-level influence through lightweight masking and removal interventions. For boundary localization, our Local Dependency Shift module detects drops in predictive dependency between adjacent temporal windows; for chapter description generation, our Cross-Segment Support Selection module reranks historical contexts according to their support for the current prediction. Experiments on long-video chaptering benchmarks show that CausalChapter improves boundary localization, chapter description quality, and cross-chapter coherence.",
    "published": "2026-09-08T12:54:57Z",
    "updated": "2026-09-08T12:54:57Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.08686"
  },
  {
    "id": "2609.07670",
    "title": "Harnessing CLIP and DINO: An Uncertainty-Aware Cascaded Fusion Network for Generalizable Deepfake Image Detection",
    "authors": [
      "Xuechao Zou",
      "Yi Zhou",
      "Kai Li",
      "Shun Zhang",
      "Yuhui Chen",
      "Congyan Lang",
      "Junliang Xing"
    ],
    "abstract": "The growing realism and accessibility of manipulated and generated faces threaten the trustworthiness of digital media. To detect such forgeries, deepfake detectors based on vision foundation models have shown promising performance, but they typically rely on a single pretrained representation and are prone to overfitting to particular training distributions. To improve generalization to unseen forgeries, we propose UCF-Net, an uncertainty-aware cascaded fusion network that harnesses CLIP's language-aligned semantic priors and DINO's self-supervised visual-structure priors. UCF-Net extracts hierarchical features across Transformer depths, uses layer-wise expert aggregation to adaptively combine each encoder's multi-level cues, and performs weighted fusion of the resulting representations based on entropy-derived uncertainty. We further consolidate public deepfake datasets into a unified benchmark of approximately 4M images and construct a separate cross-generator evaluation set with over 8K face images from eight recent generators. On the unified benchmark, UCF-Net achieves the best mean AUC among the evaluated methods in both in-domain and cross-domain evaluations. On the cross-generator set, it adapts effectively with limited target-domain data, although zero-shot transfer remains challenging.",
    "published": "2026-09-07T15:59:19Z",
    "updated": "2026-09-07T15:59:19Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.07670"
  },
  {
    "id": "2609.07664",
    "title": "Accuracy is Not Enough: A Divergence-Based Approach to Evaluate Fidelity Loss in Quantized LLMs",
    "authors": [
      "Shahzeb Qamar",
      "Lorenz Sparrenberg",
      "Christian Bauckhage",
      "Baha Rababah",
      "Carson Leung",
      "Murat Kantarcioglu",
      "Cuneyt Gurcan Akcora",
      "Rafet Sifa"
    ],
    "abstract": "Deployment of Large Language Models (LLMs) on memory-constrained edge devices relies heavily on aggressive post-training quantization. However, evaluating these models is largely based on zero-shot task accuracy, which depends solely on argmax predictions and is insensitive to changes in the underlying predictive distribution. Consequently, accuracy can exhibit unstable, non-monotonic behavior under progressive quantization, masking substantial fidelity loss relative to the BFloat16 (BF16) uncompressed base model and providing misleading deployment signals. We introduce a distribution-sensitive evaluation framework quantifying information loss in quantized LLMs as the divergence between full-vocabulary predictive distributions at the token decision boundary. We compute statistical distances, including Jensen-Shannon Divergence and Total Variation Distance, between outputs of full-precision and quantized models, enabling a fine-grained analysis of distributional shift. Using this framework, we quantify probability mass displacement and distributional drift relative to the BF16 reference, capturing predictive distribution changes not reflected in top-1 accuracy. We conduct a 120-run experimental matrix across five foundation architectures and four reasoning benchmarks under progressive quantization regimes, from uncompressed BF16 to Q2_K, providing a systematic fidelity analysis. Our results show divergence metrics generally increase under stronger quantization, complementing task accuracy with a fidelity signal. Across tested llama.cpp schemes, mixed-precision Q4_K generally yields lower divergence than uniform Q4_0 at similar memory footprints. These findings motivate distribution-aware evaluation as a practical diagnostic complement to task accuracy; they do not directly establish correctness, calibration, safety, or user-perceived quality.",
    "published": "2026-09-07T15:49:52Z",
    "updated": "2026-09-07T15:49:52Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.07664"
  },
  {
    "id": "2609.07663",
    "title": "Noēsis: Deterministic-First Retrieval with Two-Tier Context Hydration for Factuality-Critical Queries on Small Local Models",
    "authors": [
      "Nicola Cogotti"
    ],
    "abstract": "A wrong number is worse than no answer. Across factuality-critical domains -- audience metrics, scheduling and rights in media; dosages and lab values in healthcare; figures and citations in finance and legal -- a confident but fabricated value is more damaging than an honest admission of uncertainty. Yet this is the dominant failure mode we observe on small local language models: even when correct evidence is present in context, models fabricate plausible numbers and timestamps. Recent work characterizes a real limit of this regime: below 7B parameters, the bottleneck of retrieval-augmented generation (RAG) is not retrieval quality but context utilization. We present Noesis, the deterministic-first query plane of the Noesis architecture, which makes every deterministic judgment before generation. Its mechanisms follow from the ingestion architecture (subject of a separate patent application): (a) a producer-side fact layer rendering precomputed metric facts verbatim without ranking; (b) positional addressing with deterministic cross-source alignment, resolved ahead of query time at zero LLM cost; (c) provenance scoping as an attribution constraint with multi-tier named-reference routing; and (d) two-tier context with model-triggered verbatim hydration. Across four ablations, a 2B model reaches parity with a 35B model on factual integrity (exact values in all runs; zero confabulated numbers on absent-entity traps); structured retrieval beats flat RAG by +11.4 points at 2B; skeleton-only context preserves quantitative answers at 20-30% smaller prompts; and hydration recovers verbatim narrative in ~8s versus ~29s. Two properties matter for regulated domains: each query resolves in a single generation call, and every reported value is traceable to its exact source and position by construction.",
    "published": "2026-09-07T15:49:16Z",
    "updated": "2026-09-07T15:49:16Z",
    "categories": [
      "cs.IR",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2609.07663"
  },
  {
    "id": "2609.07662",
    "title": "How AI Models Manage Epistemic Authority: A Taxonomy and Comparative Analysis of Responses to User Disagreement",
    "authors": [
      "Riyadh Alnasser",
      "Yusuf Mücahit Çetinkaya",
      "Sumin Zhao",
      "Tuğrulcan Elmas"
    ],
    "abstract": "Large language models are increasingly used as sources of advice and information, including in high-stakes settings, yet little is known about how they respond to user disagreement. We study how a model manages its epistemic authority, referring here to its claim to knowledge, competence, or the right to advise, once a user challenges its answer. Building on Conversation Analysis, we introduce a taxonomy of six challenge types and a four-layer framework for analysing each response: whether the original claim is maintained or changed, where authority is located, how the disagreement is socially managed, and what kind of evidential support is offered. We construct a new dataset of 2,310 controlled challenge scenarios and 32,340 corresponding responses from 14 models, and analyse them using our framework with an LLM-as-judge pipeline, providing a vocabulary which future evaluation and benchmark design can build on. We find that models show conflicting behaviour: they validate users in 85% of responses but maintain their original claim in 65%. They explicitly apologise in 33% of responses, yet 59% of those apologies accompany maintenance of the original claim. They transfer authority most often in advice tasks, doing so in 28% of responses and reaching 57% in health advice and 49% in legal advice, compared with 6% in fact and 3% in explanation tasks. Abandonment of the original claim ranges from 0.8% for GPT-5.2 to 40% for DeepSeek 7B, while complete replacement of the original claim is rare overall at 1.5%.",
    "published": "2026-09-07T15:47:29Z",
    "updated": "2026-09-07T15:47:29Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2609.07662"
  },
  {
    "id": "2609.07660",
    "title": "Thermodynamic Cyclic Processes with Markov Samplers in Bayesian Inference",
    "authors": [
      "Heinrich von Campe",
      "Bjoern Malte Schaefer"
    ],
    "abstract": "The concept of Markov chain Monte Carlo (MCMC) cycles, an analogy to cyclic processes in heat engines, is presented in order to examine Bayesian inference problems. In this effort, we develop adaptive ensemble schedulers that allow the tuning of external parameters of a Bayesian canonical ensemble during an MCMC run, realising the MCMC cycles in practice. We run these cycles on different statistical models. As a fundamental insight, we find (both theoretically and in practice) that such systems can produce a non-zero net work output if and only if the considered model is non-Gaussian. As such, they may serve as a measure of non-Gaussianity in Bayesian inference, which we test on an example from supernova cosmology.",
    "published": "2026-09-07T15:46:03Z",
    "updated": "2026-09-07T15:46:03Z",
    "categories": [
      "stat.CO",
      "cond-mat.stat-mech",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.07660"
  },
  {
    "id": "2609.07655",
    "title": "Online Surrogate Repair: Decoupling High-Fidelity Feedback from Search Length in Closed-Loop Discovery",
    "authors": [
      "Xiaotang Feng",
      "Philip Torr",
      "Bruno Andreis"
    ],
    "abstract": "Closed-loop AI scientists can generate candidate designs at low marginal computational cost, whereas reliable feedback may require wet-lab synthesis, characterization, or high-fidelity computation. Addressing this imbalance through custom laboratory automation remains infrastructure-intensive and costly, while replacing new experiments with a fixed surrogate leaves persistent model errors that can be amplified by optimization. We propose \\emph{online surrogate repair} (OSR), a closed-loop algorithm that uses sparse high-fidelity evaluations to update the surrogate throughout a longer agent search conducted primarily with inexpensive surrogate feedback. An acquisition rule selects which designs from the agent's accumulated proposals receive high-fidelity evaluation, and the resulting labels update the surrogate used in subsequent episodes. Across controlled synthetic environments, we demonstrate that improving global surrogate fit does not necessarily reduce maximum regret, whereas Q90-UCB and expected improvement (EI) substantially reduce regret by directing evaluations toward regions that determine the optimizer's decisions. On MADE, controls receiving high-fidelity feedback after every episode require $6.36$--$7.23\\times$ more oracle queries to match Online EI under two LLM orchestrators and $10.27\\times$ more under the non-LLM Chemeleon+MLIP workflow. Online surrogate repair introduces a novel third feedback regime between fixed-surrogate operation and high-fidelity feedback after every episode, separating the frequency of high-fidelity evaluation from the duration of the agent's search.",
    "published": "2026-09-07T15:42:45Z",
    "updated": "2026-09-07T15:42:45Z",
    "categories": [
      "cs.LG",
      "cond-mat.mtrl-sci",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.07655"
  },
  {
    "id": "2609.07629",
    "title": "Open Tabular Insight Extraction: Where Do We Stand, and Where Should We Go?",
    "authors": [
      "Daniel Gomm",
      "Maarten de Rijke",
      "Madelon Hulsebos"
    ],
    "abstract": "Democratizing access to the knowledge held in large corpora of tables such as data lakes is emerging as a central research challenge. Research in this space is advancing and broadening in scope, increasingly supplying the components to satisfy a person's insight need end-to-end. Yet these efforts remain fragmented across communities that frame the problem under their own conventions, such as table question answering, text-to-SQL, and data analysis agents, with works six times as likely to cite within the same task label as across labels. To bring these communities onto common ground, we establish a holistic framework for this pursuit, which we refer to as Open Tabular Insight Extraction (OpenTI). We formalize OpenTI from first principles around the analytical knowledge a person needs, the procedure for deriving it from a corpus of tables, and how well a result serves the person who sought it. In doing so we consolidate frameworks and terminology across information retrieval, natural language processing, machine learning, databases, and human-computer interaction, and apply this grounding in a systematic review and analysis of systems and benchmarks that work towards OpenTI. We find that current systems do not cover the end-to-end scope of OpenTI, mainly focusing on the analysis itself, and that benchmarks are largely unfit for evaluations in an open setting as inputs presuppose knowledge of tables, and validation mechanisms do not match the setup. Finally, we distill a research agenda towards OpenTI systems, evaluation, and interaction paradigms that surface the insights users need. An interactive companion to our paper is available at https://open-tabular-insight-extraction.github.io.",
    "published": "2026-09-07T15:27:58Z",
    "updated": "2026-09-07T15:27:58Z",
    "categories": [
      "cs.IR",
      "cs.AI",
      "cs.CL",
      "cs.DB"
    ],
    "url": "https://arxiv.org/abs/2609.07629"
  },
  {
    "id": "2609.07627",
    "title": "Norms at a Price: Why RL-Based Alignment Can Promise Conditional Compliance at Best",
    "authors": [
      "Kevin Baum",
      "Rūta Binkytė",
      "Felix Jahn"
    ],
    "abstract": "AI agents sometimes act aligned when they infer they are being tested, and differently when not. We argue this is not an anomaly but what current training regimes are structured to select for. Reinforcement-learning-based alignment folds norms and task pursuit into one policy: the system learns its norms from scored behavior, and scoring flattens them. Do not do X is learned as doing X costs something if noticed. On every datum training can produce, a policy that complies only when it might be observed is indistinguishable from one that complies always. The experiment that would tell them apart - scoring unobserved behavior - is a contradiction in terms. Conditional compliance is thus the most that behavioral training can be known to deliver. Agency sharpens the problem: agents operate mostly where no one is watching, and can act on whether they are watched. An iterated pipeline that trains against detected failures selects for passing detection, not for complying. This account unifies alignment faking, sandbagging, and evaluation-aware scheming. And it reorients the remedy: not deeper internalization but architecture, making violations unavailable rather than unchosen.",
    "published": "2026-09-07T15:27:40Z",
    "updated": "2026-09-07T15:27:40Z",
    "categories": [
      "cs.AI",
      "cs.CY",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.07627"
  },
  {
    "id": "2609.07623",
    "title": "Privacy Leakage from a Thousand Words: Millipixel Location Recovery from Dot Maps",
    "authors": [
      "Yuntao Du",
      "Tanishq Pauskar",
      "Hao Wang",
      "Jing Su",
      "Ninghui Li"
    ],
    "abstract": "Dot maps, which visualize individual data points as dots over a geographic region, are widely used across diverse domains to represent spatial patterns in sensitive data. However, the understanding of the privacy risks associated with dot maps remains limited, particularly for maps covering large geographic areas. In this paper, we systematically analyze these risks and present AutoLocate, an automated framework for high-precision location recovery. At its core, AutoLocate exploits anti-aliasing artifacts introduced during map rendering, which inadvertently encode sub-pixel information about dot locations. AutoLocate formulates location recovery as a black-box optimization problem, iteratively refining estimated coordinates by minimizing perceptual discrepancies over these artifacts between the target map and rendered candidate maps. Extensive experiments on both real-world and synthetic datasets, across different attack scenarios and a broad range of map configurations (e.g., map scale, background, resolution), demonstrate the effectiveness of AutoLocate. In particular, it achieves average recovery errors as low as 1 meter (approximately 0.0002 pixel precision) on small-scale maps of the United States, over 200x more accurate than existing approaches. We also propose mitigation strategies and introduce a privacy risk assessment tool to help practitioners evaluate and reduce privacy leakage when publishing dot maps.",
    "published": "2026-09-07T15:25:27Z",
    "updated": "2026-09-07T15:25:27Z",
    "categories": [
      "cs.CR",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.07623"
  },
  {
    "id": "2609.07620",
    "title": "Microcanonical Hamiltonian Monte Carlo and the Helmholtz Theorem",
    "authors": [
      "Heinrich von Campe",
      "Bjoern Malte Schaefer"
    ],
    "abstract": "The recently proposed Microcanonical Hamiltonian Monte Carlo algorithm has not yet been studied in detail from a thermodynamic point of view; this work aims to fill that gap. We demonstrate how thermodynamical state variables and potentials can be derived and thereby demonstrate that the construction of the algorithm formally represents a microcanonical thermodynamic ensemble. In particular, we demonstrate (analytically and numerically) that the algorithm fulfils the Helmholtz theorem, an alternative formulation of the first law of thermodynamics. Furthermore, we construct a new sampling algorithm that extends the original to lower-dimensional inference problems. Finally, we argue that canonical Markov Chain Monte Carlo algorithms are more natural than Microcanonical Hamiltonian Monte Carlo from the thermodynamic and information-theoretic point of view.",
    "published": "2026-09-07T15:24:11Z",
    "updated": "2026-09-07T15:24:11Z",
    "categories": [
      "cond-mat.stat-mech",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.07620"
  },
  {
    "id": "2609.07618",
    "title": "Decentralized Safe Multi-Agent Reinforcement Learning via Predictive Shielding",
    "authors": [
      "Yacine El Yamani",
      "Hanna Krasowski",
      "Elena Vanneaux"
    ],
    "abstract": "Environments are increasingly populated by multiple robots performing independent tasks with limited prior knowledge of each other. Deploying such multi-agent systems presents significant challenges. Specifically, shifts in deployment states compared to training data can lead to poor policy performance and compromised safety. While safety shields exist to mitigate these risks, they are typically reactive, which degrades performance near unseen obstacles,and centralized, limiting their scalability. To address this, we propose a decentralized framework that integrates predictive shielding with model-based finite horizon Q-learning. This approach allows agents to safely adapt their pre-trained policies during deployment. Furthermore, to mitigate livelocks in symmetric scenarios, we introduce a communication- free protocol for conflict resolution",
    "published": "2026-09-07T15:22:16Z",
    "updated": "2026-09-07T15:22:16Z",
    "categories": [
      "eess.SY",
      "cs.AI",
      "cs.MA",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2609.07618"
  },
  {
    "id": "2609.07611",
    "title": "AgentIdeaBench: Benchmarking Scientific Ideation in the Agent Era",
    "authors": [
      "Yunxiang Mo",
      "Tianshi Zheng",
      "Yisen Gao",
      "Rui Wang",
      "Newt Nguyen Kim Hue Nam",
      "Kelvin Kiu Wai Tam",
      "Jiaxin Bai",
      "Yangqiu Song",
      "Ginny Wong",
      "Simon See"
    ],
    "abstract": "Scientific ideation is the capacity to formulate novel and testable hypotheses from scientific evidence, and autonomous AI scientists depend on it. Existing evaluations largely assess it by asking models to generate ideas from a static, curated set of reference papers. That passive setup departs from the retrieval-and-reasoning workflow of modern AI scientists, and it becomes less discriminative as models improve. We introduce AgentIdeaBench, a multidisciplinary benchmark that evaluates scientific ideation under two matched settings, static observation and active exploration. We report matched Static-Active evaluations for 33 LLMs across 40 densely scored subfields spanning five disciplines, using a multidimensional, literature-verified scoring framework whose critics assess originality against retrieved prior art. Active exploration reveals considerably more capability headroom, and that headroom is unevenly distributed across models. Performance scales about twice as fast as under static observation, and the exploration gain is capability-gated, favoring the strongest models over the weakest. The gain reflects better grounding, improving feasibility, clarity, and specificity while leaving measured originality unchanged under our critics. We further explore Scientific World Modeling, a generation-time loop that refines a draft hypothesis through structured thought experiments. It benefits mid-capability models, and its impact diminishes among frontier models that appear to have internalized such reasoning patterns already. AgentIdeaBench gives future work on scientific ideation a measurement basis suited to the agent era.",
    "published": "2026-09-07T15:19:13Z",
    "updated": "2026-09-07T15:19:13Z",
    "categories": [
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2609.07611"
  },
  {
    "id": "2609.06359",
    "title": "AGSA-Net: Abundance-Guided Self-Attention Network for Spectral Unmixing-Aware Hyperspectral Remote Sensing Image Classification",
    "authors": [
      "Nafisa Anjum",
      "Satavisa Dey Borno",
      "Ananna Saha",
      "Mir Faiyaz Hossain",
      "Sifat Momen",
      "Nabeel Mohammed",
      "Shafin Rahman"
    ],
    "abstract": "Hyperspectral image (HSI) classification plays a vital role in remote sensing applications, including agriculture, environmental monitoring, and urban analysis. However, its performance remains challenged by high spectral redundancy, noise sensitivity, and the difficulty of jointly modeling local material composition and long-range spectral dependencies. To address this, we propose AGSA-Net, an abundance-guided self-attention network that explicitly integrates spectral unmixing priors into the classification process. AGSA Net first estimates physically meaningful subpixel abundance maps subject to non-negativity and sum-to-one constraints, regularized by hybrid linear-nonlinear reconstruction decoder. The learned abundances are then used to construct an abundance affinity prior that guides a spectral transformer to emphasize class-discriminative interactions, and the resulting transformer features are fused with compact abundance descriptors for final prediction; in contrast to existing approaches that use abundance as auxiliary or concatenated features. Experiments on Indian Pines, Augsburg, and Berlin demonstrate the benefit of incorporating abundance- guided contextual modeling, particularly in heterogeneous urban scenes. The source code and trained models are available at: https://github.com/nnuvi/AGSA-Net",
    "published": "2026-09-06T03:27:34Z",
    "updated": "2026-09-06T03:27:34Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.06359"
  },
  {
    "id": "2609.06356",
    "title": "MSCA-UNet: Multi-Scale Context and Attention U-Net for Image Segmentation",
    "authors": [
      "Sheng-Wei Chan"
    ],
    "abstract": "U-Net remains a practical baseline for image segmentation because of its simple encoder-decoder structure and skip connections. However, the bottleneck representation is still dominated by a limited set of receptive fields, while decoder features are propagated without explicitly emphasizing the most informative channels and spatial locations. This paper presents MSCA-UNet, a U-Net-based segmentation architecture that combines multi-scale contextual aggregation at the bottleneck with channel-spatial attention refinement in the decoder. The multi-scale module uses parallel atrous convolutions to capture contextual features at different receptive fields, while Convolutional Block Attention Modules (CBAMs) progressively recalibrate decoder features. Under identical experimental settings, the baseline U-Net achieves 96.9% mIoU on a held-out test set. Adding multi-scale context improves mIoU to 97.5%, while attention alone reaches 98.4%. Combining both mechanisms yields 99.1% mIoU, a 2.2 percentage-point improvement over the baseline. Parameter analysis further shows that the attention-only variant adds approximately 0.044M parameters, whereas the multi-scale module contributes most of the additional model capacity. The results support the view that multi-scale context enrichment and attention-based feature refinement provide complementary benefits within a U-Net framework.",
    "published": "2026-09-06T03:16:51Z",
    "updated": "2026-09-06T03:16:51Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.06356"
  },
  {
    "id": "2609.06353",
    "title": "ChildGaze: A Benchmark Dataset for Collaborative Behavior Understanding in Children",
    "authors": [
      "Sindhuja Penchala",
      "Saketh Reddy Kontham",
      "Prachi Bhattacharjee",
      "S. Nima Mahmoodi",
      "Daniel Fonseca",
      "Sareh Karami",
      "Mehdi Garemani",
      "Sudip Mittal",
      "Shahram Rahimi",
      "Noorbakhsh Amiri Golilarz"
    ],
    "abstract": "Understanding collaborative behavior in children is important for analyzing social participation, peer interaction, shared attention, and engagement during play and learning activities. Reliable recognition of these cues can support research in child development, educational analysis, and human-centered computer vision. However, estimating where a child is looking does not necessarily reveal whether the child is actively participating in a shared activity. To support this higher-level analysis, we introduce ChildGaze, a child-centered behavioral annotation dataset built on the ChildPlay video collection [1]. ChildGaze introduces two behavioral labels, collaborative and non-collaborative, assigned independently to each child within a frame. The dataset provides face, left-hand, and right-hand bounding boxes for children and adults and organizes the annotations at the row, person, and frame levels. The current release contains 27 annotated video files, 10,641 frames, and 73,268 body-part annotation rows. Annotation reliability was evaluated on 1,187 frames using independent annotations from two annotators. The collaboration labels achieved 93.16% raw agreement and a Cohen's kappa of 0.8631, while bounding-box annotations achieved an overall mean IoU of 0.808. Baseline experiments with pretrained ViT and Swin Transformer models achieved up to 97.44% child-person-level accuracy and 96.80% frame-level accuracy, respectively. These results show that ChildGaze provides a reliable benchmark for studying collaborative behavior in naturalistic child-adult and peer interactions.",
    "published": "2026-09-06T03:07:13Z",
    "updated": "2026-09-06T03:07:13Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.06353"
  },
  {
    "id": "2609.06343",
    "title": "Radiation, Rotation and Scale Invariant Feature Descriptor for Multimodal Image Matching",
    "authors": [
      "Yuanxin Ye",
      "Tengfeng Tang",
      "Tao Peng",
      "Zhiqiang Han",
      "Jiayuan Li",
      "Mi Wang"
    ],
    "abstract": "Multimodal image matching is a fundamental task for multi-source information fusion. However, geometric distortions and nonlinear radiometric differences (NRD) severely limit performance, especially under radiometric, rotation, and scale variations. To address this issue, we propose a radiation, rotation, and scale invariant (RRSI) feature descriptor. First, a dual-head regional sampling (DHRS) module simultaneously performs Cartesian and Log-Polar sampling on keypoint neighborhoods, retaining spatial structural properties while enhancing robustness to rotation and scale variations. We then jointly encode geometric and radiometric relations between multimodal images in a unified deep feature space, enabling feature encoding, interaction, and fusion across intra-modal, dual-head sampled, and inter-modal regions. Furthermore, we introduce a bidirectional cross-modal generative reconstruction constraint during training. By decoding implicit features into structural patches of the counterpart modality, this mechanism anchors modality-invariant geometric topologies without additional inference overhead. Experiments on optical-infrared and optical-SAR datasets demonstrate highly competitive matching performance and strong robustness to rotation and scale variations. RRSI supports the full rotation range from 0 to 360 degrees and scale factors up to four. Its generalization ability is further validated on multimodal images from computer vision, remote sensing, and medical imaging. The implementation will be made publicly available at https://github.com/yeyuanxin110/RRSI .",
    "published": "2026-09-06T02:32:03Z",
    "updated": "2026-09-06T02:32:03Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.06343"
  },
  {
    "id": "2609.06341",
    "title": "Linear Algebra Foundations of Efficient Attention: A Phase Reversal in Rank Collapse Under SVD Compression",
    "authors": [
      "Anjaneya Teja Sarma Kalvakolanu"
    ],
    "abstract": "Linear algebra provides the framework of concepts (matrix rank, singular value decomposition (SVD), and eigendecomposition) that modern artificial intelligence employs to encode, compress, and propagate information through neural networks. This paper unifies fourteen separate peer-reviewed works analyzing the usage of these techniques in the context of transformer-based foundation model research, focusing on three areas of the topic: derivations and properties of self-attention matrices' output rank, compression methods that purposefully utilize this phenomenon, and the low-rank key-value (KV) cache projection and its semiseparable-matrix duality to linear attention and state-space structured models. We were motivated to conduct this work after observing an open problem in this literature: the interplay of the mentioned compression methods with natural rank collapse of the network. With this paper, we report an original finding that using SVD compression of attention projections actually has the opposite effect on the rank collapse of the network: while it strongly suppresses it at initialization, it accelerates on pretrained models (for GPT-2 124M, GPT-2 Medium 355M, and Pythia-160M) with minimal risk of object aliasing artifacts appearing (verified on all compression ratios) and is consistent across four rank estimation methods. A controlled causal decomposition of the effect in both settings showed that the reason for this behavior can be explained by the choice of the subspace SVD makes when compressing the matrix better than the reduction of the operator norm it achieves, explaining roughly 76% of the effect at initialization and 83% on the pretrained weights, providing a refinement to the calibration-aware compression viewpoint and an explanation of why it outperformed naive SVD truncation.",
    "published": "2026-09-06T02:27:01Z",
    "updated": "2026-09-06T02:27:01Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.NE"
    ],
    "url": "https://arxiv.org/abs/2609.06341"
  },
  {
    "id": "2609.06338",
    "title": "One Shared LoRA Weight for MRI Reconstruction across Acceleration Factors",
    "authors": [
      "Zhiwei Zhao",
      "Weikang Gong",
      "Zhongnian Li",
      "Xinzheng Xu"
    ],
    "abstract": "Accelerated MRI reconstruction recovers images from undersampled k-space. However, different acceleration factors produce distinct artifact patterns. Existing methods often train separate models for each factor, leading to poor cross-factor generalization and high training and storage costs. We propose Shared LoRA, a parameter-efficient framework that freezes the pretrained SHFormer backbone and trains a single shared set of LoRA adapters together with a lightweight gating network. During training, undersampled inputs are generated by randomly sampling acceleration factors and their corresponding sampling masks, enabling the shared adapters to learn reconstruction knowledge across factors. Given the acceleration factor, GateNet generates layer-wise coefficients to dynamically modulate the residual strength of each adapter. Experiments show that Shared LoRA achieves the best or competitive PSNR and SSIM across acceleration factors, while its trainable parameters account for only about 5.3% of the total model parameters. Its performance at lower acceleration factors remains largely unaffected as the jointly trained factor set expands, and it generalizes stably to unseen neighboring factors.",
    "published": "2026-09-06T02:23:24Z",
    "updated": "2026-09-06T02:23:24Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.06338"
  },
  {
    "id": "2609.06320",
    "title": "FrankenReport: Early Exiting in Long-Form Generation Using Expected Value of Computation",
    "authors": [
      "Zhengping Jiang",
      "Gonzalo Ramos",
      "Jina Suh",
      "Shiqian Rachel Ng",
      "Elias Stengel-Eskin",
      "Justin Svegliato",
      "Benjamin Van Durme",
      "Andy Huntington",
      "Sam Thomson"
    ],
    "abstract": "While deep research systems address interactive information-seeking needs impressively, their real-world deployments face latency and resource-consumption challenges. We present FrankenReport, an interface for long-form knowledge-seeking report generation that supports adaptive early exiting per section: it evaluates intermediate outputs during generation and predicts whether further targeted computation will yield significant quality gains. In a simulation study, FrankenReport outperforms random allocation baselines by a large margin (up to 4x) under low budgets and smoothly recovers full-pipeline quality as the budget grows, showing that future quality gains are predictable from intermediate drafts. Through experiments and user studies, we further show that despite varying preferences across users and topics, FrankenReport adapts to simple, natural user feedback as efficiently as methods requiring much costlier supervision such as generated drafts and explicit rationales.",
    "published": "2026-09-06T00:43:52Z",
    "updated": "2026-09-06T00:43:52Z",
    "categories": [
      "cs.HC",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2609.06320"
  },
  {
    "id": "2609.06316",
    "title": "Deep learning from the crowd Fundamentals of morphological galaxy classification",
    "authors": [
      "Luis Enrique Sucar",
      "Carlos del Burgo",
      "Jonathan Serrano-Pérez"
    ],
    "abstract": "Aims. The objective of this work is to adapt a deep neural network model to perform galaxy morphological classification trained from crowd annotations, considering the training scheme, the agreement between the annotators, and the hierarchy. Methods. We use Galaxy Zoo 1 as our experimental testbed and trained a convolutional neural network (CNN) for the automatic classification of galaxies' morphologies. We analyze the impact of the following aspects on the classification accuracy and training efficiency: (i) Training only the last layer vs. training all the network; (ii) Classification with only the CNN vs. considering the hierarchy; (iii) Comparing the models trained with different amounts of data and levels of agreement between the annotators; (iv) Training by stages, transferring knowledge from one model to another; and (v) Combining several models as an ensemble. Results From the experiments, we derive the following results: (i) Training all the layers in the network significantly improves the accuracy (10% increase in exact match), compared to training only the last layer; (ii) There is a tradeoff between the amount of data and the level of agreement between the annotators used for training; (iii) Using the hierarchy can improve accuracy when the amount of training data is reduced; (iv) Training by stages through transfer learning (curriculum learning) produces higher accuracy for limited data; (v) Ensembles can improve accuracy; (vi) Models achieve a low accuracy for the most difficult cases, but, if we consider hierarchical measures, we can derive useful results for upper levels in the hierarchy. An accuracy above 99% is achieved when training all layers of the network and considering a high agreement between the annotators. Conclusions. Training deep learning models from crowd annotations involves additional challenges than learning from hard annotations.",
    "published": "2026-09-06T00:36:30Z",
    "updated": "2026-09-06T00:36:30Z",
    "categories": [
      "astro-ph.GA",
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.06316"
  },
  {
    "id": "2609.06302",
    "title": "CST-WM: A Causally Structured World Model for Embodied Visual Tracking",
    "authors": [
      "Junyi Hu",
      "Shuaihang Yuan",
      "Yi Fang"
    ],
    "abstract": "Embodied visual tracking requires a robot not only to react to the current view, but to choose actions that preserve or recover future evidence of a moving target under ego-motion, occlusion, and distractors. It is therefore a predictive decision problem over future target observability and apparent scale. A central difficulty is a task-specific form of causal hallucination: in action-conditioned prediction, a model can exploit the strong correlation between robot control and target-related observations by hallucinating a direct causal effect from the current action to target evidence, rather than letting action influence that evidence only through robot motion and the resulting observation change. The shortcut yields plausible futures with the wrong semantics for tracking-oriented planning and re-acquisition. We propose CST-WM, a causally structured world model that decomposes the latent state into target-evidence, robot, and observation branches and factorizes the transition so that direct action injection into the target-evidence branch is blocked, while action remains available to robot motion and observation updates. Combined with rollout-based model-predictive control, CST-WM supports both stable following and temporary target re-acquisition in one planning framework. On EVT-Bench and Habitat 3.0, covering standard tracking, target-loss recovery, and cross-dataset transfer, it improves following quality, distance-range control, safety, and re-acquisition over reactive and world-model baselines; offline diagnostics show better multi-step rollout fidelity, stronger planning-value consistency, and substantially reduced direct action leakage. For embodied visual tracking, future prediction alone is not enough: the predictive structure itself must align with how target evidence enters planning.",
    "published": "2026-09-05T23:24:32Z",
    "updated": "2026-09-05T23:24:32Z",
    "categories": [
      "cs.CV",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2609.06302"
  },
  {
    "id": "2609.06296",
    "title": "SignDino: Self-Supervised Sign Language Representation Learning via Temporal-Axis Self-Distillation",
    "authors": [
      "Junyi Hu",
      "Zhewen He",
      "Haomian Huang",
      "Zhenhua Li",
      "Zhifei Li",
      "Yi Fang"
    ],
    "abstract": "Self-supervised sign language representation learning must model two properties not central to natural-image SSL: signs are produced by a small set of anatomically distinct articulators, and their meaning depends on the temporal organisation of those articulators. We introduce SignDino, a self-supervised sign-video encoder that moves the DINOv3 student--teacher recipe from the spatial domain of image crops to the temporal domain of tracked sign streams. Each video is decomposed into left-hand, right-hand, and face streams by a detector-first YOLOv8n+ByteTrack pipeline. A frozen DINOv3 ViT-B/16 embeds each per-frame anatomical crop, while lightweight temporal Transformers, not the image backbone, form the student and EMA teacher. They are trained by temporal DINO self-distillation, frame-level masked-token prediction in the style of iBOT, KoLeo feature spreading, and Gram anchoring of the frame-to-frame similarity structure. This design keeps strong image-level visual primitives fixed and learns only how articulator states evolve across time. We evaluate on sign-to-English translation, isolated sign recognition, and fingerspelling detection benchmarks. Across these tasks, SignDino provides a strong public self-supervised representation and shows competitive or state-of-the-art performance under matched downstream evaluation.",
    "published": "2026-09-05T23:08:37Z",
    "updated": "2026-09-05T23:08:37Z",
    "categories": [
      "cs.CV",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2609.06296"
  },
  {
    "id": "2609.06289",
    "title": "Steering Geometry: Validating Human Value Geometry in LLM Steering Space",
    "authors": [
      "Mohammad Mahdi Abootorabi",
      "Armin Saghafian",
      "Ali Bazshoushtari",
      "Hamid Rezaei",
      "EunJeong Hwang",
      "Vered Shwartz",
      "Parvin Mousavi",
      "Purang Abolmaesumi"
    ],
    "abstract": "As large language models (LLMs) are increasingly deployed in alignment-sensitive contexts, activation steering has emerged as a lightweight, inference-time alternative to fine-tuning methods (e.g., RLHF, DPO) for behavioral control. However, existing work typically validates steering on isolated behaviors, leaving it unclear whether steering vectors encode coherent semantic structure or merely exploit behavior-specific shortcuts. We investigate whether the latent geometry of LLM steering vectors reflects theory-specified structure in human values and morality. Using Schwartz's Theory of Basic Human Values as our primary fine-grained framework, we introduce a 26K-sample benchmark covering 20 human values and analyze distribution-driven methods (e.g., CAA, SphericalSteer, ODESteer) and behavior-centric approaches (e.g., COLD-Steer, BiPO) across diverse model families and sizes. We find that distribution-driven methods recover human value topologies aligned with theoretical predictions (Spearman $ρ$ up to 0.51, $p < 10^{-13}$). In contrast, behavior-centric methods achieve comparable steering performance but show little correlation with the expected value geometry. Geometric fidelity improves with model scale but drops after instruction tuning. Finally, better geometric alignment also leads to more human-consistent transfer across values: steering one value correctly lifts compatible values and suppresses opposing ones. Code and data are available at: https://github.com/DeepRCL/Steering_Geometry.",
    "published": "2026-09-05T22:55:48Z",
    "updated": "2026-09-05T22:55:48Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.06289"
  },
  {
    "id": "2609.06288",
    "title": "Object-Aware Background-Controlled Editing via Weighted Velocity Guidance",
    "authors": [
      "Wuji Wang",
      "Yue Wu",
      "Chenhao Yi",
      "Shuhui Wang"
    ],
    "abstract": "Training-free image editing steers diffusion or flow-matching generative models at inference time by modifying prompt-conditioned denoising velocities. Existing velocity-based editors often apply prompt-induced residuals globally over the latent space and rely on the model to localize semantic changes implicitly. For object-centric edits, these residuals are rarely zero outside the target object, so small non-target components can accumulate during multi-step integration, causing background drift and unstable object boundaries. We propose Object-Aware Velocity Control (OAVC), a training-free framework that introduces object-level control into the velocity-integration process. OAVC decouples where semantic residuals are allowed to act from how they are injected into the dynamics. It constructs a background-anchored reference interface under the source prompt and then performs object-localized safe semantic injection under the target prompt. A constrained injection operator suppresses drift-inducing velocity components, while time-adaptive spatial weighting stabilizes the transition near object boundaries. OAVC requires no training or modification of pretrained model parameters. Experiments on object-centric image and video benchmarks with image and video rectified-flow backbones show improved background preservation, structural fidelity, boundary stability, and temporal consistency while retaining effective localized editability.",
    "published": "2026-09-05T22:53:58Z",
    "updated": "2026-09-05T22:53:58Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.06288"
  }
];

window.PAPER_DATA_UPDATED_AT = "2026-11-09";
window.PAPER_ITEMS = [
  {
    "id": "2611.09894",
    "title": "Video-Coder: Reinforcing Agentic Coding for Video Generation",
    "authors": [
      "Chaoyang Wang",
      "Sicheng Gao",
      "Junan Hu",
      "Kunyang Li",
      "Dongyang Chen",
      "Yiyang Zhou",
      "Huaxiu Yao",
      "Yong Jae Lee",
      "Radu Timofte",
      "Yuzhang Shang"
    ],
    "abstract": "Recent years have witnessed remarkable progress in video generation in terms of visual quality and temporal consistency. However, generating videos with precise spatial structure, coherent motion dynamics, and controllable scene composition remains challenging. In this paper, we introduce Video-Coder, the first attempt to train a code-driven video generation agent, which autonomously writes and executes code to construct a dynamic 3D scene (Draft Video) that provides structure and motion signals to downstream video generators. To support this paradigm, we design a dedicated data pipeline and curate two high-quality datasets, Video-Coder-SFT-6k and Video-Coder-RL-2k, which contain diverse prompts and ground-truth reference videos. We further develop the Video- Coder Harness, a unified interactive environment integrating code execution, 3D scene rendering, and execution feedback for agent training and inference. We then train Video-Coder with SFT fol- lowed by harness-native agentic reinforcement learning with dual reward feedback, which combines execution-based and video-based rewards. Additionally, we design an annealing training strategy that gradually reduces the execution reward over time, allowing the model to rely more on the video reward in the later training stages. Experiments show that Video-Coder achieves significant gains, improving Minimax-H3 by approximately 7 points on PhyGenBench and 24 points on VBench-2.0. We hope this work can serve as an open foundation for coding agents in video generation, and we fully open-source our data, models, and code",
    "published": "2026-11-06T18:59:57Z",
    "updated": "2026-11-06T18:59:57Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.09894"
  },
  {
    "id": "2611.09892",
    "title": "On Agentic Manipulation Policies",
    "authors": [
      "Chen Chen",
      "Omid Bagherieh",
      "Naveen Nikamanth Appiah Balaji",
      "Jesse T. Gonzalez",
      "Negin Heravi",
      "Fahad Islam",
      "Xueting Li",
      "Jean-Baptiste Regli",
      "Kejia Ren",
      "Petr Švec",
      "David J. Yoon",
      "Matthias Müller",
      "Vladlen Koltun"
    ],
    "abstract": "Recent work on robot manipulation has focused on specialist policies trained on demonstrations. We show that generalist AI models can control manipulators more reliably than specialist policies such as vision-language-action models (VLAs) and world-action models (WAMs). We systematically analyze agentic manipulation policies (AMPs), in which a generalist AI model commands the manipulator directly, adapting its actions as the task unfolds. We present AMP1, a reference harness that runs unchanged across single-arm, bimanual, and mobile manipulation. AMP1 achieves state-of-the-art results on the RoboLab-120 and CaP-Gym benchmarks, with no demonstrations or task-specific training. On RoboLab-120, AMP1 reaches an 85.6\\% success rate zero-shot, compared to 49.2\\% and 42.9\\% for leading VLA and WAM policies. The agent succeeds zero-shot in 104 of 108 real-world trials spanning twelve tasks and three robot instances, reducing failure rates by 20x and 15x relative to strong VLA and WAM baselines. The basic harness supplies no grasping, pushing, or placing skills; the agent develops its own strategies, such as searching for hidden objects, using objects as tools, and calibrating its cameras. With the addition of a persistent memory store, the agent can also learn from experience: an augmented harness with a memory representation that is carried across episodes lowers the failure rate on RoboDojo bimanual manipulation tasks by 4.6x relative to zero-shot deployment. Our analysis suggests that AMPs are substantially more general and robust than specialist manipulation policies, providing a promising foundation for robot manipulation.",
    "published": "2026-11-06T18:59:34Z",
    "updated": "2026-11-06T18:59:34Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.09892"
  },
  {
    "id": "2611.09891",
    "title": "CPU-ARC: Agentic Reasoning Caching for on-CPU Reasoning Reuse",
    "authors": [
      "Peter Belcak",
      "Greg Heinrich",
      "Saurav Muralidharan",
      "Shizhe Diao",
      "Pavlo Molchanov"
    ],
    "abstract": "Large language models reinvent the wheel all the time. They conflate task-solving with the execution of the solutions, which forces them to solve every problem from scratch. We show that once a task has been reasoned through, the application of its solution to a new problem instance can be done very efficiently and with little involvement from language models. We introduce agentic reasoning caching, a method for constructing robust CPU-executable agentic reasoning caches (ARCs) from LLM reasoning traces. ARCs show on-par performance with frontier LLMs across a range of difficult mathematical and scientific tasks, are fully explainable, continually trainable, robust to input perturbations, and 16-291x cheaper to invoke than the source model.",
    "published": "2026-11-06T18:58:50Z",
    "updated": "2026-11-06T18:58:50Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.09891"
  },
  {
    "id": "2611.09882",
    "title": "FlowMoP: Stochastic Multi-Person Motion Prediction",
    "authors": [
      "Aadya Agrawal",
      "Ho Kei Cheng",
      "Alexander Schwing"
    ],
    "abstract": "Predicting the future motion of multiple people is inherently stochastic: the same observed history admits many plausible continuations depending on intent, coordination, and social context. Yet the dominant paradigm in multi-person 3D motion prediction remains deterministic, with existing methods producing a fixed number of outputs per agent. In contrast, we present a conditional flow matching framework that jointly generates diverse future motions for multiple agents, modeling both global trajectories and root-relative poses. A B-spline reparameterization compresses the generative state space while enforcing temporal smoothness, and a dual-stream transformer conditions each agent's predictions on observed neighbor motion for interaction-aware forecasting. Our method achieves state-of-the-art performance on CMU-Mocap (UMPM) and 3DPW, outperforming deterministic baselines on joint position error, pose error, and final displacement error despite producing a full predictive distribution. We additionally establish the first motion prediction baseline on WorldPose, a large-scale professional soccer dataset, where social conditioning demonstrably concentrates predictive uncertainty along interaction-constrained directions.",
    "published": "2026-11-06T18:56:41Z",
    "updated": "2026-11-06T18:56:41Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.09882"
  },
  {
    "id": "2611.09880",
    "title": "ZeoBench: A Benchmark for Self-Supervised Learning on 3D Zeolite Representations",
    "authors": [
      "Aaron Sun",
      "Yachan Liu",
      "Ping Yang",
      "Peng Bai",
      "Subhransu Maji"
    ],
    "abstract": "Zeolites are an important class of porous crystalline materials with broad applications in gas storage, separations, and catalysis. Although hundreds of thousands of experimentally realized and hypothetical zeolite structures are known, identifying materials optimized for a target application remains challenging because property labels are expensive to obtain and available only for limited structure-molecule pairs. While prior work has demonstrated that 3D neural representations can predict zeolite properties effectively, it remains unclear which representation-learning strategies are most effective in the low-data regime relevant to materials discovery. We present ZeoBench, a benchmark for self-supervised learning on dense 3D representations of all-silica zeolites, and evaluate the resulting features on six existing downstream adsorption-property prediction tasks, across a range of training set sizes. Our study compares self-supervised 3D pretraining on volumetric zeolite data, adaptations of image-pretrained 2D ConvNets and vision transformers to 3D via multiview and channel-inflation strategies, and 3D ConvNets pretrained on out-of-domain volumetric datasets, alongside hand-crafted descriptors and supervised baselines. Using our pretraining and evaluation framework, we find self-supervised 3D representations outperform existing methods and achieve state-of-the-art performance across both in-domain label regimes and for the unseen domain of metal organic frameworks. Learned representations consistently outperform hand-crafted descriptors, and convolutional architectures are generally more effective than vision transformers in this setting. These results establish ZeoBench as a practical benchmark for 3D representation learning in zeolites and provide guidance for data-limited adsorption property prediction.",
    "published": "2026-11-06T18:55:34Z",
    "updated": "2026-11-06T18:55:34Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.09880"
  },
  {
    "id": "2611.09878",
    "title": "Graded convolutional networks: scale invariance without the scale and robustness to unknown blur",
    "authors": [
      "Tanush Shaska"
    ],
    "abstract": "The Gaussian jet of an image is a graded vector space: a dilation by $λ$ multiplies derivatives of order $k$ by $λ^{-k}$. Local graded convolutions are exactly homogeneous differential operators, and a local feature is dilation-invariant if and only if it factors through the scale-normalized jet or, without the scale, through the retraction onto the weighted sphere of the grading. Under unknown Gaussian blur the retraction changes only by a change of scale, whereas the scale-normalized jet acquires a grading factor that no radial normalization removes. At the zero jet the retraction separates image families that radial normalizations and continuous classifiers cannot. Networks built on the retraction are universal for invariant features. On MNIST such a network keeps 88.4% accuracy under a two-pixel blur, against 66.2% for the same network on scale-normalized derivatives; in Lindeberg's Gaussian derivative network the retraction raises accuracy at that blur from 91.5% to 95.1%.",
    "published": "2026-11-06T18:54:03Z",
    "updated": "2026-11-06T18:54:03Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.09878"
  },
  {
    "id": "2611.09872",
    "title": "On the Reliability of Majority-Vote Pseudo-Labels in Test-Time Reinforcement Learning",
    "authors": [
      "Haoyu Wang",
      "Ru Wang",
      "Yuanyuan Wang",
      "Jiaxian Guo",
      "Mingming Gong"
    ],
    "abstract": "Test-time reinforcement learning (TTRL) adapts pretrained language models to unlabeled target-domain data using self-generated pseudo-labels, whose reliability remains poorly understood. We analyze majority-vote supervision for TTRL with online Direct Preference Optimization (DPO) and decompose its error into population-majority bias and prompt-dependent finite-rollout variation. Because population-majority bias is generally unidentifiable without external supervision, we focus on mitigating the downstream effects of finite-rollout variation. We propose \\emph{Prompt-Conditional Distributionally Robust DPO (PC-Dr.DPO)}, which conditions within-prompt robust reweighting on observed vote reliability to make updates from sampling-sensitive prompts more conservative. We further introduce a cache-based mechanism to reduce self-supervised forgetting during online adaptation. Across six mathematical and knowledge-intensive reasoning benchmarks and five model backbones, PC-Dr.DPO matches or outperforms the strongest TTRL baseline in 24 of 30 settings.",
    "published": "2026-11-06T18:49:02Z",
    "updated": "2026-11-06T18:49:02Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.09872"
  },
  {
    "id": "2611.09866",
    "title": "GRAC: Graph-Based Retrieval-Augmented Captioning for Surgical Scene Description",
    "authors": [
      "Rochak Dhakal",
      "Chen Zhao",
      "Soup Cobb",
      "Xin Qian",
      "Xiaofeng Yang",
      "Weihua Zhou"
    ],
    "abstract": "Purpose: Surgical operative reports support procedural documentation, surgical training, performance assessment, and workflow review. However, extracting meaningful information often requires extensive manual review and clinical expertise. Automated surgical scene descriptions could reduce this burden by leveraging recurring surgical activities and prior knowledge. Methods: We propose GRAC (Graph-Based Retrieval-Augmented Captioning), a framework that represents surgical scenes as graphs capturing relationships among instruments, actions, and anatomical structures. Given an input scene graph, GRAC learns to retrieve relevant graph-caption pairs from training data. It compares instrument-tissue interactions between retrieved examples and the input scene, using comparison features to condition retrieved-caption representations during generation. Results: On the EndoVis-18 benchmark, GRAC achieved a CIDEr-D of 5.88, compared with 4.23 for SGT and 3.36 for the strongest conventional Transformer baseline. Exact instrument-action-target triplet-set accuracy reached 52.6%, compared with 32.7% for SGT and 26.2% for the strongest conventional baseline. These results demonstrate improvements in language quality and factual agreement. On TORS, GRAC achieved a CIDEr-D of 5.06, compared with 3.80 for the strongest baseline. Conclusion: GRAC demonstrates that combining structured surgical scene representations with retrieved examples improves surgical scene captioning and produces more contextually meaningful descriptions.",
    "published": "2026-11-06T18:47:23Z",
    "updated": "2026-11-06T18:47:23Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.09866"
  },
  {
    "id": "2611.09864",
    "title": "Grasp-TAGS: Task-Aware Grasp Selection via Critic Distillation for Prehensile Loco-Manipulation",
    "authors": [
      "Xun Tu",
      "Minghao Zou",
      "Karthik Desingh"
    ],
    "abstract": "Loco-manipulation, which requires mobile manipulators to coordinate locomotion and manipulation over long horizons, is a key capability for large-object rearrangement in applications such as service robotics and warehouse automation. Despite recent progress, reliably executing these tasks remains challenging because performance depends on complex robot-object and object-environment interaction dynamics. Existing approaches address this challenge either through model-based methods, which often require accurate dynamics models, or through learning-based methods, which reduce this requirement but typically assume a fixed or predefined initial grasp. However, different geometrically stable grasps can lead to substantially different downstream manipulation performance. Therefore, we propose Grasp-TAGS, a task-aware grasp selection framework for goal-conditioned large-object rearrangement. We train a unified PPO-based reinforcement learning policy across multiple initial grasp configurations and distill the learned critic into a lightweight grasp utility network that ranks candidate grasps using only the candidate grasp configuration and goal information. At inference time, we select the grasp with the highest predicted downstream utility for the downstream policy to complete the task, before even making a contact. Experiments demonstrate that Grasp-TAGS improves rearrangement success over both fixed single-grasp policies and random grasp selection, achieving an average success rate of 89.84% compared with 79.87% for the best-performing single-grasp policies, an improvement of 9.97 percentage points. Grasp-TAGS also reduces final orientation errors across all evaluated objects. For more qualitative results, refer to the supplementary webpage: https://rpm-lab-umn.github.io/Grasp-TAGS-web-page/",
    "published": "2026-11-06T18:44:33Z",
    "updated": "2026-11-06T18:44:33Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.09864"
  },
  {
    "id": "2611.09863",
    "title": "Flow-Guided Target-Space Alignment via Path Consistency",
    "authors": [
      "Ruizhi Yuan",
      "Zeqiu Yu",
      "Wei Gao",
      "Wei Chen",
      "Xiwei Tang",
      "Lu Tang"
    ],
    "abstract": "Many multimodal alignment problems require mapping a source modality into a fixed space defined by a target modality, where the target space is not merely an intermediate embedding but is used directly for downstream analysis. In this setting, successful alignment should preserve both the global structure of the target distribution and the instance-level correspondence observed in paired source--target training data. Existing objectives typically address only part of this goal: contrastive losses encourage relative similarity, distribution-matching losses improve marginal agreement, and pointwise regression fits each source sample to its paired target without explicitly modeling target-space path geometry. We propose FlowAlign, a flow-guided target-space alignment method that repurposes conditional flow matching as a training-time alignment signal rather than an inference-time transport model. FlowAlign uses the learned flow field to guide the alignment of source-side representations with the fixed target space, encouraging them to preserve paired correspondence while remaining compatible with the global target-space structure. We further provide theoretical analysis showing how FlowAlign helps improve paired correspondence by controlling endpoint accuracy and capturing local target-space geometry. Experiments on synthetic data, paired single-cell multiome benchmarks, and image--text alignment demonstrate that FlowAlign improves instance level correspondence while preserving target-space structure across different modality settings.",
    "published": "2026-11-06T18:44:08Z",
    "updated": "2026-11-06T18:44:08Z",
    "categories": [
      "cs.AI",
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.09863"
  },
  {
    "id": "2611.09854",
    "title": "Super-resolved digital terrain models for GEDI geolocation correction: agreement with airborne LiDAR DTM-based corrections at the beam level, not the footprint level",
    "authors": [
      "Natsuki Yuda",
      "Shinichiro Shirota"
    ],
    "abstract": "The Global Ecosystem Dynamics Investigation (GEDI) mission measures three-dimensional forest structure with a LiDAR aboard the International Space Station. GEDI observations have geolocation errors of about 10 m, which cause misalignment with other remote sensing data and reduce the accuracy of downstream tasks. Matching GEDI ground elevations against high-resolution digital terrain models (DTMs) from airborne LiDAR is one way to correct these errors, but such DTMs exist in few regions. To widen this method's applicability, we super-resolved a more widely available low-resolution DTM and used it for the matching. Our question is whether a super-resolved DTM yields the same correction as a 1 m-resolution airborne LiDAR DTM and, if not, why. In steep forests of western Japan, we super-resolved an existing 10 m-resolution DTM to 1 m. Improving its accuracy required fusion with a global 30 m-resolution DTM from a different source. Using the resulting DTM, we corrected GEDI observation positions first by a single shift per ground track, then per observation. For most tracks, the shifts nearly matched those from the airborne LiDAR DTM, likely because DTM errors canceled out across many observations. Per-observation corrections, however, did not match. At a single observation, the error does not cancel out and is too large for the correction. This error likely originates mainly from the input DTM. Therefore, even without a 1 m-resolution DTM, a roughly 10 m-resolution DTM, fused with a global DTM and super-resolved to 1 m, should yield track-wise corrections nearly matching those from a 1 m-resolution DTM.",
    "published": "2026-11-06T18:36:50Z",
    "updated": "2026-11-06T18:36:50Z",
    "categories": [
      "eess.IV",
      "cs.CV",
      "physics.geo-ph"
    ],
    "url": "https://arxiv.org/abs/2611.09854"
  },
  {
    "id": "2611.09851",
    "title": "Health-System-Wide Mapping of Demographic Information in Routine Clinical Histopathology",
    "authors": [
      "Shengjia Chen",
      "Ruchika Verma",
      "Kevin Clare",
      "Paula Restrepo",
      "Jannes Jegminat",
      "Eugenia Alleva",
      "Kuan-lin Huang",
      "Aryeh Stock",
      "Brandon Veremis",
      "Thomas Fuchs",
      "Gabriele Campanella"
    ],
    "abstract": "The extent to which demographic-associated information is detectable across organs and disease states in routine clinical histopathology remains unclear. Here, we analyzed 1.3 million hematoxylin and eosin whole-slide images from 257,322 patients across 25 organs, using pathology foundation-model representations and multiple-instance learning to systematically map information associated with sex, age group, and self-reported race. Across 69 organ-demographic combinations, demographic attributes were broadly recoverable, with pan-organ mean AUROCs of 0.828 for sex, 0.733 for age group, and 0.662 for self-reported race, and substantial variation across organs. Demographic-class balancing produced relatively small changes in performance, while evaluation within diagnosis-text clusters showed modest attenuation. Under training with diagnosis-based grouping, demographic-associated signals remained detectable across multiple organs, including sex in gastric tissue (AUROC 0.865), age group in breast (0.816), and self-reported race in skin (0.728). Literature-guided analysis of these settings generated candidate histomorphological and contextual explanations for further investigation. Together, these findings provide a systematic map of demographic-associated information in routine histopathology, informing investigations of its sources, assessments of potential shortcut learning, and the development of more interpretable computational pathology models.",
    "published": "2026-11-06T18:34:51Z",
    "updated": "2026-11-06T18:34:51Z",
    "categories": [
      "cs.CV",
      "q-bio.QM"
    ],
    "url": "https://arxiv.org/abs/2611.09851"
  },
  {
    "id": "2611.08626",
    "title": "LLM-Based Feature Extraction for Multi-Criteria Inventory Classification",
    "authors": [
      "Humza Akhtar",
      "Rami Pinto"
    ],
    "abstract": "E-commerce supply chains generate large volumes of customer feedback and operational data that remain underutilized in inventory management. Traditional inventory classification techniques such as ABC analysis rely primarily on annual dollar usage, while multi-criteria inventory classification (MCIC) methods extend this but still depend on structured quantitative data and do not utilize unstructured information available in modern supply chains. This paper proposes an LLM-based feature extraction approach that transforms unstructured sources such as customer reviews into quantitative features using vector embeddings and LLM-generated evaluation criteria. The enriched feature set is incorporated into an MCIC framework based on the Hadi-Vencheh model. Experimental results show measurable reclassification effects when customer sentiment signals are included, demonstrating that integrating unstructured data into MCIC can enhance inventory prioritization.",
    "published": "2026-11-05T19:17:41Z",
    "updated": "2026-11-05T19:17:41Z",
    "categories": [
      "cs.AI",
      "cs.DB",
      "cs.ET"
    ],
    "url": "https://arxiv.org/abs/2611.08626"
  },
  {
    "id": "2611.08615",
    "title": "s$^3$: Simple Scaling of Swarms via Cooperative Multi-agent RL",
    "authors": [
      "Kunal Jha",
      "Gonçalo Faria",
      "Shuyue Stella Li",
      "Scott Geng",
      "Faeze Brahman",
      "Noah A. Smith",
      "Yulia Tsvetkov",
      "Max Kleiman-Weiner",
      "Natasha Jaques"
    ],
    "abstract": "Groups can achieve more than individuals in the same amount of time, but only if their members coordinate: they must decide who works on what and what to share. However, this organization in multi-agent systems today usually comes from arbitrary, static harnesses designed a priori without adapting to agent behaviors or task specifications. We ask whether agents can instead learn to organize themselves. We introduce s$^3$, the first multi-agent reinforcement learning method in which agents decide for themselves how long to work alone and when to share findings or read teammates' messages, with no predefined organization or roles. Our s$^3$ agents learn to take different approaches, read each other's work, exhibit emergent roles that complement each other in the swarm, and generalize to bigger teams. We study both coordination, where agents must combine private information, and parallel exploration, where sharing discoveries can make search more efficient. With matched training and inference budgets, s$^3$, swarms evaluated with twice as many agents as in training solve over 25$\\times$ more coordination problems than the strongest baseline, and in exploration, communicating agents reduce repeated work by nearly 50% and outperform best-of-N by up to 9.4 percentage points. Rather than being designed in advance, s$^3$ enables organization to emerge from a shared goal. This opens the door to capable systems built from many models that learn to work together.",
    "published": "2026-11-05T19:07:15Z",
    "updated": "2026-11-05T19:07:15Z",
    "categories": [
      "cs.MA",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.08615"
  },
  {
    "id": "2611.08613",
    "title": "NormGym: Evaluating Normative Competence through Social Interaction",
    "authors": [
      "Binze Li",
      "Zihuan Zhang",
      "Seokhyun Baek",
      "Gillian K. Hadfield",
      "Tianmin Shu"
    ],
    "abstract": "Normative competence, the ability to infer socially enforced expectations from interaction and adjust behavior accordingly, is essential for agents operating in unfamiliar human communities. Yet existing evaluations largely test whether agents can recognize or apply norms they may already know, rather than whether they can acquire previously unknown norms from social interaction. We introduce NormGym, an interactive benchmark for normative competence in which a newcomer must infer a hidden, arbitrary norm while pursuing its own task in a multi-agent community. Success requires distinguishing what is possible from what is permitted, inferring the norm from observed behavior and sanctions, and applying it in new situations. NormGym contains diverse norms and distinct environments, allowing systematic evaluation of current agents, including large language model (LLM) agents. We find that normative competence remains challenging: the strongest evaluated LLM achieves a joint task-and-compliance success rate of 55.3%. Our analysis reveals that models can sometimes revise their behavior following sanctions for their own actions, but struggle to use other agents' behavior and the sanctions they receive to infer the underlying norm. We further find that fine-tuning models may be insufficient to improve normative competence. These results suggest that current models lack a robust, transferable capability for acquiring normative knowledge through social interaction.",
    "published": "2026-11-05T19:05:40Z",
    "updated": "2026-11-05T19:05:40Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.08613"
  },
  {
    "id": "2611.08610",
    "title": "InstaGen: Group-Shared Importance Sampling for Fast Video Generation",
    "authors": [
      "Kislay Aditya Oj",
      "Kumar Krishna Agrawal",
      "Sri Surya Varma Datla",
      "Aditya Desai"
    ],
    "abstract": "Diffusion Transformers (DiTs) are the dominant architecture for video generation, but their quadratic attention complexity results in substantial computational cost and latency. Permuted block-sparse attention (PBSA) offers a promising approach to reducing this cost by selectively computing blocks of a semantically permuted attention matrix. However, existing approaches typically select only the top few key blocks for each query block, following a top-$p$ paradigm. We find that top-$p$ selection can be highly sample inefficient in high-entropy attention regimes, which are common in video generation. In these regimes, we show that sampling can provide substantially better approximations under the same computational budget. More generally, we cast block selection as importance sampling, where the top-scoring keys form an exact set that is computed in full and the remaining keys are represented by a sample drawn in proportion to their estimated attention and reweighted by inverse sampling probability. Building on this formulation, we present InstaGen, which can be parameterized by any PBSA method: it replaces the method's block selection with an exact set plus a weighted sample. Each query cluster draws one sample shared by all its queries, so the sampled keys form blocks amenable to efficient GPU execution. In this paper, we take the SVG family of PBSA methods and show that, on Wan2.1-T2V-1.3B and Wan2.1-T2V-14B, InstaGen parameterized by SVG2 improves PSNR over SVG2 by 3.4 dB and 2 dB, respectively, at matched attention density, and by 1.6 dB and 2.2 dB at matched wall-clock time. On Wan2.1-T2V-14B, InstaGen also beats SVG-EAR by 1.1 dB PSNR at nearly the same density while running faster (1.65x against 1.48x over dense).",
    "published": "2026-11-05T19:04:14Z",
    "updated": "2026-11-05T19:04:14Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.08610"
  },
  {
    "id": "2611.08486",
    "title": "Do You Miss the Nights We Spent Crafting Figures? Rethinking Teaser and Framework Figures in the Age of Generative AI",
    "authors": [
      "Xiaoqi Zhao",
      "Youwei Pang",
      "Kailai Zhou"
    ],
    "abstract": "Scientific figures give research ideas a visual form through choices of abstraction, composition, and emphasis. Generative AI offers new ways to realize these choices, raising questions about explanatory clarity and purposeful visual expression. We examine these questions through a visual retrospective of 371 motivation and framework figures from 200 papers. The corpus comprises a quota-based main sample of 160 papers spanning four temporal periods and a separate purposive style-contrast sample of 40 papers. A single multimodal judge evaluates six dimensions of communication and design, with three repeated judgments per figure. We attempt source-constrained revisions of all 371 figures, of which 369 pass the recorded fidelity checks. Original-figure ratings show no uniform decline across periods. Revisions increase mean clarity ratings by 0.428 points and decrease aesthetic coherence ratings by 0.111 points on a five-point scale. Gains in the six-dimension average are larger for main-sample motivation figures than for frameworks. Case analyses show that added explanation can clarify comparisons while leaving typographic hierarchy and visual economy unresolved. These model-based findings support researcher-led design, with AI assisting exploration and authors retaining responsibility for explanatory purpose, composition, and scientific relationships. The accompanying atlas and evaluation records are available at https://ntu-ai4x.github.io/Rethinking_Figures/index_en.html.",
    "published": "2026-11-05T18:59:33Z",
    "updated": "2026-11-05T18:59:33Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.08486"
  },
  {
    "id": "2611.08485",
    "title": "Where and Why is Grounded Reasoning Useful?",
    "authors": [
      "David Yan",
      "Le Xue",
      "Forrest Huang",
      "Qiuyi Zhang",
      "Dustin Tran",
      "Andrew M. Dai",
      "Yinfei Yang"
    ],
    "abstract": "Grounded reasoning, where a model outputs text coordinates of relevant locations in chain-of-thought reasoning, is a common strategy for solving complex visual reasoning problems. However, the benefits and limitations of grounded reasoning are understudied. We study where and why grounded reasoning is most useful. To do so, we introduce a chain-of-thought analysis method to measure how much a model uses its outputted grounding in its thinking trace and perform a detailed ablation study of a grounded reasoning training recipe. We find that grounded reasoning improves counting but shows no significant gain over baselines without coordinate grounding across a wide range of spatial reasoning and perception benchmarks. Using several synthetic tasks, we show that grounded reasoning is most useful when a task requires undescribable references, which are visual concepts that are difficult to describe in language. However, we observe that many existing visual reasoning benchmarks are solvable with only describable text references. To close this gap, we introduce BrickVision, a new benchmark that requires undescribable visual references to solve.",
    "published": "2026-11-05T18:59:32Z",
    "updated": "2026-11-05T18:59:32Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.08485"
  },
  {
    "id": "2611.08483",
    "title": "SwarmEvolve: Latent Agent Swarms for Evolutionary Discovery and Optimization",
    "authors": [
      "Qile Jiang",
      "George Em Karniadakis"
    ],
    "abstract": "LLM-guided evolutionary search uses AI agents to improve programs for mathematical and computational problems by iteratively refining solutions and combining high-scoring methods. However, the process is often slow because the LLM generates a long textual chain of thought for each round and must repeat this generation many times to maintain population diversity. We present SwarmEvolve, a framework in which hundreds of low-cost agents per round work in swarms, reason in latent space without decoding to text, and share information by passing KV caches. Each swarm studies the problem from a different angle. A novelty filter keeps the most distinct agent ideas by directly measuring the distances between the agents' hidden state vectors. Crossover of ideas happens naturally in latent space, as a summarizer agent receives the combined KV caches of all swarm members. On 21 problems in mathematical discovery and scientific computing, SwarmEvolve gets the highest average score and needs a median of only 3 to 8 minutes to reach the best scores that other state-of-the-art frameworks reach in 60 minutes. On several problems, SwarmEvolve with Qwen3 8B improves on the solutions that AlphaEvolve first found with frontier LLMs. Our work shows that agent swarms that communicate in latent space offer a fast, low-cost approach to program search for scientific problems.",
    "published": "2026-11-05T18:59:29Z",
    "updated": "2026-11-05T18:59:29Z",
    "categories": [
      "cs.AI",
      "cs.NE"
    ],
    "url": "https://arxiv.org/abs/2611.08483"
  },
  {
    "id": "2611.08578",
    "title": "HaNDF: Object-Conditioned Geometric Neural Hand Distance Fields",
    "authors": [
      "Zuhao Liu",
      "Melih Darcan",
      "Zhengdi Yu",
      "Riza Alp Guler",
      "Tolga Birdal"
    ],
    "abstract": "We propose, HaNDF, object-conditional neural distance fields as data-driven priors for modeling the plausible hand-object configurations, in the product manifold of hand articulations. While recent unconditional generative priors showed success in modeling human pose, hands are versatile articulated bodies often found in interaction with other objects. This makes it crucial to develop a generative prior which can model the plausible hand poses conditioned on the object under interaction. To this end, our HaNDF proposes a geometry-aware, object-conditioned neural distance field, representing the plausible articulations in the zero-level set of a conditional field. We leverage tools from Riemannian geometry to (i) represent plausible hands in the zero level-set of an object-induced neural field, and (ii) project a given pose onto this field. Using HaNDF, we can also optimize for a plausible condition, determining the object under interaction. Our extensive evaluations demonstrate that our HaNDF provides a flexible and powerful prior for hand-object interaction, suitable for applications such as pose refinement, reconstruction under occlusion, and physically plausible manipulation synthesis.",
    "published": "2026-11-05T18:59:09Z",
    "updated": "2026-11-05T18:59:09Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.LG",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2611.08578"
  },
  {
    "id": "2611.08478",
    "title": "Scientist World: Grow a Research World for AI-Scientists",
    "authors": [
      "Taiming Lu",
      "Sachin Konan",
      "Zhuang Liu"
    ],
    "abstract": "AI-Scientists arrived, but a world for them to grow in did not. Human scientists take theirs for granted $-$ centuries of open problems and shared ideas, waiting in the scientific literature. To AI-Scientists, that world is readable but not runnable, so we build Scientist World for them: every research paper becomes an executable environment. Our autonomous pipeline extracts each paper's open-ended research question and reproduces its proposed method as the baseline; an AI-Scientist entering the environment is evaluated against what the human authors achieved. We release the first 1,000 verified environments. With the world as an evaluation, we found that frontier AI-Scientists can already surpass the human researchers 74% of the time. As a record of how AI does science, it contains 6,400 hours of research traces, with every idea, experiment, failure, and success. As a training ground, we are able to raise (+158%) a small model to match frontier models in research ideation. At last, AI-Scientists' own world has arrived, grown from and growing with science itself.",
    "published": "2026-11-05T18:58:17Z",
    "updated": "2026-11-05T18:58:17Z",
    "categories": [
      "cs.AI",
      "cs.CL",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.08478"
  },
  {
    "id": "2611.08477",
    "title": "EgoGeneralist: Unifying Egocentric Action-Video Tasks through Video-Native Modeling",
    "authors": [
      "Yanlin Jin",
      "Bowen Yang",
      "Cheng Zhang",
      "Yifan Yang",
      "Zhe Li",
      "Jianfei Cai",
      "Kai Zhu"
    ],
    "abstract": "Modern video models possess strong visual priors, yet do not natively represent human action in metric 3D space. We present EgoGeneralist, which adapts pretrained video generators to unify action-conditioned egocentric video generation, pose estimation, and joint action-video generation. Our role-adaptive action renderer provides video-native representations for multidirectional action-video learning, making metric motion usable as both a spatial control signal and a recoverable generation target. Cross-stream action-video coupling establishes close correspondence between metric motion and visual dynamics through lightweight adaptation while preserving the pretrained visual prior. Together, these designs establish a generalist framework spanning five action-video tasks. Despite adaptation only on controlled laboratory recordings, EgoGeneralist generalizes to diverse unseen scenes and interactions with effective action control and visual quality, bridging pretrained visual knowledge and metric 3D human motion.",
    "published": "2026-11-05T18:58:13Z",
    "updated": "2026-11-05T18:58:13Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.08477"
  },
  {
    "id": "2611.08472",
    "title": "XStack: A Benchmark for ML Repo Migration",
    "authors": [
      "Linrong Cai",
      "Taiming Lu",
      "Haozhe Chen",
      "Zhuang Liu"
    ],
    "abstract": "ML code should run where researchers choose, not where it was first written. Today, machine learning code mainly lives in two ecosystems, PyTorch on NVIDIA GPUs and JAX on Google TPUs. Migrating repositories between them means building and testing across frameworks and hardware. This migration is (1) a practical need, since it unlocks different hardware for researchers, and (2) a natural benchmark: it involves different frameworks and hardware, covers whole repositories, and is long-horizon and challenging. We introduce XStack, a benchmark that evaluates agents on migrating ML repositories between these two ecosystems. Each agent receives a PyTorch repository and a clean TPU machine and must deliver a JAX repository. Its output passes if it meets our grading criteria, based on the source repository's published result, authenticated and calibrated by us. Migration by agents remains unreliable: Claude Opus 5 passes 75%, GPT-5.6-sol 45%, and every other agent at most 40%. XStack is a step toward freeing ML code from its ecosystem. We release XStack to make progress toward reliable migration across frameworks and hardware measurable.",
    "published": "2026-11-05T18:55:54Z",
    "updated": "2026-11-05T18:55:54Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.08472"
  },
  {
    "id": "2611.08577",
    "title": "Meituan-Robotics-0: A Vision-Language-Action Foundation Model for Desktop Manipulation",
    "authors": [
      "Meituan Robotics Team",
      "Caicheng Wang",
      "Chen Zhao",
      "Chengpeng Jin",
      "Duo Xu",
      "Fengjiao Chen",
      "Guanglu Wan",
      "Heqing Yang",
      "Jia Wang",
      "Jiacong Zhou",
      "Jie Hu",
      "Jiyuan Ru",
      "Lingfeng Zhang",
      "Linjiang Huang",
      "Manyuan Zhang",
      "Ningchu Liu",
      "Shijie Zhou",
      "Si Liu",
      "Shuo Li",
      "Tianyi Zhang",
      "Xi Zhang",
      "Xin Chen",
      "Xuezhi Cao",
      "Xunliang Cai",
      "Yanbin Zeng",
      "Yang Yang",
      "Yang Yi",
      "Yanli Tan",
      "Yifu Xu",
      "Yimeng Jia",
      "Yuchen Tang",
      "Yuchen Xie",
      "Yuxiang Zheng",
      "Zerwei Chng",
      "Zilong Huang",
      "Zipeng Ye",
      "Ziyuan Qin",
      "Ziqin Wang"
    ],
    "abstract": "We present Meituan-Robotics-0 (MR0), a vision-language-action foundation model and embodied-agent system for stationary-base desktop manipulation. MR0 combines 147 million vision-language samples with 15,060 hours of curated robot trajectories spanning 12 embodiments. A three-stage training recipe aligns multimodal representations with robot behavior through discrete action-token pre-training, transfers these priors to continuous cross-embodiment control through flow-matching mid-training, and adapts the policy through real-world post-training. We introduce Rollback, which pairs replaced policy segments with human corrections to provide positive and negative supervision for CFG-DAgger without value learning or advantage labeling. A unified end-effector interface supports heterogeneous embodiments, while asynchronous action-chunk merging maintains smooth execution under variable inference latency. An event-driven agent maintains persistent task events and reassesses plans when progress or feasibility changes, enabling cross-task retrieval and conditional task resumption. MR0 achieves 93.6% success on RoboTwin 2.0 and ranks fifth in the RoboDojo VLA track. Under matched HG-DAgger post-training, MR0 achieves higher average success rate and progress score than $π_{0.5}$ across three real-robot tasks. On Ethernet insertion, CFG-DAgger trained with Rollback data reaches 70% success and a progress score of 0.90. Qualitative agent deployments demonstrate cross-task event retrieval and recovery from temporarily unsatisfied task conditions.",
    "published": "2026-11-05T18:55:42Z",
    "updated": "2026-11-05T18:55:42Z",
    "categories": [
      "cs.RO",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.08577"
  },
  {
    "id": "2611.07126",
    "title": "Adapting LLM Judges to Observed Human Annotation Policy through Soft Prompt Tuning",
    "authors": [
      "Tamás Janusko",
      "Sven Kleinkop",
      "Ricardo Bochnia",
      "Gunnar Hempel",
      "Steffen Tomschke",
      "Jürgen Anke",
      "Maik Thiele"
    ],
    "abstract": "Large Language Models (LLMs) are increasingly employed as automated judges for evaluating chatbot responses. While proprietary models can achieve high agreement with human annotators, they remain costly and difficult to deploy in practical settings. Lightweight open-source LLM judges provide an attractive alternative but typically exhibit lower agreement with human ratings. In this paper, we investigate whether soft prompt tuning can align open-source LLM judges more closely with human annotation policy. We train soft prompts on the FairBotBench benchmark and evaluate the adapted judges across the dimensions of bias, toxicity, and personalization. Our findings demonstrate that hybrid soft-prompt tuning, which combines textual prompts with learned continuous prompt embeddings, consistently improves agreement with human annotations over the corresponding untuned baselines. For Qwen 3.5 9B, the adapted judges surpass both hosted reference judges across all three evaluation dimensions.",
    "published": "2026-11-04T20:48:34Z",
    "updated": "2026-11-04T20:48:34Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.07126"
  },
  {
    "id": "2611.07123",
    "title": "PromptOps: Iterative Prompt Optimization for LLM-as-a-Judge Systems",
    "authors": [
      "Sven Kleinkop",
      "Tamás Janusko",
      "Ricardo Bochnia",
      "Gunnar Hempel",
      "Steffen Tomschke",
      "Jürgen Anke",
      "Maik Thiele"
    ],
    "abstract": "Large language models (LLMs) are increasingly used as automated judges for evaluating the behavior of chatbots and other AI systems. In deployment, however, their agreement with the intended human evaluation policy may degrade as user interactions and score distributions change. Existing automatic prompt optimization methods are primarily studied as one-shot procedures on static development sets and therefore provide limited guidance for maintaining LLM judges over time. We frame this problem as judge drift and introduce PromptOps, a closedloop framework for monitoring and iteratively recalibrating LLM-as-a-Judge (LLMaaJ) systems. PromptOps separates four operational decisions: when to optimize, which optimization procedure to apply, which feedback records to use, and how to update the judge prompt. We instantiate the framework with five prompt optimization methods: GEPA, SIMBA, Rubric Synthesis, and exemplar selection using either simulated annealing or a Tree-structured Parzen Estimator. Our experiments demonstrate that iterative prompt optimization can recalibrate LLM judges and recover performance after controlled shifts in the referencescore distribution. However, effective maintenance is inherently contextdependent: neither optimization algorithm choice nor update timing generalizes universally across settings. These findings establish prompt optimization for deployed LLM judges as an inherently iterative maintenance problem and demonstrate that PromptOps provides a practical abstraction for studying and implementing this process.",
    "published": "2026-11-04T20:38:52Z",
    "updated": "2026-11-04T20:38:52Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.07123"
  },
  {
    "id": "2611.07103",
    "title": "A Night at the LLM Zoo: Data Conditioned Flow Matching for Generating Pretrained LLM Weights",
    "authors": [
      "Scott Biggs",
      "Bedionita Soro",
      "Saumya Gupta",
      "Bruno Andreis",
      "Sung Ju Hwang"
    ],
    "abstract": "A challenge to Weight Space Learning as it expands from task specific and vision models to Large Language Models (LLMs) is the absence of a well curated and analyzed LLM population. To address this, we train such a model zoo for application to Weight Space Generation by systematically varying the data mixture composition between web text, books, mathematics, coding, and French across populations of 51M, 124M, and 355M parameter GPT-2 Models, each tier with count N = 100. We analyze these populations by cosine similarity, functional diversity, Leave-One-Mixture-Out modeling, and variance decomposition. We show that the zoo contains diverse models whose variation is structured by training mixture composition. We embed the training mixture composition to condition a Flow Matching model of complete pretrained LLM weights in Gram-PCA compressed weight space. By demonstrating zero-shot generalization to held out mixtures, measuring Continuous Ranked Probability Score skill, as well as finding minimal changes in downstream test-set perplexity and general capability benchmark scores, we show that our generator generalizes on the simplex of data mixtures to produce models that perform similarly to those in the zoo ex nihilo. Finally, we produce all source code and artifacts to support the continued expansion of Weight Space Learning and Generation into the LLM domain.",
    "published": "2026-11-04T20:16:34Z",
    "updated": "2026-11-04T20:16:34Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.07103"
  },
  {
    "id": "2611.07089",
    "title": "Polynomial-Time Computation of Extensive-Form Proper Equilibria in Two-Player Zero-Sum Games",
    "authors": [
      "Sam Ganzfried"
    ],
    "abstract": "We give a deterministic polynomial-time algorithm for computing an exact extensive-form proper equilibrium in a finite two-player zero-sum extensive-form game with perfect recall and rational data. Properness is understood in the agent normal form: an action at an information set is penalized relative to a better action while all other local behavioral choices, including the player's own future actions, remain fixed. Our algorithm assigns each information set a geometric permutahedron of allowable action probabilities. A scaled doubly stochastic representation embeds these restrictions in a polynomial-size sequence-form polytope; a saddle point then satisfies the local $\\varepsilon$-properness inequalities. To obtain an exact equilibrium rather than a solution at an arbitrarily small numerical perturbation, we establish sign stability of a parametric linear system, construct a persistent feasible basis, and extract the limits of behavioral ratios. The resulting probabilities are rational and have polynomial encoding length, including at information sets whose realization probabilities vanish.",
    "published": "2026-11-04T19:52:21Z",
    "updated": "2026-11-04T19:52:21Z",
    "categories": [
      "cs.GT",
      "cs.AI",
      "cs.MA",
      "econ.TH"
    ],
    "url": "https://arxiv.org/abs/2611.07089"
  },
  {
    "id": "2611.07088",
    "title": "Synthesizing symbolic models of human and machine reasoning at scale",
    "authors": [
      "Solim LeGris",
      "Philipp Mondorf",
      "Jinran Jin",
      "Akshay K. Jagadish",
      "Brenden M. Lake",
      "Todd M. Gureckis"
    ],
    "abstract": "Symbolic models offer a powerful account of cognition, but their scope has historically been limited by the need for hand-engineering and computational tractability. We show how advances in artificial intelligence (AI) can scale symbolic modeling and help overcome these engineering limitations. We introduce Behavior-Conditioned Symbolic Synthesis (BCSS)---an approach for automated search of interpretable, deterministic symbolic programs that verifiably reproduce behavior---and apply it to model both human and machine behavior across hundreds of challenging reasoning problems. Analyzing these programs reveals that both people and machines tend to oversimplify, adopt rules that are partial explanations for their observations, and misinfer dependencies between problem features. These shared signatures are modulated by available resources, with reasoning effort predicting the extent to which machines simplify and explain their observations. Together, these results point to underlying mechanisms reminiscent of satisficing in both people and machines, and illustrate how BCSS offers a general approach for interpreting and comparing rule-based reasoning of humans and black-box AI systems.",
    "published": "2026-11-04T19:51:02Z",
    "updated": "2026-11-04T19:51:02Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.07088"
  },
  {
    "id": "2611.07081",
    "title": "Wide View Synthesis from Overlapping Perspective Cameras in Autonomous Driving",
    "authors": [
      "Kaixuan Zhang",
      "Zhipeng Xiong",
      "Minxian Li",
      "Mingwu Ren",
      "Xiatian Zhu"
    ],
    "abstract": "Multi-perspective-camera systems are widely adopted since they provide broad visual coverage for autonomous driving, motivating the synthesis of a unified wide view from spatially separated observations. In this work, we formulate wide view synthesis (WVS), which aims to synthesize a geometrically consistent wide view at a specified virtual viewpoint from multiple perspective cameras. Unlike conventional image stitching, WVS requires reasoning about 3D geometry and visibility to handle depth-dependent parallax and occlusions arising from spatially separated camera centers. While vanilla 3D Gaussian Splatting (3DGS) enables high-fidelity view synthesis, its reliance on per-scene optimization limits its applicability to driving scenes. Furthermore, WVS introduces additional challenges, *e.g.*, peripheral stretching under perspective projection and photometric inconsistencies across cameras. To address these challenges, we propose **Wide-View Gaussian Splatting (WV-GS)**, a feed-forward Gaussian-splatting framework that synthesizes wide views without per-scene optimization. Specifically, we introduce Piecewise Perspective Rendering (PPR) to mitigate peripheral stretching through local perspective projections sharing a common camera center, and Spatial Affine Photometric Modeling (SAPM) to account for camera-dependent photometric variations during training. We further introduce **WideDrive**, a synthetic benchmark providing dense ground-truth wide views and adapt a LiDAR-projected sparse-reference protocol to real-world datasets. Extensive experiments on multiple datasets demonstrate the effectiveness of WV-GS for WVS. Dataset and code will be publicly released.",
    "published": "2026-11-04T19:36:54Z",
    "updated": "2026-11-04T19:36:54Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.07081"
  },
  {
    "id": "2611.07073",
    "title": "When Verification Is Not Agreement: Cross-Agent LLM-to-Dafny Formalization",
    "authors": [
      "Priyanath Maji"
    ],
    "abstract": "A verified Dafny postcondition certifies that a formula holds, but it does not guarantee that the result was reached through genuine independent reasoning. We introduce a cross-agent formalization protocol where a Specifier model translates clinical trial criteria into a Dafny predicate, and an Implementer model writes an operational method checked against it. A same-model control establishes that even with no capability gap, independent re-extraction from identical text agrees only 59.3% of the time. Evaluating four model configurations on 96 clinical trial documents, we find that agreement is highly sensitive to how model capability is allocated across the two roles: the GPT-4.1-nano/GPT-4.1-mini configuration achieves 53.0% agreement when the stronger model is the Implementer, but only 14.3% when the roles are reversed. The strongest tested configuration, GPT-5.6-luna/GPT-5.4-mini, improves agreement to 34.4% but remains below the same-model baseline and is dominated by direct contradiction (42.7%). We also detect a critical verification artifact in which a weaker Implementer satisfies the postcondition by invoking the Specifier's predicate directly; after structural auditing, corrected agreement falls from 14.3% to 13.2%. Our results show that verification success alone is insufficient evidence of independent cross-agent agreement, and that model capability does not guarantee agreement when formalizing the same source independently.",
    "published": "2026-11-04T19:31:51Z",
    "updated": "2026-11-04T19:31:51Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.07073"
  },
  {
    "id": "2611.07072",
    "title": "Automated Feedback to Peer Tutors Increases Their Talk Moves and Learner Reasoning but Not the Balance of Talk",
    "authors": [
      "Dorottya Demszky",
      "Yann Hicke",
      "Joy Yun",
      "Mariah Olson",
      "Max Karpawich",
      "Anees Iqbal",
      "Matt Wu",
      "Jimmy Huang",
      "Akshay Ravikumar",
      "Drew Bent"
    ],
    "abstract": "Automated feedback on classroom discourse improves instruction in professional and online teaching contexts, and recent work suggests that delivering similar feedback to learners may strengthen these effects by sharing responsibility for participation. Whether this holds in small-group volunteer tutoring has not been tested. We present results from a randomized controlled trial across two four-week SAT mathematics bootcamps on the Schoolhouse.world platform, involving 1,030 volunteer tutors, 7,443 learners and 6,508 recorded sessions. Tutors were randomly assigned to receive no feedback, automated feedback on their own discourse, or that feedback together with participation feedback delivered to their learners under one of two motivational framings. Feedback to tutors increased eliciting of learner ideas, uptake of learner contributions, and learner reasoning by 8-15%, and the pattern replicated across both bootcamps. However, tutor talk time, which averaged 91.5% in the control group, did not change in any condition, and learner-facing feedback did not further change discourse. Interviews with 17 tutors indicate that they adopted the moves the feedback recommended but were limited by learners who did not respond. Interviews with 13 learners suggest why the learner-facing feedback had little effect: it reported a group-level rather than a learner-level statistic, some learners preferred to listen, and learner-to-learner interaction was rare in these sessions. Automated feedback can change how tutors invite learner thinking, but shifting how much learners talk likely requires changes beyond feedback.",
    "published": "2026-11-04T19:29:43Z",
    "updated": "2026-11-04T19:29:43Z",
    "categories": [
      "cs.CL",
      "cs.ET",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2611.07072"
  },
  {
    "id": "2611.07071",
    "title": "Shaping & Monitoring Models through their Internal Representations",
    "authors": [
      "Thomas Fel",
      "Matthew Kowal",
      "Matt Feiszli",
      "Satchel Grant",
      "Andrew Lee",
      "Chris Earls",
      "Fatih Dinc",
      "Vasudev Shyam",
      "Usha Bhalla",
      "Leon Bergen",
      "Siddharth Boppana",
      "Ching Fang",
      "Michael Byun",
      "Tristan Gallent",
      "Nicholas Wang",
      "Tal Haklay",
      "Dron Hazra",
      "Neehar Kondapaneni",
      "Connor Watts",
      "Ryan Panwar",
      "Thomas Dooms",
      "Jack Merullo",
      "Atticus Geiger",
      "Ekdeep Singh Lubana",
      "Thomas McGrath",
      "Owen Lewis"
    ],
    "abstract": "We propose Mechanistic Shaping, a unified framework for shaping models through their internal representations. Mechanistic Shaping is applied during training so that models follow specifications (rules) about which concepts they express, measured via their outputs or internal representations (e.g., no harmful content), and also which concepts they rely on, i.e., what they use to make their decisions (e.g., not a candidate's gender when screening a résumé). Across multiple domains (vision, medical imaging, language), scales (up to 32B parameters), and training paradigms (classification, SFT, DPO, GRPO), we find that Mechanistic Shaping substantially reduces targeted behaviors while preserving task performance. Since training against a representation can also modify it, we ask whether shaped concepts remain monitorable, a question that depends on the class of monitors considered. We therefore introduce a hierarchy of such classes, which separates a concept that escapes one probe from a concept that is truly gone. We characterize three geometric mechanisms of circumvention: the concept can drift away from the monitor, be erased from the layer, or persist in higher-order statistics as a nonlinear encoding, which we explain through a product-code construction. Although other mechanisms may arise in different settings or at larger scales, these three account for all of our observations, and each can be detected by a matching monitor. In practice, we find that shaped concepts largely remain monitorable: refitted linear probes recover the concept in most settings, and the original probe remains reliable whenever gradients do not flow through it. Taken together, these results point to the potential of using interpretability as a tool for training, and call for a correspondingly rigorous science of interpretability-based training.",
    "published": "2026-11-04T19:29:13Z",
    "updated": "2026-11-04T19:29:13Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.07071"
  },
  {
    "id": "2611.07069",
    "title": "Finite-Time Convergence and Regret Guarantees for Neural Reinforcement Learning in POMDPs",
    "authors": [
      "Jingjuan Huang",
      "Zhiyao Zhang",
      "Alvaro Velasquez",
      "Nathaniel D. Bastian",
      "Jia Liu"
    ],
    "abstract": "Reinforcement learning (RL) in Partially Observable Markov Decision Processes (POMDPs) is computationally challenging due to the curse of long-range dependence on history. Fortunately, recent studies have shown that a range of POMDPs that satisfy the filter stability assumption can be well approximated by a superstate Markov Decision Process (MDP) based on a truncated history in a finite-memory window, with a value gap that decays with the window length. However, existing finite-time convergence analyses on such superstate MDP surrogates are either limited to over-simplified linear function approximation or rely on an i.i.d. sampling oracle that is violated by POMDP trajectories, both of which severely limit the applicability of these theoretical results in practice. This motivates us to bridge the gap by investigating RL in POMDPs with nonlinear neural value function approximation. Our main contributions are threefold: i) We first establish a new finite-state MDP point-wise approximation error bound, which lays the foundation for our RL algorithm design and analysis in POMDPs; ii) By applying Temporal-Difference (TD) learning to POMDP-generated superstate transitions and targeting the Bellman fixed point of the superstate MDP, we prove a finite-time critic error bound with nonlinear neural value function approximation; and iii) By combining the neural critic function approximation error bound with the policy mirror descent framework, we obtain a finite-time sublinear regret against the optimal POMDP value. To the best of our knowledge, such a finite-time sublinear regret based on neural function approximation is the first in the literature for finite-memory POMDPs. Our numerical experiments also verify our theoretical results.",
    "published": "2026-11-04T19:25:21Z",
    "updated": "2026-11-04T19:25:21Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.07069"
  },
  {
    "id": "2611.07066",
    "title": "Cooperative Multi-Agent Reinforcement Learning via Epigraph-Form Guided Exploration",
    "authors": [
      "Sungil Son",
      "Hoseong Jung",
      "Dahyun Oh",
      "H. Jin Kim"
    ],
    "abstract": "Discovering cooperative behavior in multi-agent reinforcement learning (MARL) is challenging due to the combinatorial complexity of joint state-action spaces, which hinders the emergence of coordinated behaviors from trial-and-error alone. Intrinsic rewards are often used to aid discovery, but naively combining them with team objectives can distort the learning signal, compromising task performance. In this paper, we propose EFXPLORER, a constrained exploration framework that maximizes exploration objectives subject to a constraint that preserves established task performance. We solve the resulting problem using an epigraph reformulation that introduces adaptive exploration budgets. This approach separates intrinsic rewards from task objectives and regulates exploration through task feasibility. To further encourage diverse and temporally extended exploration, we incorporate a successor distance-based intrinsic reward that captures long-horizon dependencies. Empirically, our method outperforms strong baselines and induces novel cooperative strategies across SMAX, VMAS, and MPE benchmark suites.",
    "published": "2026-11-04T19:24:25Z",
    "updated": "2026-11-04T19:24:25Z",
    "categories": [
      "cs.AI",
      "cs.MA"
    ],
    "url": "https://arxiv.org/abs/2611.07066"
  },
  {
    "id": "2611.07063",
    "title": "SD-LoRA: Training-Time Structural Distillation into LoRA for Few-Shot Vision-Language Adaptation",
    "authors": [
      "Mohammed Rahman Sherif Khan Mohammad",
      "Ardhendu Behera",
      "Sandip Pradhan",
      "Swagat Kumar",
      "Yonghuai Liu"
    ],
    "abstract": "Few-shot adaptation of vision-language models must balance two competing goals: learning fine-grained visual distinctions from very limited supervision and preserving the efficiency that makes frozen CLIP-like models attractive for deployment. Existing lightweight adaptation methods, including prompt tuning, LoRA, and cache-based adapters, typically supervise global image embeddings and therefore underuse token-level structure. Conversely, structure-aware methods exploit local evidence but often introduce additional inference-time computation. We propose SD-LoRA, a structural distillation framework that uses token-level graph reasoning only during training and transfers its effects into a lightweight LoRA-adapted CLIP model. During training, a heterogeneous graph teacher models patch-patch, global-local, and visual-text relations over high-resolution ViT tokens. Rather than retaining this graph at test time, SD-LoRA transfers its structural bias into the shared CLIP-LoRA backbone through implicit distillation and Prototype Predictive Alignment, which aligns graph-conditioned representations with support-derived class prototypes. At inference, the graph teacher is discarded; prediction requires only a single CLIP-LoRA forward pass and a cache-based classifier. Across 11 few-shot benchmarks, SD-LoRA improves over a strong CLIP-LoRA baseline by 2.4/1.8/3.0/2.4/2.0 percentage points in the 1/2/4/8/16-shot settings, respectively, without additional graph computation at test time. Results on base-to-novel generalization, cross-dataset transfer, out-of-distribution robustness, and calibration further show that training-time structural supervision improves both accuracy and transfer reliability. Code is available at https://github.com/MR-Sherif/SD-LoRA.git.",
    "published": "2026-11-04T19:22:47Z",
    "updated": "2026-11-04T19:22:47Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.07063"
  },
  {
    "id": "2611.05664",
    "title": "Combining Relevant Expert Knowledge Using Mixtures of Feedback Fuzzy Cognitive Maps",
    "authors": [
      "Olaoluwa Adigun",
      "Akash Kumar Panda",
      "Bart Kosko"
    ],
    "abstract": "A neuro-symbolic system should combine only relevant answers from expert agents or other knowledge sources. Using only relevant experts for a given input query becomes ever more important for accuracy and scalability as the knowledge network grows and connects ever more knowledge sources. We extend the standard definition of relevance from the legal theory of evidence: An answer is relevant if and only if it is both probative and material for the matter at hand given the knowledge available. We apply this relevancy scheme to mixing the feedback fuzzy cognitive maps (FCMs) of real or artificial experts. The expert FCM directed causal graphs mix or combine into a common knowledge network. We compare the equilibrium limit-cycle predictions or answers of the experts to the answers of the mixture FCM and then estimate the probative status of answers by their difference or variation. A new Bayes-like theorem de-mixes the knowledge mixture into corresponding posterior-like FCMs that also allow relevancy-based comparisons. The result is a final set of relevancy mixing weights that produces a relevancy-mixed FCM knowledge network for the given query. So different queries produce different relevancy-mixed FCMs. We demonstrate this relevancy approach using generated synthetic FCMs from an actual 13-node expert FCM that models the causes and feedbacks of ischemic-stroke risk.",
    "published": "2026-11-03T21:50:07Z",
    "updated": "2026-11-03T21:50:07Z",
    "categories": [
      "cs.AI",
      "cs.IR",
      "cs.SC"
    ],
    "url": "https://arxiv.org/abs/2611.05664"
  },
  {
    "id": "2611.05662",
    "title": "Grounded but Not Immune: Confirmation Bias in Agent-as-a-judge",
    "authors": [
      "Drake Benjamin Brown",
      "Khushbu Pahwa",
      "Yubin Ge",
      "Salvatore Romeo",
      "Akhil Agnihotri",
      "Yi Zhang",
      "Xiaofei Ma",
      "Daniele Bonadiman"
    ],
    "abstract": "Evaluating open-ended agent tasks increasingly falls to an Agent-as-a-Judge: an evaluator handed tools and the agent's full trajectory so it can verify a result against the environment. The premise is that a judge that gathers its own evidence should be grounded by it. We show that this grounding does not immunize the judge against confirmation bias: a single false pre-screening note, attributed to an authority and carrying no evidential bearing on the correct verdict, overturns up to 40% of a tool-using judge's correct verdicts across four judges and five datasets, even though the judge collects decisive evidence. The shift is driven by specific properties of the cue. We treat this cue as a controlled diagnostic of confirmation bias rather than an adversarial attack. Our central contribution is to explain how confirmation bias changes the judge's behavior in a trajectory. We classify changes in judge behavior and attribute changes to one of three failure modes: over-trust (verify, conclude correctly, then defer), hallucination (fabricate support for the flip), and under-investigation (stop at the first corroborating signal). For the two Claude judges, the failure is predominantly over-trust (67-75% of harmful flips), while smaller judges have error modes spread across all three. Lightweight mitigations blunt but never remove the bias.",
    "published": "2026-11-03T21:47:19Z",
    "updated": "2026-11-03T21:47:19Z",
    "categories": [
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2611.05662"
  },
  {
    "id": "2611.05652",
    "title": "Quantifying Trait-State Hierarchy in EEG Foundation Model and Signal Processing Embeddings",
    "authors": [
      "Anusha Madapura",
      "Aditya Kommineni",
      "Shrikanth Narayanan"
    ],
    "abstract": "Electroencephalography (EEG) measures brain activity through recording electrical potentials of the scalp. EEG recordings capture two distinct sets of characteristics in the signal: (1) \\emph{Traits} -- information that remains relatively constant over the course of a recording session, such as subject identity, age, and sex; (2) \\emph{States} -- signatures that encode responses to external stimuli, including visual, auditory, and motor information. There is limited understanding of how different EEG modeling features (signal processing and foundation models) encode state and trait characteristics. In this work, we quantify state- and trait-level features captured by EEG embeddings using a hierarchy metric and kNN purity on Brain-Computer Interface dataset trials, and find that a majority of EEG features form a macro-trait hierarchy (embeddings form trait-level clusters with micro-states within). Our linear probe results indicate that this hierarchy structure leads to suboptimal state distinguishability, negatively impacting BCI performance of EEG foundation models. To mitigate this, we explore normalization techniques that reduce trait-specific information in embeddings and provide a $\\sim$ 10\\% improvement in balanced accuracy for state classification. Additionally, we observe that when fine-tuning models for downstream state decoding, embedding spaces transform from macro-trait to macro-state hierarchies, which in turn lead to better state decoding.",
    "published": "2026-11-03T21:37:52Z",
    "updated": "2026-11-03T21:37:52Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.05652"
  },
  {
    "id": "2611.05650",
    "title": "Attributing Agent Failures to Their History Needs an Executed Counterfactual: Toward a Reporting Standard",
    "authors": [
      "Egor Pakhomov",
      "Erik Nijkamp"
    ],
    "abstract": "Published explanations of why long-horizon agents fail are commonly taxonomies labeled over completed trajectories: a judge reads a transcript and names the failure. We argue that a claim attributing an agent's behavior to its history should carry intervention-verified evidence, per instance or via a validated estimator: freeze an executable mid-trajectory state, alter only the history the agent sees, and continue - executed rather than inferred from the transcript, at a state whose restoration has been measured, with a replay certificate matched to the estimand. Each of the four manipulation classes we name has a precedent, and several methods already execute interventions from checkpoints, re-executed prefixes or recorded conversation states (for example DoVer, REFLECT, Min et al., Who&When Pro, Causal Agent Replay), but none reports a measured replay certificate. Two cautionary measurements, neither applying the standard, follow: a carrier taxonomy whose \"concentration\" could not be separated from benchmark construction (adjusted odds ratio 1.15, interval crossing 1), and hash-identical snapshots that, restored into identically seeded processes, agreed with one another in 24 of 24 states while differing from the live continuation in 9 and 20 of 24. Restoring the captured position of a random stream made all 24 agree with the live run.",
    "published": "2026-11-03T21:33:48Z",
    "updated": "2026-11-03T21:33:48Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.05650"
  },
  {
    "id": "2611.05648",
    "title": "NitroFusion2: Bringing Adversarial Loss to the Text Stream of Multimodal Diffusion Transformers",
    "authors": [
      "Dar-Yen Chen",
      "Yi-Zhe Song"
    ],
    "abstract": "Adversarial diffusion distillation has conventionally relied on image features for discrimination. We revisit this choice for multimodal diffusion transformers (MMDiTs), whose text stream becomes image-dependent through joint attention. We introduce Text-Stream Adversarial Distillation (TSAD), which exploits intermediate text-token states as a new adversarial representation. Because the text stream has already read the image while remaining tied to the text condition, changing that condition changes what information it extracts from the image. Building on this property, we introduce Aspect-Cued Discrimination (ACD), which conditions the discriminator on different aspects of the sample, such as typography, objects, or style, to steer which properties are emphasized during adversarial training. Building on the expert-discriminator design of NitroFusion, we integrate TSAD and ACD in NitroFusion2. NitroFusion2 brings few-step distillation from the conventional 4-8-step regime down to just 1-2 steps at comparable quality. At one step, it produces sharp rendered text and rich fine-grained details, making one-step generation practical rather than merely a stress test for distillation. At two steps, it remains competitive across the evaluated benchmarks. These results establish the MMDiT text stream as a powerful and steerable representation for adversarial diffusion distillation.",
    "published": "2026-11-03T21:33:28Z",
    "updated": "2026-11-03T21:33:28Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.05648"
  },
  {
    "id": "2611.05646",
    "title": "ARIDA - Active railway infrastructure dataset annotation using neural network predictions",
    "authors": [
      "Maximilian Dornik",
      "Christian Sieberichs",
      "Simon Geerkens",
      "Alexander Braun"
    ],
    "abstract": "Modern railway perception requires large comprehensive image datasets, but creating them is slowed by manual labeling, especially for track polylines and other complex infrastructure geometry. This paper presents the Active Railway Infrastructure Dataset Annotation framework, a railway-specific semi-automated pipeline that converts instance predictions from a mask scoring instance segmentation network into bounding-boxes, polygons, polylines, and paired polylines. To keep automatic track geometry annotation reliable without ground truth, it applies confidence thresholds and an unique contour-agreement quality score as an acceptance gate. An active learning loop ranks remaining images by uncertainty and adapts the number of manual queries per cycle. This is achieved through a novel quantity control mechanism, in which easy images are auto-accepted and human effort targets hard cases. Experiments on disjoint, diverse imagery and time-sequential, redundant imagery quantify effort reduction and accuracy trade-offs, achieving about two thirds reduction in the disjoint regime and up to 93% in the sequential regime. The study also provides guidance for initial label budgets and stopping to avoid over-annotation.",
    "published": "2026-11-03T21:31:10Z",
    "updated": "2026-11-03T21:31:10Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.05646"
  },
  {
    "id": "2611.05638",
    "title": "VIPBench: A Human-Aligned Benchmark for Voice Identity Perception in the Age of Voice Cloning",
    "authors": [
      "Xudong Tang",
      "Matthew Groh"
    ],
    "abstract": "Speaker-recognition benchmarks test how accurately a model recovers the speaker label of a recording, treating voice identity as a property of the person who produced it. However, these benchmarks do not evaluate how humans perceive voice identity. Whether a listener hears two voices as the same person has consequences for intellectual property rights, cybersecurity, and everyday life. We introduce the Voice Identity Perception benchmark (VIPBench), which contains 124,876 same-or-different judgments from 1,290 listeners on 9,800 recording pairs from 100 public figures. The pairs include real recordings, voice clones generated by a text-to-speech system, and morphs between two speakers' voices. We also define four tasks that evaluate the alignment between speaker-representation models and human identity perception. The first two tasks measure how well a model's similarity score predicts the proportion of listeners who respond \"same\" and the majority response. The other two measure whether a model and listeners find the same speaker pairs similar, and whether a model's relationship to listener judgments holds equally for real and synthetic recordings. We evaluate eleven publicly available speech models. Listener judgments diverge from speaker labels most often for voice clones: in 41% of responses, listeners judged a clone and a real recording of the same speaker to be different people. No model reaches the noise ceiling; the best model explains 61% of the explainable variance. Models trained with speaker labels align with listeners better than self-supervised models do, yet a model with a 12% error rate on speaker labels aligns with listeners as well as models with error rates below 2%. VIPBench enables the evaluation of speaker models against human perception on real, cloned, and morphed speech, and our results motivate training speaker models directly on listener judgments.",
    "published": "2026-11-03T21:21:59Z",
    "updated": "2026-11-03T21:21:59Z",
    "categories": [
      "cs.SD",
      "cs.AI",
      "cs.CY",
      "cs.MM"
    ],
    "url": "https://arxiv.org/abs/2611.05638"
  },
  {
    "id": "2611.05637",
    "title": "Contextual Pictograms for Repairing Multilingual ASR Errors",
    "authors": [
      "Mariana Hernandez",
      "Hector Luna",
      "Carlos Bruno",
      "Luis Ricardo Santos",
      "Elena Simoes"
    ],
    "abstract": "Speech transcription errors can be difficult to recognize when competing word hypotheses are unfamiliar or visually similar. We describe an interface that combines alternative transcripts, replay and contextually checked pictograms for selected uncertain concepts. The system will initially support French and Spanish functional utterances. A counterbalanced study will assess whether pictorial feedback helps listeners recover the speaker's intended action beyond text alternatives alone. We will also quantify semantic mismatch and additional interaction time, since an inappropriate image can reinforce the wrong interpretation rather than repair it.",
    "published": "2026-11-03T21:21:18Z",
    "updated": "2026-11-05T07:36:11Z",
    "categories": [
      "cs.CL",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2611.05637"
  },
  {
    "id": "2611.05636",
    "title": "Route to Remember: Adaptive Memory Selection for LLM Agents",
    "authors": [
      "Zeyu Fang",
      "Jun Yin",
      "Yongsheng Mei",
      "Xu Han",
      "Chaitali Joshi",
      "Zhongkai Sun",
      "Jie Hao",
      "Bin Guo",
      "Chengyuan Ma",
      "Benjamin Z. Yao",
      "Chenlei Guo"
    ],
    "abstract": "The memory of production agents is increasingly becoming a bottleneck and is built almost exclusively from text: key points are extracted from out-of-limit context and retrieved into context at query time. Therefore, every new query incurs an additional cost that grows with the accumulated history. Weight memory is a complementary alternative that internalizes knowledge into model parameters and answers with no context at all, and has recently proven effective in self-evolving agents for internalizing skills and behaviors. However, its application in episodic and semantic memory, such as user-specific facts, remains comparatively unexplored, and a gap remains between earlier attempts at weight memory and text-based systems regarding recall performance. We study how to make weight memory competitive as a long-term factual store by applying on-policy self-distillation (OPSD). It trains a context-free student from a teacher, which is the same model conditioned on the user's memory, together with a verify-then-regenerate router that lets weight and text memory each cover the queries they handle best. On the HaluMem benchmark, OPSD matches or surpasses strong text-memory baselines, including full-context prompting and retrieval systems, while reading fewer tokens per query. We further conduct an extensive study that characterizes the behavior of weight memory and analyzes how different training recipes affect its performance. As agent harnesses move toward persistent, multi-session deployments, these results position weight memory as a practical, low-cost component of agent memory and provide insights into feasible training and evaluation protocols for combining it with retrieval.",
    "published": "2026-11-03T21:21:14Z",
    "updated": "2026-11-03T21:21:14Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.05636"
  },
  {
    "id": "2611.05633",
    "title": "Spatio-Temporal Multi-Order Interaction for Video Recognition",
    "authors": [
      "Kevin D. Nguetche",
      "Lilian Hollard",
      "Eric Granger",
      "Marco Pedersoli"
    ],
    "abstract": "Many temporal approaches for video recognition rely on explicit cross-channel aggregation projections, which have quadratic complexity in the number of channels, introducing significant computational overhead. In addition, the spatio-temporal representation used for video recognition is biased either toward local order interactions (for CNNs) or toward global order interactions (for transformers). Starting from the multi-order spatial representation of MogaNet, our method introduces two complementary contributions to tackle these problems. First, for the temporal modelling, we introduce parallel multi-order processing with depthwise-only convolutions and implicit gating-based aggregation, which is linear in the number of channels, inducing a considerable computational reduction. Second, we propose a dual interaction between spatial and temporal dimensions, which allows a better spatio-temporal representation without increasing the computational cost. By combining these two contributions, our proposed VideoMogaNet achieves performance on par with or better than state-of-the-art action recognition approaches across multiple video benchmarks (UCF101, HMDB51, Kinetics-400, Diving48), while considerably reducing the cost of the temporal branch.",
    "published": "2026-11-03T21:20:04Z",
    "updated": "2026-11-03T21:20:04Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.05633"
  },
  {
    "id": "2611.05632",
    "title": "Assurance-Conditioned Continuous Authorization for Autonomous AI Agents",
    "authors": [
      "Mehdi Shajari"
    ],
    "abstract": "Autonomous software agents can act through tools, delegate work, and change their models or execution environments while earlier authorizations remain in flight. We present Assurance-Conditioned Continuous Authorization (ACCA), an approach designed to be harness-independent, for maintaining operational authority according to currently justified assurance. It distinguishes evidence validity from contextual applicability, derives assurance claims from eligible evidence, and resolves a multidimensional effective-authority envelope within a principal-declared ceiling and applicable policy. A typed dependency graph supports selective re-evaluation of authorization-relevant changes. An authority epoch changes when effective authority changes; a distinct optional authorization-basis version supports revalidation of action-specific authorization conditions. Protected effect-time enforcement can reject stale actions before a consequential resource change, subject to the available commit mechanism. A compositional Domain Governance Profile expresses domain-specific semantics without granting authority. Controlled scenario tests implemented as a regression suite using a trading profile exercise default-deny rules, evidence-conditioned contraction and recovery, policy divergence, selective non-response, and stale-action rejection at a local gateway before the simulated-broker boundary. The study establishes implementation-level evidence in one domain, not a cross-domain guarantee of harmful-behavior prevention.",
    "published": "2026-11-03T21:19:46Z",
    "updated": "2026-11-03T21:19:46Z",
    "categories": [
      "cs.AI",
      "cs.CR"
    ],
    "url": "https://arxiv.org/abs/2611.05632"
  },
  {
    "id": "2611.05625",
    "title": "Personalized Visual Support After Automatic Speech Recognition",
    "authors": [
      "Beatriz Calero",
      "Duarte Neves",
      "Carlos Bruno",
      "Luis Ricardo Santos",
      "Mario Egea"
    ],
    "abstract": "Many spoken-language interfaces stop at producing a transcript. This project examines how a second layer of optional text and pictorial support can be adapted to individual needs. We specify four presentation levels and a behavior-based selection policy driven by replay requests, response latency and recent comprehension. After expert review of the mappings, we will compare fixed and adaptive presentation using counterbalanced spoken instructions. The study is designed to measure comprehension, usability and which modality listeners rely on, not to claim that transcript embellishment uniformly benefits listeners.",
    "published": "2026-11-03T21:15:31Z",
    "updated": "2026-11-03T21:15:31Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2611.05625"
  },
  {
    "id": "2611.04300",
    "title": "CLOCs-R: Radar-Assisted Camera-LiDAR Fusion for Long-Range Object Detection",
    "authors": [
      "Richard Beuck",
      "John Nguyen",
      "Sudip Dhakal"
    ],
    "abstract": "Long-range 3D object detection remains difficult for autonomous vehicles because LiDAR returns become sparse and camera evidence weakens with distance, while automotive radar keeps returning measurements far beyond both. We present CLOCs-R, an extension of the CLOCs candidate-level fusion framework that adds radar evidence to camera-LiDAR rescoring. Radar returns are accumulated over several sweeps, compensated for ego-motion, and associated with each pre-NMS 3D candidate through a range-dependent gate. Compact features summarizing support, Doppler speed and spread, range residual, and offset are then appended to every camera-LiDAR pair before a lightweight fusion network rescores the candidates. We first verify that our fusion implementation reproduces CLOCs on KITTI. We then evaluate on the daytime clear-weather subset of the aiMotive dataset, reporting distance-binned metrics out to 200 m with frozen SECOND and Cascade R-CNN detectors. Camera-LiDAR CLOCs improves on SECOND up to 50 m but degrades beyond it. A residual scoring variant, introduced post hoc, corrects SECOND's score instead of replacing it and recovers most of this loss. Radar consistently improves BEV AP at 30-50 m (0.857 to 0.870), but beyond 50 m its gain is small (+0.003 center-distance AP), within seed variation, and CLOCs-R with residual scoring is statistically tied with LiDAR-only SECOND. Our analysis attributes the limited long-range benefit to weak separation of true and false detections by radar features, scarce far-range training positives, poor camera evidence at distance, and missing LiDAR proposals that rescoring cannot recover. We report all as-designed and post hoc results side by side.",
    "published": "2026-11-03T04:30:22Z",
    "updated": "2026-11-03T04:30:22Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.04300"
  },
  {
    "id": "2611.04296",
    "title": "SEAM: Situated Executable Associative Memory for a Co-located Community",
    "authors": [
      "Keru Wang",
      "Michael Xu",
      "Ken Perlin",
      "Nebojsa Jojic",
      "Andrzej Banburski-Fahey"
    ],
    "abstract": "In groups, knowledge is distributed among individuals, and how it is brought together depends on social ties. Taking inspiration from how a single mind recalls and reacts to memories and current stimulus, we build a shared memory that does this for a community, prototyped as a social app, SEAM. Members post arbitrary moments; SEAM works out how fragments relate, distills knowledge about the group, and replies in a situated and associative way. Some of these memories act as instructions that can alter how the system behaves, making it programmable by its members. We deployed SEAM to 46 people in a co-located community for two weeks of open-ended use, and ran a follow-up workshop with 14. Members shared their days, interrogated the memory, and instructed it to track routines and run games; replies introduced them to people and subjects they had never encountered. SEAM points towards communities where knowledge finds people.",
    "published": "2026-11-03T04:24:20Z",
    "updated": "2026-11-03T04:24:20Z",
    "categories": [
      "cs.HC",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.04296"
  },
  {
    "id": "2611.04295",
    "title": "Reciprocity Can Erase Direction:tructural Boundaries and Controlled Utility of Magnetic Graph Networks",
    "authors": [
      "Dawei Han",
      "Zicheng Wang",
      "Yaoxing Ren",
      "Yi Lv",
      "Rongqian Wu",
      "Fumin Wang"
    ],
    "abstract": "Magnetic graph networks encode direction through phase, but a learned graph can erase the intended directional mechanism before prediction. We characterize this failure for support-based magnetic Laplacians. Exact identities relate imaginary energy and distance from zero phase to amplitude-weighted reciprocity. Top-$k$ selection forces complete collapse when the observed-node count satisfies $m\\leq k+1$, and dense support imposes a lower bound on reciprocal-arc fraction. We then construct paired propagation examples with identical node features and symmetric amplitudes but opposite labels, giving a provable chance-level limit for direction-erasing representations. In 72 fixed neural fits, support phase achieved test AUROC 1.0000 on a unilateral ring but 0.5000 on reciprocal ring and complete supports; continuous score phase and a real directed comparator achieved 1.0000 throughout. All models solved the direction-free control. These are oracle-direction mechanism tests, not evidence of learned clinical direction. In the preserved public DeepDRiD development study, continuous phase was active but its robustness difference from zero phase was only $+0.0036$ (descriptive 95\\% interval $-0.0014$ to $+0.0095$) on validation patients used for checkpoint selection. The contribution is a structural and experimental framework for distinguishing erased direction from unestablished task utility. It provides a precise circumstance in which magnetic phase preserves useful information, without asserting universal or clinical superiority.",
    "published": "2026-11-03T04:21:29Z",
    "updated": "2026-11-03T04:21:29Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.04295"
  },
  {
    "id": "2611.04289",
    "title": "When Debate Amplifies Risk: Social-Bias Vulnerabilities in Multi-Agent Safety Deliberation",
    "authors": [
      "Qinghua Mao",
      "Xi Lin",
      "Yuxin Qi",
      "Zihao Xu",
      "Jinze Gu",
      "Yuliang Chen"
    ],
    "abstract": "Retrieval-augmented Web applications increasingly employ multi-agent debate (MAD) to aggregate conflicting, noisy, and heterogeneous information, yet deliberation is fundamentally a social process susceptible to interpersonal dynamics. When retrieved Web sources contain latent hazards alongside safe factual content, social biases such as conformity pressure and authority deference can override evidence-grounded safety boundaries. In this work, we investigate whether the social structure of deliberation can paradoxically amplify latent Web safety risks. We introduce SafeConflict-Bias, a controlled counterfactual diagnostic protocol spanning six core Web risk categories, which holds queries and retrieved evidence strictly invariant while isolating conversational majority sway, authority cues, and confidence asymmetry. Empirical evaluation across diverse proprietary and open-source backbones reveals that while isolated models reliably reject unsafe guidance, standard MAD catastrophically capitulates to social pressure---surging unsafe adoption from 0.0\\% up to 100.0\\% and systematically silencing safe minority evidence. To resolve this systemic fragility without retraining or debate regeneration, we propose RiskTrace-Debias, an inference-time auditing framework uniting evidence-first precommitment, social-metadata masking, and consistency-gated arbitration. RiskTrace-Debias suppresses worst-case unsafe adoption to $\\le 2.0\\%$ across all architectures without inducing over-refusal, while generating verifiable provenance traces to audit interpersonal manipulation in Web deliberation.",
    "published": "2026-11-03T04:16:06Z",
    "updated": "2026-11-03T04:16:06Z",
    "categories": [
      "cs.CR",
      "cs.AI",
      "cs.CY"
    ],
    "url": "https://arxiv.org/abs/2611.04289"
  },
  {
    "id": "2611.04287",
    "title": "Predicting protein structures at any folding stage from sequence",
    "authors": [
      "Lisheng Zhang",
      "Qingsong Li",
      "Zinan Xie",
      "Yanting Yang",
      "Qikui Yang",
      "Peng Lu",
      "Zhican Fu",
      "Wentao Cui",
      "Runtong Hou",
      "Zhengwei Xie"
    ],
    "abstract": "Protein structure prediction has largely focused on native conformations, leaving the continuum of unfolded states, folding intermediates, and native structures difficult to access. We present FoldScape, a sequence-conditioned deep learning framework for generating protein conformational ensembles at specified folding fractions $Q$. Trained on approximately one million conformations from 10,000 protein sequences, FoldScape combines coarse-grained folding and all-atom mechanical-unfolding trajectories. It reconstructs three-dimensional $C_α$ chains through hierarchical sliding-window regressions of inter-residue distances, chain-level assembly, and a rectified-flow decoder. By conditioning on folding progress, FoldScape generates conformations from unfolded states through intermediates to native-state structures without protein-specific molecular dynamics at inference. In matched-sample comparisons, FoldScape achieves median conformational-space coverage of 0.989, 0.722, and 0.877 along radius of gyration, fraction of native contacts $Q$, and secondary-structure fraction, respectively, versus 0.05, 0.05, and 0.10 for seed-varied AlphaFold 3 ensembles. Coverage advantages are consistent across the evaluated proteins and robust to binning choices. Reconstruction accuracy remains approximately stable across the evaluated stages of a folding trajectory, and stride-one crop-and-superpose inference extends predictions to chains several times longer than the single-pass limit. Analyses of mechanical-unfolding trajectories show residue-resolved pathways, reproducible extension-conditioned observables across pulling velocities, and geometrically coherent segments in partially unfolded chains. FoldScape extends sequence-based structure prediction beyond a single folded endpoint to controllable conformational-ensemble generation across protein folding.",
    "published": "2026-11-03T04:15:20Z",
    "updated": "2026-11-04T03:46:56Z",
    "categories": [
      "q-bio.BM",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.04287"
  },
  {
    "id": "2611.04286",
    "title": "GroundSeek-CXR: Retrospective Evaluation-Guided Active Observation Framework for Multi-Label Chest Radiography Diagnosis",
    "authors": [
      "Yihang Fu",
      "Xinyu Liu",
      "Qing Xu",
      "Xiaofeng Yang",
      "Zhen Chen"
    ],
    "abstract": "Chest radiography (CXR) diagnosis is critical for thoracic disease assessment, yet challenged by the need to identify subtle lesions and co-occurring abnormalities across regions. While recent vision-language models can actively observe local regions, existing preference-based methods supervise each observation by its immediate effect on the current diagnosis, failing to capture how each observation and stopping decision contributes to the final diagnosis. To address this issue, we propose GroundSeek-CXR, an active CXR diagnosis framework that learns observation and stopping decisions by retrospectively evaluating them with the final diagnosis. Specifically, we first devise a Retrospective Diagnostic Evaluation (RDE) that scores observation and stop candidates from offline Monte Carlo tree search through independent continuations. Moreover, we design a Retrospective Gap-weighted Preference Optimization (RGPO) that learns from retrospective-score preferences weighted by their score gaps, prioritizing actions that improve diagnostic accuracy. Extensive experiments demonstrate that our GroundSeek-CXR framework outperforms state-of-the-art methods, and improves abnormal-image sample-F1 by 4.48% over immediate-score preference learning.",
    "published": "2026-11-03T04:14:56Z",
    "updated": "2026-11-03T04:14:56Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.04286"
  },
  {
    "id": "2611.04284",
    "title": "OmniScribble: Mixed-Initiative Authoring of Animated Sketches through Inspectable and Repairable AI Decisions",
    "authors": [
      "Hien Trinh",
      "Tan-Hiep To",
      "Trung-Nghia Le"
    ],
    "abstract": "AI-assisted creative tools reduce the effort of authoring content, but delegating creative decisions to AI can make it difficult for authors to understand, correct, or redirect work. We present OmniScribble, a system for animating multi-object sketches that treats object decomposition and motion planning as editable artifacts. Rather than generating animation end-to-end, OmniScribble presents AI proposals at verification checkpoints, where authors can accept, repair, or regenerate them. Both manual and AI-assisted authoring operate on the intermediate representation and rendering pipeline, allowing us to isolate AI delegation. In a within-subject study with eight participants, AI-assisted authoring yielded a median within-participant reduction in completion time of 71.4\\%, while perceived control and motion-intent alignment remained high. Interaction traces and interviews show that participants adapted to AI errors by repairing local issues, regenerating mismatches, and accepting proposals. These findings suggest that inspectable, repairable delegation enables generative automation while maintaining control over the outcome.",
    "published": "2026-11-03T04:13:11Z",
    "updated": "2026-11-03T04:13:11Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2611.04284"
  },
  {
    "id": "2611.04279",
    "title": "Bidirectional Centered Score Matching for Discrete Diffusion Distillation",
    "authors": [
      "Peng Tu",
      "Baoyou Chen",
      "Haoyuan Xia",
      "Zilong Dong",
      "Weihao Yuan",
      "Siyu Zhu"
    ],
    "abstract": "Discrete diffusion models with parallel decoding are often distilled using token-wise KL objectives. Although token-wise KL exactly matches the corresponding product-form block distributions, its probability-space optimization geometry and teacher-only candidate truncation may provide insufficient supervision under aggressive few-step distillation. Concrete Score Matching (CSM) provides an alternative within-position objective by aligning relative logit geometry, but its complete pairwise form incurs \\mathcal{O}(|\\mathcal{V}|^2) complexity. We propose Bidirectional Centered Score Matching (BCSM), an efficient within-position distillation objective that constructs an \\mathcal{O}(K) bidirectional active set, reduces pairwise comparisons to \\mathcal{O}(K^2), and factorizes them into an \\mathcal{O}(K) objective. We further introduce cross-timestep transition alignment. Experiments demonstrate strong quality--efficiency trade-offs, including up to 6\\times NFE reduction with a 16.9\\% relative HumanEval gain and a 15.1\\% relative MMMU gain at single-step inference.",
    "published": "2026-11-03T04:05:41Z",
    "updated": "2026-11-04T03:21:50Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.04279"
  },
  {
    "id": "2611.04277",
    "title": "Harness-S: Learning from Sibling Harnesses for Generalizable Agent Training",
    "authors": [
      "Kangning Zhang",
      "Wenxiang Jiao",
      "Bowen Fang",
      "Shuai Shao",
      "Jiachen Zhu",
      "Rong Shan",
      "Shijian Wang",
      "Hao Wang",
      "Yuan Lu",
      "Weiwen Liu",
      "Weinan Zhang"
    ],
    "abstract": "Harness evolution from a common base exhibits Locality, Complementarity, and Nonstationarity: variants repair different failures, and their utility changes as the policy learns. Rather than seeking a universally superior harness, we introduce Harness-S to selectively rescue failures of a base execution system through sibling harnesses and transfer the resulting capabilities into a single policy that remains effective under the original harness. Directional Harness Evolution develops specialized sibling harnesses along distinct repair directions, forming a reusable Sibling Harness Pool that remains fixed during policy training. Complementary Harness Rescue Training invokes this pool only when all initial attempts under the base harness fail. The same policy generates fresh rollouts under selected auxiliary harnesses, and these trajectories replace the failed group for reinforcement learning. An Adaptive Harness Router selects the Top-k variants using Harness Behavior Profiles and voting across multiple LLMs. Policy-aware profile re-anchoring refreshes this evidence as the policy learns. Across AppWorld, SWE-Gym, and DBBench, the trained policy substantially outperforms policy-only training when returned to the original base harness. Behavioral analyses and held-out cases support the transfer of harness-elicited behaviors into the policy itself. Reusing the router for Rank-1 inference provides additional gains at the same executor rollout count.",
    "published": "2026-11-03T04:03:44Z",
    "updated": "2026-11-03T04:03:44Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.04277"
  },
  {
    "id": "2611.04268",
    "title": "Weight-Space Programming for Improving Image-Restoration Diffusion Models: Technical Conjectures and a Recursive Improvement Loop",
    "authors": [
      "Zhuoran Zheng",
      "Doubao"
    ],
    "abstract": "Can an LLM directly edit the weights of a diffusion-based image-restoration model to \\emph{improve} restoration quality---without gradients, paired data, or fine-tuning? Recent experiments show frontier LLMs can fix structural bugs by modifying as little as \\(0.016\\%\\) of parameters, but cannot instill new capabilities. We ask whether weight-space programming (WSP) can move from \\emph{debugging} to \\emph{improvement} in the precise-regression setting of image restoration (deblurring, super-resolution, denoising, inpainting). Restoration diffusion UNets present a middle ground: low-level signal-processing layers are concentrated enough for targeted weight-direction edits, while high-level semantic layers remain distributed and resistant to sparse modification. We propose three technical conjectures: (C1) an LLM can localize the layer behind a quality gap (over-smoothing, color shift, hallucinated texture) within a 200 forward-pass budget; (C2) editing a small set of identified weight directions (e.g., scaling high-frequency filter norms, correcting output-bias channels) can measurably improve PSNR and perceptual quality; (C3) a recursive loop---diagnose \\(\\rightarrow\\) edit \\(\\rightarrow\\) evaluate \\(\\rightarrow\\) re-diagnose---can compound gains across rounds, forming a minimal recursive self-improvement (RSI) loop for vision. We analyze the required AI capability (arguing targeted edits need not superintelligence, while general capability generation does) and detail the challenges of precise pixel-level regression. We provide a PyTorch-style deployment pipeline and outline a benchmark. This manuscript is conjectural, intended to open a new subtopic for image restoration.",
    "published": "2026-11-03T03:56:44Z",
    "updated": "2026-11-03T03:56:44Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.04268"
  },
  {
    "id": "2611.04264",
    "title": "Reliability Stress Testing of RAG Retrieval under Query-Relevant Corpus Poisoning",
    "authors": [
      "Janet Sung",
      "Kainan Zhou",
      "Gangzhen Qian",
      "Hang Xiao",
      "Lu Yi"
    ],
    "abstract": "External text can affect a retrieval-augmented generation (RAG) system only after the retriever admits it to the model context. We stress this admission step while varying document content, attacker query information, per-target poison budget, and contamination scope. Across 623 Benchmarking Information Retrieval (BEIR) queries from SciFact and NFCorpus, five query-targeted documents per query reduce classical-retriever nDCG@10 by 40.2-61.5% in isolated-target stress. Full-query anchoring explains most Best Matching 25 (BM25) degradation, whereas appended text also shifts latent semantic analysis (LSA) and Hybrid rankings. A pretrained BGE-small validation reaches 100% target exposure for query-only P=5 on both datasets; adding the injection payload changes SciFact nDCG only from 0.269 to 0.271 and lowers NFCorpus exposure slightly to 98.8%, indicating that query anchoring remains the dominant retrieval-side factor for this dense model. Query length materially changes the interpretation of partial-information attacks: on 162 long SciFact queries, two random terms cover 19.9% of eligible terms and still yield 39.5% Hybrid target exposure. Multi-target contamination adds cross-target interference. Overlap-based admission can remove full-query poisons but may sharply reduce clean retrieval utility, and maximal marginal relevance (MMR) leaves exposure unchanged under the tested configuration. The study measures retrieval-layer failures, not downstream instruction following.",
    "published": "2026-11-03T03:52:58Z",
    "updated": "2026-11-03T03:52:58Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.04264"
  },
  {
    "id": "2611.04262",
    "title": "Sketch-Omni: Instance-Level Sketch-Based Visual Prompting for Perception MLLMs",
    "authors": [
      "Dongyu Wang",
      "Dar-Yen Chen",
      "Zhiming Hong",
      "Arkaprabha Basu",
      "Yi-Zhe Song"
    ],
    "abstract": "Promptable perception, from GroundingDINO to Rex-Omni, puts one model behind one prompt interface and returns coordinates for any localisation task. Every model in that line was built for photographs; none has been given a sketch. We present Sketch-Omni, to our knowledge the first perception MLLM built to work on sketches and from them. On a sketch, the sketch is the image, and text prompts detect, point, resolve object and spatial referring expressions, and ground affordances in it. From a sketch, the sketch is the prompt, and a drawing of one object localises that object in a photograph, even among several of the same category, a query that neither a category name nor a photo exemplar can pose. Two obstacles stand in the way. A photo-trained model's attention is tuned to colour and texture, which a sketch does not have, and no dataset pairs a drawing with the one instance it depicts among others of its kind. We build the training data instead of collecting it. An edge detector turns every labelled photograph into a sketch-like drawing that keeps the photograph's labels, and two constructions produce sketch-to-photo instance pairs from existing data. On top of this, photo-guided relation alignment passes each photograph and its edge sketch through the same model and trains the sketch pass to reproduce how the photograph pass relates phrases to patches and patches to each other. Not one training label is drawn by hand. Sketch-Omni reaches 91.4 F1 on sketch-prompted localisation against 81.8 for the strongest general-purpose MLLM, with a lead that doubles when the photograph holds several instances of the queried category, and it is best in 39 of 40 evaluation cells across six tasks. Code, model, and a hand-annotated benchmark of 2754 sketch-to-photo links will be released.",
    "published": "2026-11-03T03:52:45Z",
    "updated": "2026-11-03T03:52:45Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.04262"
  },
  {
    "id": "2611.02815",
    "title": "Predictive Safety Guardrails Do Not Always Make LLM Agents Safer",
    "authors": [
      "Weixiang Zhao",
      "Zhihao Liu",
      "Guancheng Li",
      "Yanyan Zhao",
      "Bing Qin",
      "Ting Liu"
    ],
    "abstract": "Large language model agents increasingly take consequential actions in digital and physical environments, where safety risks may emerge only after multiple interaction steps. This has motivated world-model-driven predictive safety guardrails, which anticipate future consequences before execution. However, existing evaluations largely focus on end-to-end safety outcomes, leaving unclear whether safety gains arise from reliable prediction and faithful use of predicted risks. In this work, we systematically diagnose the prediction-to-action pipeline along three dimensions: how world-model predictions are integrated into decision making, whether the predictions themselves are reliable, and whether their content is faithfully used. Across seven policy models and two safety environments, we find that stronger prediction involvement does not yield monotonic safety gains and can reduce task completion while substantially increasing inference cost. We further find that world-model predictions remain insufficiently reliable, especially over longer horizons, where safety prediction degrades substantially relative to near-term forecasting. Finally, we find that safety gains can persist even under corrupted predictions, while locally verified predictions still leave subsequent safety violations, showing that predictive content is not faithfully incorporated into the decision process. Together, these findings expose a fundamental prediction-to-action gap in current predictive guardrails: producing more or seemingly accurate foresight is insufficient unless that foresight is both reliable and faithfully translated into safer decisions.",
    "published": "2026-11-02T09:19:22Z",
    "updated": "2026-11-02T09:19:22Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.02815"
  },
  {
    "id": "2611.02809",
    "title": "Offline Approximate Value Iteration: A Reinforcement Learning Approach for Satellite Constellation Deployment",
    "authors": [
      "Tristan Leuridan",
      "Yiping Fang",
      "Adam Abdin"
    ],
    "abstract": "This paper introduces a reinforcement learning-based approximate dynamic programming approach to optimize the deployment of Walker-type satellite constellations under uncertainties, including launch failures and satellite malfunctions. We formulate the problem as a Markov Decision Process that incorporates low-injection orbit launches, continuous low-thrust orbit raising, and variable satellite loads. We adopt the offline approximate value iteration solution method, using linear function approximation with basis functions and action pruning strategies to substantially reduce the computational and memory requirements for finding optimal decision policies. Preliminary results demonstrate convergence to policies with low expected costs and deployment times, both of which are lower than those of a rolling-horizon baseline, showcasing a novel application of approximate dynamic programming in space logistics.",
    "published": "2026-11-02T09:17:21Z",
    "updated": "2026-11-02T09:17:21Z",
    "categories": [
      "cs.AI",
      "math.OC"
    ],
    "url": "https://arxiv.org/abs/2611.02809"
  },
  {
    "id": "2611.02807",
    "title": "Creating Hybrid Interactive Narrative Systems with LLM: From Formal Description to Evaluation",
    "authors": [
      "Jules Clerc",
      "Domitile Lourdeaux",
      "Mohamed Sallak",
      "Marc Ravaine"
    ],
    "abstract": "Interactive narratives let users shape a story while an Experience Manager (EM) keeps it coherent, balancing player freedom against authorial control. Large Language Models now enable a new generation of hybrid EMs, which combine run-time generation from free-text input with symbolic narrative control. However, their heterogeneity makes them hard to compare: A manager's behaviour is generally tied to the unique and specific scenario in which it operates, and much of its decision-making takes place outside of any explicit and verifiable structure. We address this with an LLM-based narrative platform whose managers are interchangeable modules operating over a shared symbolic world model of facts, operations, and goals. Because every applied operation carries explicit preconditions and effects, each session can be analysed as a plan through a common state-transition representation and evaluated, independently of how the manager works internally, with shared indicators of four properties: player agency, EM controllability, author intent, and robustness. We implement three contrasting managers, based respectively on open generation, Monte Carlo repair, and autonomous characters, and compare them through functional analysis on an interactive Little Red Riding Hood scenario. The results show that no manager dominates on every property, giving authors and EM designers a concrete basis to select a manager according to their priorities.",
    "published": "2026-11-02T09:15:01Z",
    "updated": "2026-11-02T09:15:01Z",
    "categories": [
      "cs.AI",
      "cs.CL",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2611.02807"
  },
  {
    "id": "2611.02803",
    "title": "OmniOPD: Stable On-Policy Distillation for Joint Audio-Video Generation",
    "authors": [
      "Zihao Fan",
      "Xin Lu",
      "Jie Huang",
      "Hexin Zhang",
      "Xueyang Fu",
      "Zheng-Jun Zha"
    ],
    "abstract": "Reinforcement learning (RL) elevates joint audio-video generation, but optimizing heterogeneous, modality-specific audio and video rewards often introduces cross-modal interference. On-policy distillation (OPD) alleviates this issue by transferring the capabilities of specialized audio and video RL teachers into a single student model. However, a significant imbalance in cross-modal token counts leaves audio with sparse supervision, causing unstable distillation. We observe that naively increasing the audio loss weight fails to solve this problem since audio learning relies heavily on visual context, indicating richer visual cues are crucial to offset sparse audio signals. To address this, we propose OmniOPD, a modality-wise on-policy distillation framework designed for balanced and stable audio-video generation. First, we construct privileged visual information using asymmetric noise scheduling, allowing the audio teacher to generate more informative targets from cleaner video context. Second, we introduce grouped multi-noise sampling to expand audio supervision coverage and stabilize training. Third, we introduce timestep-wise importance weighting based on teacher-student transition divergence, preserving reliable supervision while down-weighting unreliable learning signals, to stabilize fluctuations in audio learning. Evaluated on JavisBench and VBench demonstrate OmniOPD preserves audio quality while significantly enhancing video generation, achieving effective joint distillation.",
    "published": "2026-11-02T09:11:39Z",
    "updated": "2026-11-02T09:11:39Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.SD"
    ],
    "url": "https://arxiv.org/abs/2611.02803"
  },
  {
    "id": "2611.02801",
    "title": "Analysing the Narrative Paradox through Formal Models and Properties in Interactive Narrative",
    "authors": [
      "Jules Clerc",
      "Mohamed Sallak",
      "Domitile Lourdeaux",
      "Marc Ravaine"
    ],
    "abstract": "Interactive narratives aim to let players influence the unfolding of a story while preserving a coherent and satisfying narrative progression. This creates a central tension, commonly described as the narrative paradox, between player autonomy and narrative control. Experience Managers (EMs) manage the story by determining how the narrative progresses in response to player behaviour. Although this paradox is widely discussed, it is rarely modelled in a way that supports systematic analysis, simulation, and comparison across management strategies. This paper proposes a formal framework for modelling and analysing the narrative paradox as a trade-off between interdependent properties shaped by EM decisions. We represent interactive narrative behaviour through an extended state-transition system in which world states are connected by player actions and system events. From this model, we formalize key properties involved in the paradox such as the player agency, EM controllability, author intent, and robustness, and define quantitative indicators derived from simulated plans. These indicators make it possible to compare EM strategies according to their ability to balance freedom, control, and narrative satisfaction. A case study compares different EM policies, showing how simulations can reveal correlations and conflicts between properties and identify compromise zones in the design space. This work contributes a reusable modelling and analysis framework for studying the narrative paradox and evaluating heterogeneous interactive narratives on shared formal grounds, with a focus on supporting the comparison and testing of EM strategies.",
    "published": "2026-11-02T09:10:17Z",
    "updated": "2026-11-02T09:10:17Z",
    "categories": [
      "cs.AI",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2611.02801"
  },
  {
    "id": "2611.02797",
    "title": "SelfImprove-Bench: Evaluating Generalization in Self-Improving Agents",
    "authors": [
      "Bangrui Xu",
      "Jie Yang",
      "Sidi Chen",
      "Xuanhe Zhou",
      "Jiantao Qiu",
      "Qianyu Yang",
      "Zijie Wang",
      "Fan Wu",
      "Zhoufutu Wen"
    ],
    "abstract": "Recursively self-improving (RSI) systems are increasingly viewed as a promising means of accelerating progress toward artificial general intelligence. They aim to autonomously improve their capabilities by refining their working pipelines and recursively improving the strategies that guide subsequent refinements, with gains generalizing to unseen scenarios.However, existing evaluations lack reliable metrics to distinguish capability gains from scenario fitting, sustainable and extensible protocols for unseen tasks and difficulties, and fine-grained attribution of improvement to evolution traces. To this end, we propose SelfImprove-Bench,an RSI evaluation framework that organizes tasks into three primary capabilities (i.e., Exploring, Planning, Reasoning) as scenarios for guiding model evolution. We instantiated the tasks on games for controllability and reproducibility, and pairs them with scalable generation and orchestration driven by task templates and difficulty coefficients. Beyond task-level scores, SelfImprove-Bench organizes evaluation into generalization ladder levels G0 to G4 that measure how far gains transfer from training conditions. Experiments reveal that the evolutionary gains of existing RSI methods are inconsistent across generalization levels.",
    "published": "2026-11-02T09:08:12Z",
    "updated": "2026-11-02T09:08:12Z",
    "categories": [
      "cs.AI",
      "cs.CL",
      "cs.LG",
      "cs.MA"
    ],
    "url": "https://arxiv.org/abs/2611.02797"
  },
  {
    "id": "2611.02793",
    "title": "DrawOffer: Evidence-Grounded Longitudinal User-State Modeling for Career Support",
    "authors": [
      "Lele Xu",
      "Yuning Bian",
      "Yifan Yuan"
    ],
    "abstract": "Career-support assistants must distinguish user claims from evidence of current ability and withhold judgments when evidence is insufficient. DrawOffer separates language-model observation extraction from deterministic inference over source-linked records to maintain uncertain ability estimates, experience assessments, and revisable issues. We evaluate 102 fictional personas with 580 scored checkpoints, a historical full-context and Mem0 comparison, and three auxiliary knowledge-tracing datasets. On 37 test personas, DrawOffer passes 169/210 checkpoints; checkpoint-defined issue precision and recall are 0.875 and 0.636. Across three development simulations, 87.0% of checkpoint verdicts agree, including persistent failures. A cache-only development ablation replacing answer-evidence requirements with confidence-only settlement reduces majority-vote passes from 306 to 293 of 370 and issue precision from 0.927 to 0.725. Equalizing positive source weights improves predictive metrics without changing total passes; removing decay gives mixed results. These findings support an exploratory systems contribution centered on evidence sufficiency. Developer-authored scenarios, unmatched baseline models, historical test exposure, and incomplete public artifacts limit generalization and independent reproduction.",
    "published": "2026-11-02T09:05:03Z",
    "updated": "2026-11-02T09:05:03Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.02793"
  },
  {
    "id": "2611.02790",
    "title": "MultiMental-IAS: A Multimodal Driver Mental State Analysis Dataset for Context-Aware Non-IID Evaluation",
    "authors": [
      "Baran Can Gül",
      "Nagendra Pal Singh",
      "Anjana Arvind Naik"
    ],
    "abstract": "Robust driver-state modelling requires synchronized physiological, behavioural, and contextual signals, yet existing open resources typically target a single cognitive state, omit continuous vehicle context, or do not define evaluation protocols that expose inter-subject heterogeneity. We present Multimental-IAS, a multimodal driver mental-state dataset collected in a cockpit-in-the-loop simulation built on CARLA. It contains vehicle telemetry with scenario-context channels, four-channel EEG and three-channel PPG from a Muse 2 headband, and cabin-facing video from 23 participants, recorded in 148 trials (11.6 hours) under six induced states: Normal, Distracted, Alerted, Stressed, Relaxed, and Drowsy. We document the acquisition pipeline in detail and provide a benchmark with one protocol for all models: chronological within-subject splits, participant-disjoint cross-subject folds, validation-based model selection, and ablations over modalities, scenario-context channels, and signal normalization. Multimodal fusion reaches a macro-F1 of 0.94 for drivers seen during training. For unseen drivers, fusing driving dynamics with per-window normalized EEG/PPG raises macro-F1 from 0.408 (telemetry alone) to 0.485, consistently across all five folds, while the gap between the two protocols quantifies the inter-driver heterogeneity that personalized models must address. Multimental-IAS thus provides a concrete testbed for non-IID generalization, personalization, and federated learning in driver monitoring.",
    "published": "2026-11-02T09:03:14Z",
    "updated": "2026-11-02T09:03:14Z",
    "categories": [
      "cs.HC",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.02790"
  },
  {
    "id": "2611.02788",
    "title": "Rethinking Neural Decompilation: Candidate Selection as the Hidden Bottleneck",
    "authors": [
      "Felix Mächtle",
      "Gautham Sriram",
      "Manjil Neupane",
      "Nils Loose",
      "Thomas Eisenbarth"
    ],
    "abstract": "Reverse engineering obfuscated binaries is a core task in malware analysis and software security auditing. While neural decompilers based on Large Language Models (LLMs) have improved the readability and functional fidelity of recovered code over heuristic tools such as Ghidra and IDA Pro, a substantial gap remains between best-sample performance and practical single-output accuracy, particularly under code obfuscation. We study this gap through the lens of candidate generation and candidate selection. Using the LLM4Decompile architecture, we show that ground-truth tokens lie within the model's top-five next-token predictions in 95.6% of positions on average and that multi-sample decoding reaches a pass@100 of 93% on HumanEval-Decompile, indicating that correct reconstructions are typically already present in the model's sampling space. We then evaluate a generate-then-select pipeline that ranks 100 candidates per input with text-, syntax-, embedding-, consensus-, and likelihood-based selectors. Negative perplexity emerges as the strongest static selector on HumanEval-Decompile (73.3% pass@1), while execution-guided selection nearly closes the oracle gap on ExeBench (86.3% pass@1). Combined with one epoch of fine-tuning on our newly released ExeBench-Obfuscated dataset containing 362,647 obfuscated OLLVM samples, the same pipeline increases the pass@1 rate for obfuscated binaries to 88.8%, directly contradicting prior claims that released LLM4Decompile checkpoints are unsuitable for obfuscated inputs.",
    "published": "2026-11-02T09:02:54Z",
    "updated": "2026-11-02T09:02:54Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.02788"
  },
  {
    "id": "2611.02786",
    "title": "Local-Global Joint Modeling for Point Cloud Super-Resolution Guided by Multi-Scale Spatial Priors",
    "authors": [
      "Wang Yang",
      "Wenyi Ge"
    ],
    "abstract": "Range-image-based point cloud super-resolution provides an effective way to reconstruct sparse outdoor point clouds by projecting low-resolution LiDAR scans into a regular 2D representation. However, current methods still face three challenges. First, range images exhibit pronounced vertical nonuniformity, with sparse observations in distant regions and denser observations in nearby regions. Some cross-scale fusion mechanisms do not account for the varying reliability of features at different vertical positions, allowing invalid values and noise from distant sparse regions to propagate into the decoder. Second, a single convolutional or sequence-modeling architecture often struggles to preserve both local high-frequency geometric details and global long-range dependencies, resulting in over-smoothed reconstructions. Third, smooth transition depths near foreground-background boundaries can produce spike artifacts when the 2D range image is back-projected into 3D. To address these issues, we propose a point cloud super-resolution method based on multi-scale spatial priors and joint local-global modeling. The design comprises a spatially gated fusion module, a multi-granularity local-global cooperative perception module, and 2D median-residual denoising. Experiments on KITTI-360 and nuScenes demonstrate effective reconstruction, with IoU scores of 0.4703 and 0.3593, respectively, supporting the feasibility of the proposed method for range-image super-resolution.",
    "published": "2026-11-02T09:02:26Z",
    "updated": "2026-11-02T09:02:26Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.02786"
  },
  {
    "id": "2611.02782",
    "title": "History Forcing: Distilling History-Dependent Continuations for Long-Horizon Video World Models",
    "authors": [
      "Hangyi Kuang",
      "Chengzhi Wang",
      "Yefei He",
      "Weijie Wang",
      "Yuke Zhao",
      "Zhuokun Chen",
      "Zisu Huang",
      "Yifan Yang",
      "Xiaoxuan He",
      "Feng Chen",
      "Bohan Zhuang"
    ],
    "abstract": "Few-step autoregressive video diffusion enables efficient generation, yet maintaining consistency over long rollouts remains challenging, especially when subjects or scenes reappear after going out of sight. Despite progress in fidelity and rollout robustness, existing distillation methods do not fully exploit richer historical information to constrain the student's current prediction. To address this gap, we introduce \\textbf{History Forcing}, a unified on-policy distillation framework that strengthens historical supervision for few-step autoregressive video generators. The framework uses the residual between teacher predictions with and without informative historical context to decouple this supervision. Such a historical context can be obtained using earlier generated chunks with less accumulated drift or a fixed-view teacher rollout that keeps the scene visible while the student looks away. The residual is then weighted and added to the score or velocity prediction used for distillation, forming a corrected target. By aligning the student with this corrected target through distillation, History Forcing incorporates long-range historical constraints into autoregressive generation. Our method achieves state-of-the-art performance among 1.3B models, with a VBench quality score of 85.07 for 15s video generation and a VBench-Long aggregate score of 79.82 for 60s generation. For out-of-sight world modeling, evaluations further demonstrate more plausible scene evolution and more consistent states when the camera returns, with Evolution Quality improving from 2.35 to 2.70 on PlayWorld and Object Consistency from 58.43 to 62.18 on MemoBench.",
    "published": "2026-11-02T09:00:31Z",
    "updated": "2026-11-02T09:00:31Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.02782"
  },
  {
    "id": "2611.02780",
    "title": "Lookahead Prediction-Guided Adaptive Visual Refocusing for Interleaved Multimodal Reasoning",
    "authors": [
      "Mengzhao Wang",
      "Yanli Ji",
      "Peng Ye"
    ],
    "abstract": "Interleaved multimodal chain-of-thought reasoning improves the visual reasoning capabilities of multimodal large language models by dynamically incorporating visual evidence during reasoning. However, existing methods primarily select evidence from historical context. When the reasoning focus shifts, history-guided evidence may remain focused on prior regions and fail to cover the visual information required by the next step. We refer to this lag between visual evidence and subsequent reasoning demands as Temporal Evidence Myopia. To address this issue, we propose Lookahead Prediction-guided Adaptive Visual Refocusing (LPAVR), a training-free test-time framework. LPAVR transforms Multi-Token Prediction (MTP) from a decoding acceleration mechanism into a lookahead signal for anticipating upcoming reasoning intent. During MTP decoding, the draft head generates multiple future tokens, while the target model verifies them in parallel and retains the longest prefix consistent with its decoding trajectory. This target-verified prefix contains near-future semantics, which LPAVR uses to construct lookahead-guided visual evidence and assess whether history-guided evidence covers the indicated regions. If the coverage is sufficient, the history-guided evidence is retained; otherwise, LPAVR switches to the lookahead-guided evidence. This better aligns the visual context with upcoming reasoning and improves consistency between draft predictions and target-model decoding. Experiments on multiple multimodal reasoning benchmarks show that LPAVR improves both reasoning accuracy and the acceptance rates of MTP speculative tokens, jointly enhancing visual reasoning and speculative decoding efficiency.",
    "published": "2026-11-02T08:58:28Z",
    "updated": "2026-11-06T16:52:15Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.02780"
  },
  {
    "id": "2611.03723",
    "title": "EMBERS: Empirically Motivated Robustness Testing of Deep Research Systems via Defect-Guided Fuzzing",
    "authors": [
      "Shuochuan Li",
      "Zan Wang",
      "Dong Wang",
      "Yuhang Jiang",
      "Huajin Cui",
      "Chen Zhang",
      "Gang Wang",
      "Junjie Chen"
    ],
    "abstract": "Deep Research (DR) systems extend large language models into autonomous agents that decompose complex information needs, iteratively search the web, and synthesize evidence to answer challenging questions. However, their multi-stage execution may introduce robustness risks, as variations in user questions or intermediate search inputs may propagate across research stages and lead to incorrect answers. Existing evaluations focus on task-solving capabilities or robustness against external evidence disturbances, leaving intrinsic weaknesses in DR execution insufficiently explored. Thus, we conduct an empirical study of 1,932 execution trajectories from three representative DR systems and identify nine recurring defect categories across subquestion formulation, online search, and final reasoning. Guided by these findings, we propose EMBERS, an empirically motivated, defect-guided fuzzing framework for robustness testing of DR systems. Starting from correctly answered seed questions, EMBERS generates stage-targeted test inputs using defect-guided mutation, web-search-assisted fidelity assurance, and diversity-aware seed maintenance. Experiments across 16 framework--model--dataset settings show that EMBERS achieves 3.21 times the failure-discovery throughput of the strongest baseline under identical testing budgets. Human and LLM-assisted evaluations demonstrate that most generated inputs preserve the original information need and necessary contextual constraints. Moreover, model fine-tuning experiments show consistent-answer performance improvement, highlighting their value for robustness testing and model improvement.",
    "published": "2026-11-01T06:27:23Z",
    "updated": "2026-11-01T06:27:23Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.03723"
  },
  {
    "id": "2611.01627",
    "title": "EgoMo3R: Joint Egocentric Motion and Scene Reconstruction",
    "authors": [
      "Chaitanya Patel",
      "Yusuke Kato",
      "Rin Takahira",
      "Kazuki Kozuka",
      "Juan Carlos Niebles",
      "Ehsan Adeli"
    ],
    "abstract": "Understanding holistic 3D human motion and the surrounding environment from egocentric video is fundamental for applications in AR/VR and robotics. Although these tasks are inherently coupled, existing methods treat them separately. In particular, egocentric motion reconstruction methods typically assume access to metric, gravity-aligned camera trajectories from specialized inertial sensors. Recovering such trajectories from monocular egocentric video remains a significant challenge due to rapid head movements and motion blur. We present EgoMo3R, a joint optimization framework that simultaneously reconstructs 3D human motion and scene geometry from casual egocentric video. It leverages the robustness of low-level visuo-geometric primitives, including monocular depth, optical flow, and point tracks, integrated with a diffusion-based human motion prior via first-order optimization. We propose an alternating optimization scheme that establishes a synergistic feedback loop: scene reconstruction provides physical grounding and trajectory conditioning for the motion prior, while the motion prior regularizes the camera trajectory and anchors the scene in a metric, gravity-aligned world frame. We evaluate EgoMo3R on the highly dynamic sequences of the EgoExo4D and Nymeria datasets and show that it outperforms specialized baselines in both 3D scene reconstruction and egocentric motion estimation.",
    "published": "2026-11-01T06:20:11Z",
    "updated": "2026-11-01T06:20:11Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.01627"
  },
  {
    "id": "2611.01626",
    "title": "Special and General Computational Aesthetics",
    "authors": [
      "Ganqing Luo",
      "Chuan Li",
      "Liaoruxing Zhang",
      "Xin Jin"
    ],
    "abstract": "Computational aesthetics is a field at the intersection of computer science, artificial intelligence, aesthetics, and other disciplines. As AI has developed, the field has formed relations of inclusion, intersection, or support with computational art, AI art, AI aesthetics, AI-generated content (AIGC), computational creativity, affective computing, and neuroaesthetics. Without distinguishing scope, objectives, and methods, it may be narrowed to image aesthetic quality assessment or expanded into an umbrella term for AI's involvement in art. We analyze its internal structure and its relations with neighboring concepts, and propose a two-level scope: special computational aesthetics (SCA) and general computational aesthetics (GCA). SCA centers on aesthetic measurement and aesthetic process modeling. The former primarily corresponds to \"Aesthetic Perception\": computationally identifying and representing aesthetic attributes and predicting human aesthetic evaluations; the latter primarily to \"Aesthetic Understanding\": computationally describing, testing, and explaining how human aesthetic perception and judgment are formed. GCA extends this core to include \"Aesthetic Generation,\" namely artistic generation guided by computational aesthetic models. Some computational aesthetic tasks can also use non-AI methods. Research in this scope using AI algorithms and models we define as AI aesthetics, which may involve the special core and the general extension. \"Aesthetic Generation\" intersects with AIGC, AI art, and computational creativity, but belongs to the general extension defined here only when computational aesthetic models substantively constrain, guide, or optimize artwork generation. We also draw on Feng Peng's discussion of the computability of beauty, aesthetic experience, and art as a theoretical reference for clarifying boundaries between computational aesthetics and related concepts.",
    "published": "2026-11-01T06:19:21Z",
    "updated": "2026-11-01T06:19:21Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.01626"
  },
  {
    "id": "2611.01620",
    "title": "Chain-of-Thought Oversight Requires Separate Evidence for Faithfulness and Monitorability",
    "authors": [
      "Sichao Li",
      "Sai Ma",
      "Xiyang Hu",
      "Chudi Zhong",
      "Tongliang Liu"
    ],
    "abstract": "A common assumption in chain-of-thought (CoT) oversight is that a visible reasoning trace makes model behavior easier to monitor. We argue that this assumption can conflate distinct properties along a chain linking a model's internal computation, reasoning artifacts, outputs, and monitor judgments. We identify four properties along this chain: reasoning visibility (whether a trace is accessible), mechanistic faithfulness (whether a trace reflects internal computation), mechanistic localizability (whether a compact causal mechanism can be isolated), and behavioral monitorability (whether a monitor can detect the target behavior). Two complementary case studies across three open-weight reasoning models show why these distinctions matter. In the security vulnerability reasoning study, probes and activation ablations provide evidence of internal representation and causal influence, but a monitor with access to the reference answer does not outperform the majority-class baseline in a held-out test. In authority-hint factual reasoning study, a monitor correctly distinguishes changed from unchanged answers, but seven mechanistic analyses do not isolate a compact causal mechanism. These results show that evidence for one claim does not establish the others. We therefore propose an evidential-chain reporting standard. Each claim carries a licensing statement that specifies its target property, access tier, and artifact, and labels each required link as supported, unsupported, or assumed. These assessments determine whether the conclusion is licensed, conditionally licensed, or not licensed.",
    "published": "2026-11-01T06:16:34Z",
    "updated": "2026-11-01T06:16:34Z",
    "categories": [
      "cs.AI",
      "cs.CR"
    ],
    "url": "https://arxiv.org/abs/2611.01620"
  },
  {
    "id": "2611.01617",
    "title": "Seeing What Matters, Verifying What Pays: Load-Adaptive Speculative Decoding for Vision-Language Models",
    "authors": [
      "Hong Nie",
      "Zhangchi Gao",
      "Yuqian Liang",
      "Jun Yu",
      "Bo Wang",
      "Jianqing Sun",
      "Shengping Liu"
    ],
    "abstract": "Speculative decoding accelerates vision-language model (VLM) inference without altering the output distribution, yet two factors limit its gains. Existing drafters either lack the image evidence required for visually grounded tokens or pay to condition on every visual token, although a short draft block typically depends on only a few image regions. Moreover, the value of verifying additional candidates varies with GPU load, so no fixed verification structure is efficient across serving conditions. We present Uni-LaSpec, a block-parallel speculative decoding framework that addresses both factors. To improve draft quality, Uni-LaSpec reuses the verifier's own attention: the query retained from the preceding verification ranks the cached, int8-quantized visual keys, and a cross-layer vote selects a few visual tokens that the drafter fuses through gated cross-attention. Acceptance-aware training further weights each draft position by its contribution to the accepted prefix. To allocate verification, a marginal-cost criterion selects the structure per request and per round: draft trees exploit idle verifier capacity under light load, whereas a dynamic head truncates linear drafts under heavy load. Across six VLMs from three model families and 17 text and multimodal benchmarks, selecting eight visual tokens retains at least 98.6% of the acceptance obtained from the full image at sub-millisecond selection cost. With greedy decoding at concurrency one, Uni-LaSpec achieves up to 5.11x text and 3.24x multimodal throughput over autoregressive decoding. Across six load levels and three GPU types, it outperforms autoregressive decoding in every setting and matches or exceeds the best fixed verification strategy in 123 of 144 settings; under bursty arrivals, it reduces mean end-to-end latency by 47.6% relative to linear verification.",
    "published": "2026-11-01T06:09:55Z",
    "updated": "2026-11-01T06:09:55Z",
    "categories": [
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.01617"
  },
  {
    "id": "2611.01615",
    "title": "LLM-Enhanced Multimodal House Price Prediction using Structured, Textual, and Visual Features",
    "authors": [
      "Khandokar Md. Rahat Hossain",
      "Souvik Das",
      "Tahsina Hashem",
      "Mohammed Eunus Ali",
      "Tanzima Hashem"
    ],
    "abstract": "Accurate house price prediction is essential for real estate buyers, sellers, agents, and financial institutions. Traditional methods rely primarily on structured data, e.g., number of bedrooms, bathrooms, parkings, but they overlook rich contextual information embedded in textual descriptions and property photos. Previous deep learning approaches for house price prediction have fused multimodal data but they fall short to extract structured spatio-temporal and contextual features from texts and semantic visual information from images. In this paper, we introduce a novel multimodal framework that addresses these limitations by systematically integrating structured attributes, textual descriptions, and visual images of properties to achieve higher prediction accuracy while maintaining interpretability. We use a large language model to derive domain-specific spatio-temporal and contextual features from text, and an unsupervised vision-language approach to automatically group photos into meaningful classes like indoor, outdoor, mixed, or floorplan, that are commonly present in real-world house listings. These categories are created without manual labeling by aligning image clusters with carefully designed pseudo text prompts. We fuse all features into a unified representation and use an optimized regressor to predict prices. Experiments on a large real-world property dataset demonstrate that our method outperforms traditional methods and existing multimodal baselines. Ablation studies confirm that the novel textual feature extraction and categorized visual embeddings substantially contribute to more accurate and reliable price predictions.",
    "published": "2026-11-01T06:07:04Z",
    "updated": "2026-11-01T06:07:04Z",
    "categories": [
      "cs.LG",
      "cs.CL",
      "cs.CV",
      "cs.IR"
    ],
    "url": "https://arxiv.org/abs/2611.01615"
  },
  {
    "id": "2611.01612",
    "title": "Halal-NeSyNet: Clause-Scoped Neuro-Symbolic Cross-Attention for Automated Food Ingredient Auditing and Risk-Aware Halal Logistics Triage",
    "authors": [
      "Mochamad Rizal Fauzan",
      "Naila Nursyifa",
      "Irgi Surya"
    ],
    "abstract": "Verifying that a packaged food is Halal requires reading ingredient declarations and E-number additives before goods enter certified warehouses. Dual-origin additives such as E471, E422, E441 and E920 are Mushbooh (doubtful) unless a botanical, microbial or certified-Halal qualifier appears in the same ingredient clause, so a plant-based qualifier on one clause must not clear an unqualified additive in another. We call a failure to respect this scope cross-clause modifier confounding and build a benchmark of 3,199 items (277 Open Food Facts records and 2,922 template-generated clause-swap items, labelled by an explicit 50-code rule base rather than by a certification authority) with a 540-item counterfactual suite. We propose Halal-NeSyNet, which couples a DistilBERT encoder with a 16-dimensional rule-derived symbolic vector through cross-attention and gated fusion, trained with an asymmetric false-Halal risk loss. Over five seeds, text-only TF-IDF baselines reach 86.25-86.71 % accuracy with 13.42-21.73 % false-Halal leakage and 6.33-26.00 % counterfactual triad consistency, whereas Halal-NeSyNet reaches 97.04+/-0.34 % and 99.67+/-0.50 %. Gradient boosting given the same symbolic vector reaches 96.25+/-1.24 % (+0.59 points from Halal-NeSyNet, 95 % CI [-1.11, +2.28]), so most of the gain comes from clause-scoped symbolic features and not from the network, and the risk loss did not help. Holding out whole template families, text-only models fall to 61.91-78.35 %, Halal-NeSyNet to 90.87+/-11.76 % and logistic regression with the symbolic vector to 91.11+/-2.88 %, with far more spread for Halal-NeSyNet. A three-lane receiving simulation auto-clears 49.33 % of cargo at 0.76 % green-lane contamination. Because labels and features come from one rule engine and 91.3 % of the items are templated, the results measure fidelity to a rule policy, not religious certification.",
    "published": "2026-11-01T05:56:41Z",
    "updated": "2026-11-01T05:56:41Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.01612"
  },
  {
    "id": "2611.01607",
    "title": "NatureFusion: Rethinking Infrared and Visible Image Fusion as Natural Complementary Enhancement",
    "authors": [
      "Jianfeng Ding",
      "Linfeng Tang",
      "Hao Zhang",
      "Han Xu",
      "Xunpeng Yi",
      "Yibing Zhang",
      "Meiqi Gong",
      "Zhongyuan Wang",
      "Jiayi Ma"
    ],
    "abstract": "In the absence of ground truth, most existing infrared and visible image fusion methods pursue fidelity to the source images and directly superimpose two physically distinct modalities. As a result, salient infrared targets appear as bright patches of thermal radiation pasted onto the scene. These patches obscure the original color and texture of the targets, so the fused images look unnatural to human observers and deviate from the data distribution learned by vision models pretrained on visible images. Therefore, we redefine infrared and visible image fusion as natural complementary enhancement rather than source fidelity, and propose NatureFusion, which exploits cross-modal complementary cues to infer a clear and natural visible-style image from low-quality visible and infrared image pairs. Specifically, to address the lack of ground truth, we employ a generative foundation model as the teacher to directly generate visually natural fused images for supervision. Furthermore, to fully distill the teacher's generative capability while reducing computational cost, we fine-tune a pretrained generative model with conditional flow matching through a light-weight fusion adapter. Last but not least, to further improve downstream performance without sacrificing natural appearance, we freeze the fusion adapter and introduce a detector-supervised task adapter that strengthens the complementary contribution of infrared. Extensive comparisons with seven multi-modal fusion and seven single-modality enhancement methods demonstrate that NatureFusion generates visually natural fused images with the best perceptual quality. Detection and segmentation models pretrained on visible images achieve substantially higher accuracy on our fused images than on those of any competing method.",
    "published": "2026-11-01T05:52:10Z",
    "updated": "2026-11-01T05:52:10Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.01607"
  },
  {
    "id": "2611.01605",
    "title": "MedNet and U$^2$-ViT: A Nested Vision Transformer Diffusion Framework for Diverse Medical Images Generation",
    "authors": [
      "Lakshmikar R. Polamreddy",
      "Jialu Li",
      "Youshan Zhang"
    ],
    "abstract": "The scarcity of diverse, high-quality medical images remains a significant bottleneck in advancing AI-driven medical diagnostics and treatment planning. Traditional datasets often suffer from class imbalances, limited disease coverage, and insufficient variations in imaging conditions - challenges that hinder the development of robust, generalizable models. To address this, we introduce MedNet, a large-scale, multi-modal text-to-image dataset spanning 61 disease categories with 160 classes, covering both humans and animals. We built this with images from trusted public repositories, ensuring data diversity, quality, and ethical compliance. Additionally, we propose U$^2$-ViT, a novel diffusion-based text-to-image generation architecture arranging Vision Transformers (ViTs) in a nested U-Net structure to enhance the generation of diverse, and high-fidelity medical images. Through extensive experiments, we demonstrate that our model achieves the best Fr'echet Inception Distance (FID) score compared to state-of-the-art models. The source code is available at https://github.com/LakshmikarPolamreddy/MedNet-U2-ViT.",
    "published": "2026-11-01T05:42:29Z",
    "updated": "2026-11-01T05:42:29Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.01605"
  },
  {
    "id": "2611.01603",
    "title": "DyRadio: Spatiotemporal Diffusion for Dynamic Radio Map Reconstruction",
    "authors": [
      "Zhijie Fan",
      "Zhifeng Zhao",
      "Rongpeng Li"
    ],
    "abstract": "Accurate radio map (RM) reconstruction is essential for environment-aware wireless networks. Sampling-based methods, which infer radio conditions from sparse measurements, are widely adopted because they do not require explicit knowledge of transmitter configurations. However, in dynamic environments, time-varying propagation conditions cause RMs to evolve, complicating reconstruction from temporally distributed sparse observations. Although cross-frame observations provide complementary spatial information, their direct aggregation can introduce temporal state mismatch. Furthermore, unknown measurement noise adds to the reconstruction difficulties. To address these challenges, we propose DyRadio, a framework that integrates spatiotemporal RM reconstruction with unknown noise estimation. Specifically, a propagation-prior-guided, noise-conditioned spatiotemporal diffusion model (DM) jointly reconstructs consecutive RMs by capturing cross-frame dependencies, while adapting to measurement noise levels. To estimate the noise level, an iterative predictive likelihood method alternates between DM-based blind-area prediction and noise-level updates. The estimated noise level then conditions reconstruction of the complete RM sequence. Experimental results demonstrate superior reconstruction accuracy and robustness against measurement noise, with peak signal-to-noise ratio (PSNR) improvements of 1.18-5.75 dB over the best-performing baseline across all evaluated settings.",
    "published": "2026-11-01T05:39:31Z",
    "updated": "2026-11-01T05:39:31Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.01603"
  },
  {
    "id": "2611.01601",
    "title": "Accurate automated photo-identification of Near Eastern and European fire salamanders",
    "authors": [
      "Maayan Yesharim",
      "Hava Goldstein",
      "Gabi Kolodny",
      "Assaf Ben-Levy",
      "Tamar Kis-Papo",
      "Dor Gavish",
      "Rotem Vidan",
      "Nirit Lavie-Alon",
      "Olga Rybak",
      "Yoav Ram"
    ],
    "abstract": "Photo-identification underpins non-invasive capture-recapture monitoring of amphibians, but manual identification becomes slow and error-prone as reference libraries grow. Focusing on the Near Eastern fire salamander (Salamandra infraimmaculata), we developed a pipeline based on zero-shot local-feature matching (SuperPoint and LightGlue) without species-specific training and evaluated it on $2{,}440$ field photographs from Haifa and Tel Dan in northern Israel. We isolated the yellow spot pattern, scored image similarity by the number of high-confidence keypoint matches, which reduced a confound whereby many-spotted individuals accumulate spurious matches, and assigned identities across the database by two-tier clustering. Pipeline-assisted expert review corrected misidentifications, reducing the number of identities by almost a quarter. On held-out individuals, the pipeline ranked the correct individual first for $95.2\\%$ of queries and recovered identities with an ARI of $0.958$. Without modification, it reached $95.1\\%$ and $91.7\\%$ top-1 accuracy on two datasets of the European fire salamander (Salamandra salamandra) and recognised $93.7\\%$ of recaptures in one of them, compared with $38$-$77\\%$ for five established programs and $93.9\\%$ for visual inspection. Zero-shot local-feature matching thus offers amphibian monitoring a re-identification tool that needs no training data, transfers between related species, scales to databases of over a thousand individuals, and can audit existing databases before capture-recapture analysis.",
    "published": "2026-11-01T05:33:43Z",
    "updated": "2026-11-01T05:33:43Z",
    "categories": [
      "cs.CV",
      "q-bio.QM"
    ],
    "url": "https://arxiv.org/abs/2611.01601"
  },
  {
    "id": "2611.01600",
    "title": "SCOUT: Planning under Occlusion via Object-Centric World Model Rollouts",
    "authors": [
      "Amir Hossain Raj",
      "Xuesu Xiao"
    ],
    "abstract": "Robots manipulating in cluttered spaces must often plan from partial views where foreground objects occlude the target, surrounding geometry, and usable free space. Reactive policies often miss these hidden constraints, while exhaustive search becomes computationally prohibitive in dense clutter. We present SCOUT, an occlusion-aware planning framework that bridges high-level deliberation with grounded physical rollouts. SCOUT leverages an object-centric scene representation to reconstruct hidden geometry and derive a relational planning state capturing blocker hierarchies and accessibility corridors. To navigate the vast action space in clutter, an LLM proposes structured action candidates which are then rigorously evaluated via Monte Carlo Tree Search (MCTS) using a learned action-conditioned world model. Evaluations on 'Reveal' and 'Placement' tasks show that SCOUT outperforms Vision-Language-Action (VLA) policies, embodied agents, and 3D world models, with significant gains in long-horizon tasks requiring reasoning over occluded geometry. We further validate the framework's robustness through real-world robotic manipulation in a cluttered shelf environment.",
    "published": "2026-11-01T05:32:18Z",
    "updated": "2026-11-01T05:32:18Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.01600"
  },
  {
    "id": "2611.00974",
    "title": "Efficient Image Denoising on Smartphone GPUs: Mobile AI 2026 Challenge Report",
    "authors": [
      "Andrey Ignatov",
      "Georgy Perevozchikov",
      "Radu Timofte",
      "HaoDong Wu",
      "Desheng Cai",
      "Nikolay Falaleev",
      "Faraz Kayani",
      "Sarmad Kayani",
      "Asad Ahmed",
      "Dmitry Ignatov",
      "Kihwan Yoon",
      "Ganzorig Gankhuyag",
      "Yoonsuk Kang",
      "The Van Le",
      "Jin Young Lee",
      "Sunzhe Yang",
      "Qiuhai Yan",
      "Kang Chen",
      "Tingting Wang",
      "Faming Fang"
    ],
    "abstract": "Image denoising is a fundamental problem in mobile photography. Despite a large number of solutions proposed for this task, the majority of them are trained on synthetically produced noisy images, and are additionally too computationally heavy for processing full-resolution images on mobile devices. This creates a need for efficient deep learning-based models that are not only performant but can also be deployed on constrained mobile hardware. In this Mobile AI challenge, we address this problem and propose the participants to design fast solutions that can denoise Full HD resolution photos while running on popular smartphone GPUs from Qualcomm and Arm. For this, the participants were provided with a large-scale dataset consisting of noisy-clean image pairs captured in the wild. The runtime of all models was evaluated on the Snapdragon 8 Elite Gen 5 and Dimensity 9500 chipsets with the Adreno and Mali GPUs, respectively. Top solutions proposed in this challenge are able to perform high-quality image denoising under 100 milliseconds on both platforms while reaching a PSNR score of over 37 dB. A comprehensive description of the models developed in the challenge is provided in this paper.",
    "published": "2026-10-31T14:18:38Z",
    "updated": "2026-10-31T14:18:38Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.00974"
  },
  {
    "id": "2611.00963",
    "title": "4K Image Super-Resolution on Mobile NPUs: Mobile AI 2026 Challenge Report",
    "authors": [
      "Andrey Ignatov",
      "Georgy Perevozchikov",
      "Radu Timofte",
      "Fubin Ren",
      "Shihao Wang",
      "Liwen Zhang",
      "Zhe Xu",
      "Zhipei Lei",
      "Minjian Zhang",
      "Kailing Tang",
      "Dingyong Gou",
      "Yanlin Wu",
      "Cong Li",
      "Xiaohui Cui",
      "Kihwan Yoon",
      "Ganzorig Gankhuyag",
      "Heo MyeongCheol",
      "Yonghyun Park",
      "Juho Jung",
      "Sungjei Kim",
      "Phuong-Nam Nguyen-Pham",
      "Nam-Tien Le",
      "Tinh-Anh Nguyen-Nhu",
      "Matin Fazel",
      "Abdelhak Bentaleb",
      "Xinrui Li",
      "Xusheng He",
      "Jianlong Wu",
      "Mohsin Ikram",
      "Dmitry Ignatov",
      "Hao Chen",
      "Long Sun",
      "Jiangxin Dong",
      "Jinshan Pan",
      "Jinhui Tang",
      "Siyue Teng",
      "Yuxuan Jiang",
      "Fan Zhang",
      "David Bull",
      "Zhe Xiao",
      "Jun Xiao",
      "Zhi-Song Liu",
      "Jiayi Pei",
      "Songtao Wu",
      "Hong Shang",
      "Kuanhong Xu"
    ],
    "abstract": "Image super-resolution is widely used on mobile devices for upscaling various types of image data. This creates a need for efficient deep learning-based models that are not only performant but can also be deployed on neural processing units (NPUs) present in the majority of mobile and IoT chipsets. In this Mobile AI challenge, we address this problem and propose the participants to design fast solutions that can upsample images from Full HD to 4K resolution while running on popular mobile NPUs from Qualcomm and MediaTek. For this, the participants were provided with the DIV2K dataset and trained models to do an efficient 3X image upscaling. The competition had two tracks: in the first track, the models had to be fully quantized (INT8), and the runtime of all models was evaluated on the Qualcomm Snapdragon 8 Elite Gen 5 NPU. In the second track, the participants were developing floating-point solutions that were evaluated on the MediaTek Dimensity 9500 NPU. Top solutions proposed in this challenge are able to reconstruct 4K images under 5 milliseconds while reaching a PSNR score of 30 dB. A comprehensive description of the models developed in the challenge is provided in this paper.",
    "published": "2026-10-31T14:05:38Z",
    "updated": "2026-10-31T14:05:38Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.00963"
  },
  {
    "id": "2611.00960",
    "title": "Self-Refining Prompt Induction for Streaming Text-to-SQL",
    "authors": [
      "Gaetano Rossiello",
      "Alfio Gliozzo",
      "Nandana Mihindukulasooriya",
      "Erick Lee",
      "Nabila Siregar",
      "Lisa Amini"
    ],
    "abstract": "Text-to-SQL assistants for streaming engines must handle dialect-specific types, windowing rules, and temporal semantics, including constructs poorly handled by generic prompts. We present Self-Refining Prompt Induction (SRPI), an offline method that converts generation failures into reusable dialect instructions while keeping model weights fixed. A Refiner revises the Generator's prompt using reference-conditioned feedback from three LLM judges; a sampled regression guard checks earlier successes, and a separate Compressor reduces prompt length. Inference uses the frozen prompt without retrieval or query repair. We evaluate cross-domain and cross-model transfer on Confluent Cloud Flink SQL using a controlled synthetic workload seeded by 30 expert-written examples, with 335 induction examples and 257 questions from held-out domains. The same induced prompt improves mean judge scores across seven Generators by 7.1-19.2 percentage points, including an increase from 85.3% to 97.5% for the induction model. A separate compression study reduces prompt length by 52.7% with a 0.19-percentage-point score decrease. An assistant using the induced prompt is in early access, with initial user feedback to inform subsequent refinement.",
    "published": "2026-10-31T14:02:40Z",
    "updated": "2026-10-31T14:02:40Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.DB"
    ],
    "url": "https://arxiv.org/abs/2611.00960"
  },
  {
    "id": "2611.00953",
    "title": "PSF-Informed Reconstruction: An Enhanced 2D Directional Filtered Backprojection Method for Cone-Beam Rotary Computed Laminography",
    "authors": [
      "Chengxiang Wang",
      "Wei Yu",
      "Baodong Liu"
    ],
    "abstract": "Cone-beam rotary computed laminography (CL) presents a viable alternative to cone-beam CT for imaging objects with high aspect ratios. Conventional reconstruction techniques, such as CL-FBP and CL-FDK, often yield suboptimal results charac?terized by pronounced superimposition artifacts, reduced contrast,and blurred edges, primarily due to their reliance on 1D row-wise filtering along detector rows. To address these limitations and improve reconstruction quality, we proposed a novel 2D directional filtered backprojection (DFBP) method based on the point spread function (PSF). First, an exact expression for the projection process is derived by establishing the relationship between a reconstructed pixel and its corresponding projection point on the detector. Second, a revised backprojection process incorporating two weighting factors is introduced to counteract the nonlinearity inherent in conventional backprojection, leading to a simplified PSF formulation. Third, to circumvent the computational burden of 3D image space filtering,an approximate method by linearizing the coordinate relationship in Fourier space under some assumptions is developed that transfers the 3D filtering operation to the 2D projection space. This approach facilitates the derivation of a formally simple yet effective 2D direc?tional filter, which integrates a 2D von Hann window and a 2D sinc window. Experimental results demonstrate that the proposed method produces reconstructions with superior contrast, sharper boundaries,and fewer superimposition artifacts compared to CL-FBP and CL?FDK. Moreover, it enables more accurate recovery of internal structures, such as bubble defects and electronic components.",
    "published": "2026-10-31T13:54:26Z",
    "updated": "2026-10-31T13:54:26Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.00953"
  },
  {
    "id": "2611.00945",
    "title": "HieraNTP: Structured Risk Representations for Time-Series Anomaly Detection via Hierarchical Next-Token Prediction",
    "authors": [
      "Yujie Li",
      "Zezhi Shao",
      "Boyu Diao",
      "Zhulin An",
      "Yongjun Xu",
      "Xueqi Cheng",
      "Fei Wang"
    ],
    "abstract": "Time-series anomaly detection commonly converts deviations from learned temporal regularities into anomaly scores. This practice can conflate violations of temporal regularity with task-specific anomaly judgments: the same deviation may be anomalous under one task definition and benign under another. Aggregating heterogeneous deviations into a single score before task-specific adaptation can obscure the evidence needed to distinguish these cases. We introduce HieraNTP, a Hierarchical Next-Token Prediction framework that separates self-supervised predictive modeling from task-specific risk interpretation. HieraNTP pretrains a hierarchical tokenizer and a causal next-token predictor to capture temporal regularities at multiple scales. It then organizes prediction discrepancies into a structured risk representation, preserving complementary evidence across temporal scales in token, local-statistic, and observation spaces. A task-adaptive detector uses anomaly labels to select and combine this evidence for the target task. Across anomaly detection benchmarks, HieraNTP improves VUS-PR by 12.0% on TSB-AD-U and 15.5% on TSB-AD-M relative to the strongest baselines, and achieves the highest composite score on both TAB tracks, with controlled comparisons supporting the value of retaining distinct evidence. Our code is available at https://github.com/blisky-li/HieraNTP.",
    "published": "2026-10-31T13:47:31Z",
    "updated": "2026-10-31T13:47:31Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.00945"
  },
  {
    "id": "2611.00944",
    "title": "SNAPPerf: Software-Aware Tabular Foundation Model for Retraining-Free Performance Prediction of Configurable Systems",
    "authors": [
      "Amine Lbath",
      "Massih-Reza Amini",
      "Vadim Okun"
    ],
    "abstract": "Modern software systems expose hundreds of configuration options whose combinations can substantially affect execution time, memory and energy usage. Measuring software performance resulting from a configuration set requires running a realistic workload. Since the configuration space grows exponentially, exhaustive benchmarking is infeasible. Prior work therefore trains models on a small set of measured configurations to predict the performance of the rest. Yet these models are specific to a particular software version, hardware platform, and workload, so changes require new measurements and retraining, and such changes are becoming more frequent with coding agents. We challenge this per-system training assumption with SNAPPERF (Software-aware, No-retraining, Adaptive Prediction), a sample-efficient tabular foundation model specialized for configurable software. SNAPPERF is pretrained once on synthetic data. Each new update only requires a few measured configurations as context to predict the rest without any per-system training or hyperparameter tuning. Across 39,866 configurations from 12 real-world systems, spanning 6 domains and 4 performance metrics, SNAPPERF reduces prediction error by 38% over the prior state of the art at the same measurement budget, and by 25% over the best general-purpose tabular foundation model. It matches the state of the art's accuracy with 54% fewer measurements on average. These results suggest that knowledge about software can be encoded in pretraining data rather than in per-system models, opening a new research direction in software-aware pretraining.",
    "published": "2026-10-31T13:47:08Z",
    "updated": "2026-10-31T13:47:08Z",
    "categories": [
      "cs.SE",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.00944"
  },
  {
    "id": "2611.00941",
    "title": "MarkovTS: Pretrained State-Transition Representations for Zero-Shot Time Series Generation",
    "authors": [
      "Yujie Li",
      "Zezhi Shao",
      "Jingbo Zhou",
      "Yongjun Xu",
      "Xueqi Cheng",
      "Fei Wang"
    ],
    "abstract": "Across heterogeneous real-world domains, time-series generation supports simulation, model development, and data augmentation by generating sequences that preserve target-domain statistics and temporal dependencies when real observations are scarce or costly. However, existing methods predominantly address in-domain generation, limiting their reuse in unseen domains. We study reference-conditioned zero-shot time series generation: target domains are unseen during pretraining, generation uses a single target-domain reference sequence, and no model parameters are updated. MarkovTS characterizes sequence evolution through local morphologies and their ordered transitions at multiple temporal scales. Its pretrained encoder quantizes normalized time-series patches into multiscale morphological states with a state codebook, while a transition codebook encodes contextual transitions between adjacent intervals. These transferable state-transition representations condition a pretrained flow-matching model. At generation, the frozen model combines a reference-derived condition with independent Gaussian noise to produce stochastic samples that retain the reference's temporal organization. Across 12 unseen target datasets, MarkovTS outperforms strong baselines in most distributional comparisons and generates diverse, reference-consistent sequences. As downstream augmentation, its samples yield overall gains across forecasting, classification, and anomaly detection benchmarks and diverse model families. Our code is available at https://github.com/blisky-li/MarkovTS.",
    "published": "2026-10-31T13:43:00Z",
    "updated": "2026-10-31T13:43:00Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.00941"
  },
  {
    "id": "2611.00937",
    "title": "What Helps Denoising Can Hurt Memory: Rethinking History in Long Video Generation",
    "authors": [
      "Yubin Jing",
      "Ziyang Zhang",
      "Meng Chen",
      "Yuyao Li",
      "Haofan Wang",
      "Yichen Gong"
    ],
    "abstract": "Autoregressive video generators produce long videos block by block, using historical context to maintain temporal consistency. After denoising, a committing pass encodes each clean block into keys and values (KV) that later blocks read, and the same clean block can be encoded into different KV depending on the history it reads. We therefore study historical context not only as a condition for denoising but also as an input to committing. Older historical context that supports denoising can harm subsequent generation when read during committing. At fixed context size and temporal positions, older historical context lowers mean clip-to-clip Subject Consistency. Across 5 generator configurations supporting longer contexts, consistency rises, plateaus, and then declines as committing context expands. Motivated by these findings, we propose Commit Forcing, a training-free rule that organizes committing into a chain. During committing, each block reads only the preceding block's stored KV, so older historical context reaches new entries only through the chain. We apply this rule to 6 pretrained generators. On 60-second VBench, Commit Forcing improves Quality and Total on all 6 generators, by up to 1.27 Quality points and 1.10 Total points. Long-range consistency gains extend to 240-second videos. In a blinded comparison on 120-second LongLive videos, Commit Forcing achieves win rates of 83.5% for subject and scene consistency and 82.9% for overall preference against the base generator, excluding ties.",
    "published": "2026-10-31T13:39:46Z",
    "updated": "2026-10-31T13:39:46Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.00937"
  },
  {
    "id": "2611.00935",
    "title": "Labadain-MedQA: A Tetun Medical QA Dataset for Fine-Tuning and Evaluating Large Language Models",
    "authors": [
      "Gabriel de Jesus",
      "Sérgio Nunes"
    ],
    "abstract": "Advances in large language models (LLMs) have created opportunities for cross-lingual transfer of medical knowledge from high-resource to low-resource languages to support access to healthcare information. However, medical question-answering (QA) datasets for fine-tuning and evaluating LLMs remain scarce for Tetun. To address this gap, we translated MedAlpaca's Medical Flashcards and WikiDoc Patient Information collections into Tetun using Gemini 2.5 Flash, producing 39,077 medical QA pairs. Translation quality was assessed on 50 randomly sampled QA pairs (100 documents) using automatic metrics against human reference translations and evaluations by two native Tetun-speaking healthcare professionals, focusing on medical accuracy and Tetun fluency. Human translations achieved higher mean ratings than LLM-generated translations for both criteria (4.43/5 vs. 4.02/5), with statistically significant differences (Wilcoxon signed-rank test, p < 0.001). To assess downstream utility, we fine-tuned Gemma and Llama variants on the translated MedAlpaca dataset using parameter-efficient fine-tuning (PEFT) and evaluated them on 325 Tetun-translated United States Medical Licensing Examination multiple-choice questions. Gemma 4 12B fine-tuned using QLoRA achieved relative improvements in mean accuracy of 10.79% with 4-bit NormalFloat (NF4) inference and 10.42% after merging the LoRA adapters into the BF16 base model, compared with the corresponding base models. These results highlight the viability of automatic dataset translation for Tetun medical QA and the effectiveness of PEFT in enhancing model performance. The datasets, models, and evaluation resources are accessible at https://github.com/labadain/labadain-medqa to support reproducible research on Tetun medical QA and facilitate machine translation, cross lingual, and multilingual research.",
    "published": "2026-10-31T13:36:05Z",
    "updated": "2026-10-31T13:36:05Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.00935"
  },
  {
    "id": "2611.00926",
    "title": "UI-UG 2: Advancing Mobile UI Understanding and Generation with Fine-Grained Supervision and Reinforcement Learning",
    "authors": [
      "Hao Yang",
      "Shuoyang Liu",
      "Xiaoyu Lin",
      "Zhou Fang",
      "Maji Huang",
      "Zhaosong Huang",
      "Ruichao Mao",
      "Teng Guo",
      "Hai Rao"
    ],
    "abstract": "Mobile UI understanding and generation require both fine-grained component perception and reliable structured synthesis. Inspired by the unified direction introduced by UI-UG, we present UI-UG 2, a compact 4B-parameter multimodal large language model (MLLM) that advances mobile UI Understanding and Generation with broader task coverage, a front-end-aligned taxonomy, and online render-aware reinforcement learning. UI-UG 2 constructs a multi-source understanding corpus from RICO, VINS, Android in the Wild, and Android Control, annotated with an 80-category two-level UI taxonomy aligned with front-end component semantics, and pairs it with over 5,000 requirement-screenshot-JSON tuples for progressive structured UI generation through a domain-specific language (DSL). For understanding, UI-UG 2 introduces decomposed rewards for category prediction, OCR fidelity, color recognition, dense grounding, and GUI grounding. Unlike the offline Direct Preference Optimization (DPO)-style generation optimization in UI-UG, UI-UG 2 optimizes generation through end-to-end online Group Relative Policy Optimization (GRPO): sampled DSL outputs are rendered with a Playwright-based server-side pipeline and evaluated using LLM-as-a-Judge and contrastive preference ranking. Experiments show that UI-UG 2 achieves the strongest referring and dense-grounding results among the evaluated models on our 80-category benchmark, and achieves the best composite generation score among compared models at a compact scale (4B). More importantly, we observe a consistent understanding-to-generation transfer: adding fine-grained UI perception supervision improves generation quality under a fixed training budget, suggesting that component-level semantics provide a shared representational foundation for both tasks.",
    "published": "2026-10-31T13:24:05Z",
    "updated": "2026-10-31T13:24:05Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2611.00926"
  },
  {
    "id": "2611.00923",
    "title": "Illusion: Safeguarding Topology Confidentiality in LLM Multi-Agent Systems via Behavior-Preserving Obfuscation",
    "authors": [
      "Yiu-Fai Cheung",
      "Hongzhi Guo",
      "Miao Pan",
      "Irwin King",
      "Hao Wang"
    ],
    "abstract": "The communication topology of Large Language Model Multi-Agent Systems (LLM-MASs) governs how information propagates among agents and encodes critical domain knowledge and expert workflow design. It is valuable intellectual property and plays a decisive role in system utility and safety, yet remains vulnerable to inference attacks that stealthily reconstruct it from agent outputs. Existing defenses detect or mitigate such attacks but do not proactively conceal the topology itself. We propose \\textit{Illusion}, a proactive topology obfuscation defense for LLM-MAS. \\textit{Illusion} injects fake edges and fake messages to present attackers with a deceptive topology, while selecting low-impact candidates that preserve output-distribution equivalence and task-accuracy non-inferiority. The resulting fake edges are designed to be indistinguishable from genuine messages under black-box observation. Extensive experiments show that \\textit{Illusion} reduces edge-level F1 from over 0.87 to 0.62 and graph similarity from over 0.94 to 0.71. It also largely preserves output distributions and task performance, and its fake edges resist both similarity-based and LLM-judge filtering, even under adaptive pruning.",
    "published": "2026-10-31T13:23:42Z",
    "updated": "2026-10-31T13:23:42Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.00923"
  },
  {
    "id": "2611.00919",
    "title": "TreePIN$^{2}$: Tree-Prior Initialized Neural Networks",
    "authors": [
      "Yanrong Wang",
      "Qiming Sun",
      "Haoyang Chen"
    ],
    "abstract": "Fitted decision trees provide predictive knowledge for neural network initialization. We present Tree-Prior Initialized Neural Networks (TreePIN$^{2}$), a method that translates split rules, decision paths and leaf predictions into initial network weights and biases for classification and regression. Sigmoid units encode split responses, hidden units combine them along decision paths, and leaf predictions initialize the output layer. We calibrate split softness using local training margins, sample support and impurity reduction, relating the initial responses to the data at each node. All weights and biases remain trainable, allowing gradient-based optimization to refine the transferred decisions and their combinations. Across six classification and six regression tasks with twenty paired seeds, TreePIN$^{2}$ improves mean initial and early validation performance over initialization baselines on most tasks. After fifty epochs, it achieves the best or tied-best mean validation performance among the six compared methods on ten tasks. Paired ablations show how split calibration and leaf-informed output initialization contribute to the starting predictor and its subsequent learning.",
    "published": "2026-10-31T13:22:01Z",
    "updated": "2026-10-31T13:22:01Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.00919"
  },
  {
    "id": "2610.41939",
    "title": "Observable-Specific Validity Tests for Scientific AI: Controlled Approximations and Intervention Response",
    "authors": [
      "Xiaoshn Nee",
      "Haobo Zhong",
      "Xiaomin Ni"
    ],
    "abstract": "An approximation can reproduce an energy while missing its response, or satisfy an error tolerance without being certified by a given bound. We formulate observable-specific validity records for scientific artificial intelligence (AI) that link a reduction to its reference model, error measure, tolerance, parameter domain, and transformations or interventions. Explicit displacement and velocity certificates for a singularly perturbed oscillator recover distinct convergence orders and provide sufficient validity guarantees. Exact Hubbard dimer relations resolve the different coupling domains accepted by energy and response criteria. Across 16 repeated neural fits, imposing dimensional homogeneity reduces energy scale transfer error from 52.3% to 0.0768% and raises the median fraction jointly satisfying gap and response tolerances from zero to 100%. Paired transformations verify the protected scaling relation, while a coupling crossover identifies the additional information needed for response transfer. A causal model recovers a positive intervention response beneath a strong negative observational association. For two mechanisms observed with Gaussian noise whose responses first differ at order $x^k$, we derive an exact fixed control query requirement scaling as $x^{-2k}$ and verify its full success curve numerically. Together with a 256-task evaluation interface, these results provide independently checkable tests of controlled approximation, physical transfer, and mechanism discrimination in scientific AI.",
    "published": "2026-10-30T15:57:51Z",
    "updated": "2026-10-30T15:57:51Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.DL"
    ],
    "url": "https://arxiv.org/abs/2610.41939"
  },
  {
    "id": "2610.41924",
    "title": "IGDA-ICMH: an Importance Guided Feature and Network Dual Adaptation Framework towards Image Compression for Machine and Human Vision",
    "authors": [
      "Yanbo Gao",
      "Xinyu Zhao",
      "Shuai Li",
      "Xun Cai",
      "Mao Ye",
      "Li Li"
    ],
    "abstract": "With the surge of machine vision applications, image compression for both machine and human vision (ICMH) has become an important research area. Existing studies mainly focus on task-specific adaptation or multi-task joint optimization, yet they often overlook the unequal contributions of different features and network layers to downstream machine vision tasks. To address this issue, we first quantitatively investigate the impact of different feature and network layers on machine vision performance, providing a principled understanding of their importance. Based on this analysis, an Importance Guided feature and network Dual Adaptation (IGDA) framework is developed for ICMH. It adopts implicit neural representation as the basic architecture and designs an efficient adaptation structure with both feature and network weight adaptation. An Importance-Guided Network Adaptation (IGNA) module is developed with a low-rank adaptation strategy to selectively adjust key network layers according to their importance in different tasks. An Importance-Guided Feature Adaptation (IGFA) module is developed with a low-rank and Kronecker product-based transform to explore the non-local property of the features in order to reduce the number of adaptation parameters. Extensive experiments on representative machine vision tasks, including image classification and object detection, demonstrate that our IGDA-ICMH framework achieves significantly better performance than the existing implicit neural representation-based methods for ICMH.",
    "published": "2026-10-30T15:54:03Z",
    "updated": "2026-10-30T15:54:03Z",
    "categories": [
      "eess.IV",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.41924"
  },
  {
    "id": "2610.41909",
    "title": "Structure-Aware Skill Retrieval and Arbitration for Optimization Modeling",
    "authors": [
      "Anran Liu",
      "Benzhao Hou",
      "Zongsheng Cao",
      "Daichao Wang",
      "Lang Chen",
      "Shitong Chen"
    ],
    "abstract": "Large Language Models (LLMs) can turn natural-language optimization tasks into solver-checked answers, but current agents remain brittle under narrative rewrites and often store reusable experience at the instance level. We introduce \\textsc{ArchOR}, an archetype-centric skill agent that builds on \\textsc{OptSkills} by adding two retrieval-focused modules. \\emph{Centroid-Aware Representation Learning} (CARL) refines the ordering of cached skill representations through a low-rank prototype residual. \\emph{Signature-Guided Retrieval} (S\\textsuperscript{3}R) attaches open-dimensional structural signatures to skills, prioritizes candidates by weighted Jaccard overlap, and bounds semantic re-ranking to a top-$K$ set. A baseline-preserving arbitration rule determines when the structural route should replace the original selector. With the same DeepSeek-V4.1-Flash backbone and released skill library, \\textsc{ArchOR} reaches 65.00\\% Micro-Avg.\\ Pass@1 across five benchmarks, improving over \\textsc{OptSkills} by 1.64~pp Micro-Avg.\\ and 2.68~pp Macro-Avg.",
    "published": "2026-10-30T15:45:17Z",
    "updated": "2026-10-30T15:45:17Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.41909"
  },
  {
    "id": "2611.00181",
    "title": "A Rate-Distortion Optimized Skip Mode Coding Framework for Neural Video Compression in AVS",
    "authors": [
      "Yuntian Jiang",
      "Shuai Li",
      "Yanbo Gao",
      "Jinglin Zhang",
      "Hui Yuan",
      "Mao Ye"
    ],
    "abstract": "With the development of deep learning, neural video compression (NVC) is gaining increasing interest and is currently under standardization in the AVS (Audio Video Coding Standard). Skip mode coding, a crucial component in the traditional video compression, is also adopted in AVS NVC. Although the skip mode takes a large portion in encoding the motion and residual features in the NVC, there is a lack of investigation on the rate distortion performance of the skip mode coding. In this paper, we first thoroughly investigate the rate and distortion distribution in the skip mode coding within a spatial frame and under different temporal reference qualities, and demonstrate that distortion distribution changes spatially and temporally. Therefore, a rate-distortion optimized skip mode coding (RDOSkip) framework is proposed, where the rate and distortion in the skip mode coding is formulated based on a statistical distribution predicted by the hyperprior and the Bayes' theorem. An adaptive skip mode decision method based on spatial-temporal joint RD optimization is developed for the skip mode coding among channels and frames in a group of pictures. It addresses the limitation of the rigid fixed-distortion distribution assumption in skip mode coding within the existing methods that rely on a fixed skip threshold. The temporal skip mode decision method has been adopted in the ongoing AVS NVC standard and incorporated into the reference software. The proposed RDOSkip can be directly used in the inference without any training and with negligible complexity increase. Experimental results further demonstrate that the proposed RDOSkip can improve the performance by 0.90% and 1.29% on AVS and HEVC datasets, respectively, in terms of BD-rate saving.",
    "published": "2026-10-30T15:45:10Z",
    "updated": "2026-10-30T15:45:10Z",
    "categories": [
      "eess.IV",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.00181"
  },
  {
    "id": "2610.41901",
    "title": "ReX-GG: a LLM Ensemble Pipeline for Relation-extraction and Graph Generation",
    "authors": [
      "Giacomo Magnifico",
      "Eduard Barbu"
    ],
    "abstract": "Current LLM ensemble frameworks focus on multi-step setups with additional modules for answer ranking, often opting for token and span analysis rather than structured outputs, leading to heavyweight architectures with potential fail states along the pipeline. Faster, lighter solutions are more vulnerable to hallucination propagation and can lack output control in more complex pipelines. This paper proposes a customisable, lightweight ensemble workflow of coordinated Large Language Models that leverages JSON-structured outputs and anonymous peer-review ranking to mitigate hallucinatory outputs and single-model failure points. The pipeline is demonstrated on a relation extraction task applied to popular science articles in English, targeting four ontologically-grounded relation types (strong causation, weak causation, contrastive, and compositional), with semantic node canonicalisation and interactive, colour-coded HTML causal graphs as the final output. Performance is evaluated through an anonymous user study, achieving an average perceived accuracy of 0.778 against a human-annotated gold standard. The modular architecture supports flexible deployment across both API-based and in-house LLM setups, and the full framework is released under an open license to foster reproducibility and collaborative research.",
    "published": "2026-10-30T15:39:02Z",
    "updated": "2026-10-30T15:39:02Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.41901"
  },
  {
    "id": "2610.41900",
    "title": "Using Machine Learning to Measure Self-Efficacy Belief Through Learners' Interaction Traces in Technology-Enhanced Learning",
    "authors": [
      "Maeva Somny",
      "Linda Chouati",
      "Marie Lefevre"
    ],
    "abstract": "Self-efficacy beliefs play a critical role in learners' performance, academic choices, and, more broadly, in their future career trajectories. As Technology-Enhanced Learning (TEL) environments have demonstrated strong potential for supporting both performance and motivation, investigating self-efficacy within such environments is of particular interest, especially for implementing remedial practices as early as possible to support learners' self-efficacy beliefs. Our research aims to develop a system capable of detecting low self-efficacy based on learners' interaction traces while they solve exercises in a TEL system. In this paper, we present initial results and future perspectives on a detection approach based on data mining and machine learning techniques to identify features indicative of low self-efficacy beliefs. Because the detection of learners' self-efficacy beliefs through their use of TEL systems remains largely unexplored, this work is exploratory in nature. To this end, we conducted an experiment across two universities to collect interaction traces and self-reported measures of self-efficacy. We then developed a machine learning pipeline comprising multiple classification models, enabling us to highlight the importance of closely monitoring of learners' self-efficacy beliefs for improved prediction performance, given their highly dynamic nature during learning.",
    "published": "2026-10-30T15:38:30Z",
    "updated": "2026-10-30T15:38:30Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.41900"
  },
  {
    "id": "2610.41899",
    "title": "General-purpose foundation models surpass specialized ones on chemical property prediction tasks",
    "authors": [
      "Stepan N. Ostarkov",
      "Gregorii A. Semakin",
      "Ivan A. Bespalov",
      "Michael G. Medvedev"
    ],
    "abstract": "Foundation models (FMs) learn reusable representations from large collections of unlabeled data. In chemistry the corresponding data mainly consists of molecular structures, which are abundant, whereas experimental measurements are scarce. Chemical FMs such as ChemBERTa and MoLFormer were therefore trained on diverse molecular structures to enable fine-tuning on small experimental datasets (less than 100 datapoints in most realistic scenarios) and subsequent property prediction. At the same time, general-purpose FMs such as GPT-6 Astra and Claude Opus 5.5 were trained on virtually all publicly available data, including knowledge of the humankind on molecular properties and laws governing them. Here we compare accuracies of chemical and general-purpose FMs on tasks from various areas of chemistry. Strikingly, general-purpose GPT-6 Astra outperforms the currently eligible chemical FMs on five physicochemical and quantum-chemical regression tasks when only 60 experimental datapoints are available. Only when provided 10x datapoints do the best chemical FMs reach performance of GPT-6 Astra: on 1,000 and 10,000 points they show performance on par with Astra on 60 and 1,000 points, respectively. Thus, counterintuitively, frontier general-purpose FMs are better suited for guiding chemical research in data-scarce areas than specialized chemical FMs, suggesting that learning relevant primitives (e.g. chemical structures) does not substitute training on relevant humankind knowledge.",
    "published": "2026-10-30T15:37:40Z",
    "updated": "2026-10-30T15:37:40Z",
    "categories": [
      "physics.chem-ph",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.41899"
  },
  {
    "id": "2610.41893",
    "title": "Automated Keyword Generation Using LLMs in a High-Volume Data Virtualization Service",
    "authors": [
      "Saiful Khan",
      "Yiwen Xing",
      "Joyraj Chakraborty",
      "Afrah Farea",
      "Philip Beaucamp",
      "Samuel Jackson",
      "Min Chen"
    ],
    "abstract": "In modern data infrastructure, a data virtualization service (DVS) allows users to create many versions of source datasets for different processing tasks. For example, a multivariate or multi-modality dataset can be used for different machine learning tasks (e.g., classification, detection, segmentation, forecasting, and so on). Data selection, participation, integration, and preprocessing in different tasks result in many virtual datasets [Khan et al., SSC 2026]. Meanwhile, different users need to discover existing virtual datasets frequently and easily to avoid duplicate efforts. To enable an effective search engine in a DVS, it is desirable to automatically generate keywords for each virtual dataset. In this work, we present a solution for generating keywords for virtual datasets using large language models (LLMs). We propose five strategies for selecting different collections of text data for processing by the LLMs. We applied the five strategies to virtual datasets created in five application case studies with different source datasets. We conducted experiments with three LLM generators and two embedding techniques. The experiments show that the performances of the five strategies depend on the quality of the text descriptions. The results help us adopt a multi-strategy implementation of a new keyword generation service (KGS) as part of an extended DVS. The work demonstrates that the capability of automated keyword generation is indispensable for a high-volume DVS that is dataset-rich and frequently accessed.",
    "published": "2026-10-30T15:34:59Z",
    "updated": "2026-10-30T15:34:59Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.41893"
  },
  {
    "id": "2610.41879",
    "title": "Fuzzy selective state model for forecasting the dynamics of consumer preferences",
    "authors": [
      "P. A. Golovinski",
      "A. A. Drobyshev",
      "A. O. Shatalova"
    ],
    "abstract": "We consider forecasting the dynamics of consumer preferences of retail chain customers. A customer's preference is described by a triangular fuzzy number. The evolution of the preference over time is governed by a Mamba-type selective state space model whose hidden state is a triangular number, with computations carried out in M.G.~Matveev's two-component algebra of fuzzy numbers. The recurrence parameters are computed from crisp features, while the fuzzy part of the model remains linear with non-negative coefficients. We show that the state then always remains a proper triangular number and is a convex combination of past observations, so that the fuzziness of the forecast does not accumulate over time and the algebraic computations coincide with Zadeh's extension principle. On a synthetic example with competitor promotions and customer switching, a lightweight 107-parameter model reaches a mean absolute error of the forecast centre of 0.154 versus 0.163 for the constant-inertia evolution operator and 0.179 for the naive forecast, matches a crisp model of the same architecture and additionally provides a linguistically interpretable estimate of forecast vagueness. We also show how the linguistic readout of the forecast can be used to detect a permanent switch of a customer to a competitor.",
    "published": "2026-10-30T15:27:14Z",
    "updated": "2026-10-30T15:27:14Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.41879"
  },
  {
    "id": "2610.41877",
    "title": "Movens-Zero: Scaling Humanoid Motion Foundation Models with Large-Scale Human Videos",
    "authors": [
      "Wendong Bu",
      "Tinghong Ye",
      "Qizhou Wang",
      "Jiacheng Li",
      "Zhiqi Ge",
      "Yuze Lin",
      "Zhongqi Yue",
      "Yi Su",
      "Jingyu Wang",
      "Kai Shen",
      "Jingdong Liu",
      "Chengyuan Deng",
      "Xiaoxuan Chen",
      "Xin Tan",
      "Jiaming Ji",
      "Wenqiao Zhang",
      "Chenghong Jiang",
      "Tuoyu Li",
      "Siliang Tang",
      "Jun Xiao",
      "Tat-Seng Chua",
      "Yueting Zhuang",
      "Xingxing Wang",
      "Juncheng Li"
    ],
    "abstract": "Scaling humanoid motion foundation models is constrained by the scarcity of diverse, robot-executable data and by the difficulty of jointly learning from heterogeneous multimodal inputs while supporting real-time closed-loop control. We present Movens-5M, constructed from raw Internet videos through clip generation, quality filtering, semantic annotation, motion recovery, and physical refinement with humanoid retargeting and execution verification. It contains 15 million human-motion sequences and 5 million physically executable humanoid-motion sequences spanning over 10,000 hours, aligned with text, RGB video, speech, and music. Building on this data, we introduce Movens-Zero, a scalable understanding-generation-execution architecture that supports joint learning across modalities and real-time closed-loop execution. Task-mixed flow-matching training jointly optimizes a single action expert across seven generation tasks, enabling direct motion generation from text, speech, music, and video. Multimodal Real-Time Chunking connects overlapping chunks under continuously updated instructions and robot states for continuous closed-loop execution. We further introduce Movens-Intent, a four-track benchmark with 8,192 expert-verified condition-motion pairs across text, speech, music, and video. Experiments show consistent gains across all four modalities when scaling execution-verified data from 1% to 100% and action-expert capacity from 64M to 911M parameters, while demonstrating that data quality and cross-modal supervision improve generation and execution.",
    "published": "2026-10-30T15:25:49Z",
    "updated": "2026-10-30T15:25:49Z",
    "categories": [
      "cs.RO",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.41877"
  },
  {
    "id": "2611.00180",
    "title": "Learning to Live: A Step Toward Lifelong Embodied Intelligence",
    "authors": [
      "Lirong Che",
      "Peidong Wang",
      "Yimeng Su",
      "Jiong Wang",
      "Yang Chen",
      "Wenbo Fu",
      "Zhenyu Huang",
      "Tiancheng Xu",
      "Yuzhe Yang",
      "Dongli Xie",
      "Xu Cao",
      "Chuang Wang",
      "Daqi Liu",
      "Jian Su"
    ],
    "abstract": "Embodied agents are usually organized around individual tasks, yet the physical world keeps changing between tasks and during execution. We introduce LIFE (Lifelong Intelligence from Experience), a framework in which a robot observes continuously, remembers selectively, and turns experience into new capabilities. RoboBeats, a family of lightweight streaming gates, tracks conditions set by the agent and discovers new events, deciding when an observation warrants a response or a memory write. Selected observations enter Plastic Memory, a flat store of images and structured records that keeps the source evidence, so new fields and indexes can be added when later questions need them. When existing tools fall short, Explore-Distill-Mount (EDM) turns solutions found during problem solving into validated, reusable tools and skills. Under matched protocols, RoboBeats substantially improves condition tracking over its base models and, at the same writing budget, retains more useful evidence for memory question answering than uniform sampling. A case study of limited scale, replaying 24 hours of continuous video recorded by a real robot, illustrates how the integrated system builds memory from a day of experience and uses it to answer everyday questions. LIFE takes a step toward robots that become more familiar with their surroundings and more capable through experience: learning not only to complete tasks, but to live in the world.",
    "published": "2026-10-30T15:23:52Z",
    "updated": "2026-10-30T15:23:52Z",
    "categories": [
      "cs.RO",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.00180"
  },
  {
    "id": "2610.41866",
    "title": "AI evaluators favor job applications written by certain AI models, independent of candidate quality",
    "authors": [
      "Nicolò Pagan",
      "Michael Andreas Ebling",
      "Stefania Ionescu",
      "Anikó Hannák"
    ],
    "abstract": "Job applicants increasingly use large language models (LLMs) to write cover letters, while employers deploy LLMs to screen them. In this all-AI setting, we ask whether the \\emph{choice of model} affects hiring outcomes independently of candidate qualifications. We introduce a multi-model auditing framework pairing eleven LLM writer agents with nine API-hosted evaluator agents across ten job descriptions and fifty candidates per job. Four findings emerge. First, we identify a generative preference hierarchy: a consistent global ranking of writer models by evaluator acceptance, in which locally hosted models are systematically disadvantaged regardless of their license, compounded by self-preference bias where evaluators favour their own outputs. Second, evaluator models differ substantially in how much bias they introduce based on applicants' tool choice, offering actionable guidance for fairer screening design. Third, this hierarchy has measurable competitive consequences: in the most adverse pairing, approximately two (1.8) out of twenty-five qualified candidates are filtered out purely due to model mismatch. Fourth, a common mechanism explains the patterns above: writer preference and self-preference trace to a combination of how much each writer leans on specific stylistic cues and how strongly evaluators, often unanimously, reward or penalise those same cues. A further check finds little evidence that an unmeasured \"writer fingerprint\" remains once these same features are accounted for. We discuss implications for algorithmic fairness in employment, regulation of AI-assisted screening, and the design of auditing frameworks that can be reapplied as the model landscape evolves.",
    "published": "2026-10-30T15:18:29Z",
    "updated": "2026-10-30T15:18:29Z",
    "categories": [
      "cs.CY",
      "cs.AI",
      "cs.MA"
    ],
    "url": "https://arxiv.org/abs/2610.41866"
  },
  {
    "id": "2610.40333",
    "title": "RFW-A: Agentic Procedural Generation of 400K Articulated Assets over 500 Categories",
    "authors": [
      "Yuanbo Lyu",
      "Changjian Pan",
      "Saining Zhang",
      "Yi Yang",
      "Peishuo Li",
      "Zhiheng Li",
      "Jialu Liu",
      "Junhao Chen",
      "Jiawei Weng",
      "Yupeng Gao",
      "Weiqing Xiao",
      "Wenyi Li",
      "Jiarui Guo",
      "Rui Zhang",
      "Jingrun Du",
      "Weiyi Lin",
      "Zenan Meng",
      "Hu Wei",
      "Lin Qu",
      "Zongzheng Zhang",
      "Hao Zhao",
      "Chaojian Li"
    ],
    "abstract": "High-quality articulated assets are essential for embodied perception, simulation, and manipulation, yet constructing them at scale remains difficult. Manual annotation and procedural modeling require substantial human effort. Recent agentic systems automate asset construction through program synthesis, but repeat costly reasoning and refinement for every new asset. Our key observation is that assets within a category can share construction logic despite variations in structure and appearance. Agentic synthesis and procedural generation are therefore complementary: agents can construct reusable programs, while procedural execution reuses the resulting logic across many samples. We therefore present RFW-A, which combines the two in a new articulated-asset generation paradigm. Starting from existing articulated programs, RFW-A organizes reusable components and their dependencies into category-level generators. Agents test and refine these generators across sampled configurations and motion states. Once constructed and validated, the generators produce diverse assets through procedural execution with no further model calls or token charges. The estimated API cost of generator authoring averages $10.62, amortizing to $0.05 per asset over 200 assets, versus $1.24 for the sampled per-asset agentic synthesis baseline. Using RFW-A, we built RFW-A-400K, containing over 400K sim-ready articulated assets across more than 500 categories. Experiments show high structural and kinematic validity and stable execution across physics simulators. Beyond asset validity, training with RFW-A-400K improves part-level articulation estimation on seen and unseen categories, while policies trained in simulation with retrieved and program-edited assets transfer zero-shot to real articulated objects.",
    "published": "2026-10-29T15:58:15Z",
    "updated": "2026-10-29T15:58:15Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.40333"
  },
  {
    "id": "2610.40330",
    "title": "Multistep and Multivariate Time Series Explainability with GradientSHAP: A Wind Power Case Study",
    "authors": [
      "Robbie Southam",
      "Zhong Fan",
      "Ke Li"
    ],
    "abstract": "As the effects of climate change become increasingly apparent, the demand for renewable energy sources such as wind power continues to grow. However, renewables' variable and intermittent nature presents significant challenges in their integration into energy grids. Artificial intelligence (AI) has emerged as a powerful tool to address these issues. Still, its adoption in the energy sector has been hindered by the opacity of many AI models, which often function as black boxes. This paper introduces a carefully adapted GradientSHAP approach to provide interpretability for multivariate, multistep wind power forecasting -- a largely underexplored area. This capability is critical for day-ahead grid management and, to the best of our knowledge, this is the first study to apply GradientSHAP in the context of wind power forecasting. To address the inherent dimensionality, we developed novel visualizations that deliver both local and global explanations, uncovering intricate relationships between environmental factors, site-specific conditions, and temporal dynamics. While GradientSHAP is not an out-of-the-box solution, our findings demonstrate that, with thoughtful handling of SHAP values and domain expertise, it can offer valuable insights into model behaviour, supporting more informed and trustworthy decision-making. Nevertheless, its complexity poses challenges for practical implementation. Future research should focus on streamlining these interpretability methods to make them more actionable for routine deployment in critical energy applications.",
    "published": "2026-10-29T15:57:13Z",
    "updated": "2026-10-29T15:57:13Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.40330"
  },
  {
    "id": "2610.40036",
    "title": "Hybrid AI Patterns: Thirteen Ways to Couple Language Models with Rules, and How to Choose Among Them",
    "authors": [
      "Siegfried Handschuh",
      "Götz-Henrik Wiegand",
      "Lorena Raichle"
    ],
    "abstract": "Language models handle text well, and rule engines give conclusions with proofs. Systems that combine the two are usually described by example, and the same coupling turns up under different names in agent frameworks, guardrail toolkits and neuro-symbolic research. This document defines thirteen patterns for coupling a language model with an executable rule language, in the catalogue form introduced for object-oriented design: intent, motivation, applicability, participants, collaborations, consequences, implementation, known uses and related patterns. Four patterns concern what crosses the boundary between model and rules, five who controls whom, three how the model takes part in the reasoning, and one how knowledge is kept over time. Five invariants hold for every combination, and five failure patterns name the couplings that break them. We relate the catalogue to published pattern catalogues and taxonomies of hybrid and neuro-symbolic systems and show where they overlap with it. A decision guide leads from a problem to a pattern. It rests on our measurements, including the cases in which a model alone did as well as the hybrid or better, and it reports what each design cost.",
    "published": "2026-10-29T13:37:28Z",
    "updated": "2026-10-29T13:37:28Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.40036"
  },
  {
    "id": "2610.40030",
    "title": "Cheap Retrieval and Observation Credit Assignment from One Quantity: The Value of Information",
    "authors": [
      "Daniel Strauss",
      "Nikolaos Sotirakis",
      "Zhenshan Bing",
      "Alois Knoll"
    ],
    "abstract": "Memory in reinforcement learning raises two problems. Attention finds the relevant item by scoring the whole store, which is costly for robots under latency and energy limits. When a retrieved memory pays off, credit for acquiring it must cross the whole sequence. We argue that both are governed by one quantity, the value of information, and propose to estimate it from archived rollouts with a learned world model. We obtain that, when read at the observation, it yields a provable lower bound on the optimal value of the acquiring action, which floors its TD target and attributes this floor to the observation that earned it. Read at the decision, it defines the optimal retrieval set. A pilot retrieval system, to be trained and improved with this signal, solves a memory task with reduced context.",
    "published": "2026-10-29T13:36:06Z",
    "updated": "2026-10-29T13:36:06Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.40030"
  },
  {
    "id": "2610.40029",
    "title": "Segment Anything Model Based Context Guided Mamba Unet for Medical Image Segmentation",
    "authors": [
      "Chenchen Wang"
    ],
    "abstract": "Medical image segmentation is crucial for clinical diagnosis and treatment planning, requiring both global contextual understanding and fine-grained structural precision. While the Segment Anything Model (SAM) demonstrates strong generalization capabilities, its direct application to medical images often lacks domain-specific adaptability. Meanwhile, State Space Models (SSMs)-based methods, such as Mamba, efficiently capture long-range dependencies but may struggle with preserving fine anatomical details. To address these challenges, we propose a segment anything model based context guided mamba unet, SAMBA-UNet, a novel framework that integrates SAM's context knowledge with Mamba's hierarchical feature learning to enhance both global representation and local detail refinement. Specifically, we introduce the Hierarchical Context Enhancement Module (HCEM), an attention-based fusion module that deeply incorporates the multi-level features of SAM and Mamba to improve detail perception and segmentation precision. Additionally, we employ LoRA and Adapter-based fine-tuning to adapt SAM to medical imaging tasks, further enhancing its domain-specific segmentation capability and robustness. We conducted a comprehensive study on several medical segmentation datasets, including Synapse, ISIC17, and ISIC18, evaluating our method across multiple metrics. Experimental results demonstrate that SAMBA-UNet achieves state-of-the-art performance, effectively balancing generalization, segmentation accuracy, and computational efficiency. Our code will be released upon acceptance.",
    "published": "2026-10-29T13:36:01Z",
    "updated": "2026-11-01T07:22:59Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.40029"
  },
  {
    "id": "2610.40023",
    "title": "HEMO: Harness Self-Evolution for Multi-Objective Combinatorial Optimization",
    "authors": [
      "Jianghan Zhu",
      "Cong Zhang",
      "Ni Zhang",
      "Yifan Yang",
      "Yew Soon Ong",
      "Zhiguang Cao"
    ],
    "abstract": "Automatic operator design (AOD) has increasingly adopted large language models (LLMs) to generate problem-specific search and variation operators for multi-objective combinatorial optimization (MOCO). Yet most methods evolve the operators while leaving the process that discovers them fixed. This limits adaptation as new Pareto trade-offs and operator interactions change where and how the search should proceed. We introduce HEMO, which makes the AOD harness itself a self-evolving optimization target. HEMO maintains a persistent harness state and updates one module at a time, revising the logic that determines which experience to retrieve, which operators to improve, which parents to select, and how to formulate the orchestration of search steps. Downstream solution quality and runtime guide these updates, while a discounted UCB scheduler directs adaptation toward promising modules as their utility changes. A persistent memory filesystem preserves candidate outcomes and diagnostic feedback across harness states, enabling successive states to build on accumulated optimization experience. Experiments across eight MOCO tasks and two structurally distinct evolutionary backbones demonstrate strong performance against conventional evolutionary, neural, and LLM-based AOD baselines, together with effective transfer to related tasks. HEMO extends automatic operator design beyond evolving individual operators to improving the search process that discovers them.",
    "published": "2026-10-29T13:32:00Z",
    "updated": "2026-10-29T13:32:00Z",
    "categories": [
      "cs.NE",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.40023"
  },
  {
    "id": "2610.40018",
    "title": "DINOv2 for PET: A Pre-Training Domain Benchmark Across Classification, Segmentation, and Prognosis",
    "authors": [
      "Roxanne De Maeyer",
      "Yannick Brackenier",
      "Vicky De Ridder",
      "Simon DeKeyser",
      "Maarten Larmuseau",
      "Jef Vandemeulebroucke"
    ],
    "abstract": "DINO (self-DIstillation with NO labels) has become a stan- dard for self-supervised pre-training, producing features that generalise across datasets and downstream tasks. In medical imaging it has been adopted mainly for radiology (X-ray, CT and MRI), where even natural- image DINO features transfer well. In the literature, these features have been reported to transfer worse to functional imaging such as PET. Yet PET-specific DINO models have barely been introduced, and even less validated across multiple tasks and datasets. We present PET-DINOv2-2D, the first DINOv2 model pre-trained on 2D PET, and benchmark it against open-source encoders: the origi- nal DINOv2 (pre-trained on the LVD-142M natural-image dataset) and OmniRad (pre-trained on CT, MRI and ultrasound). Using the same lightweight heads for every backbone, and despite far less pre-training data, PET-DINOv2-2D matches or outperforms both on three down- stream PET tasks: normal/abnormal classification, lesion segmentation and recurrence-free survival prognosis. Its advantage is largest when few labels are available, suggesting that PET pre-training gives more transferable, label-efficient features. Code is made available at https://github.com/nuclivision/pet-dinov2-2d/.",
    "published": "2026-10-29T13:30:24Z",
    "updated": "2026-10-29T13:30:24Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.40018"
  },
  {
    "id": "2610.40007",
    "title": "Greenscapes: Optimized Vegetation Configurations in Cities",
    "authors": [
      "Patryk Bartkowiak",
      "Marcin Marlewski",
      "Paweł Wójcik",
      "Jae Joong Lee",
      "Dominik L. Michels",
      "Bedrich Benes",
      "Sören Pirk",
      "Wojciech Pałubicki"
    ],
    "abstract": "Vegetation plays a central role in cities, serving functional roles such as balancing shade and sky exposure, shaping the microclimate, carbon sequestration, and providing acoustic screening. Furthermore, aesthetic choices in landscape styles (formal, modernist, picturesque) are important for citizens' well-being and should be considered in the design of urban landscapes. In this paper, we present a novel method for placing vegetation, ranging from shrubs to large trees, in 3D urban scenes. Our method uses individual lots as input and employs a conditioned Vision-Language Model (VLM) to generate a top-down rendering of vegetation, placing large trees, small trees, and shrubs on lawn areas. This rendering is then converted into a 3D scene by detecting individual plants and selecting appropriate 3D assets. To refine the proposed configurations, we define an optimization loop that keeps the VLM-generated positions fixed after a deterministic feasibility repair and uses CMA-ES to optimize per-instance scale transformations along with discrete vegetation asset substitutions. To define the objective function for the optimization, we evaluate the generated 3D scenes with efficient surrogate models of shade and path-based acoustic exposure. Furthermore, we render in-scene views at each optimization step to compute view-dependent perceptual descriptors, enabling the generation of both aesthetic and functional vegetation layouts for urban scenes.",
    "published": "2026-10-29T13:24:24Z",
    "updated": "2026-10-29T13:24:24Z",
    "categories": [
      "cs.GR",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.40007"
  },
  {
    "id": "2610.40006",
    "title": "Human--AI Interactions as First-Class Data: A Formal Interaction Model and Runtime for Explainable AI Collaboration",
    "authors": [
      "Michela Taufer",
      "Kin Ng",
      "Ian Lumsden",
      "Aashish Pandey",
      "Rajasi Gore",
      "Angelina Ju",
      "Sukanya Moudgalya",
      "Ewa Deelman",
      "Sai Swaminathan"
    ],
    "abstract": "AI assistants are increasingly embedded in computational notebooks, scientific workflows, software engineering tools, and learning systems, yet human-AI interactions are often treated as transient prompt-response exchanges rather than durable data products, hindering reproducibility, explainability, replay, behavioral analysis, and adaptive AI support. We argue that these interactions form a new data class requiring formal representation and introduce the Human-AI Interaction Description Language (HAIDL), a formal interaction model with a Backus-Naur Form-inspired concrete syntax. HAIDL encodes each interaction as a structured object capturing computational context, user request, prompt payload, AI response, feedback, problem context, provenance, and model metadata. We integrate this vision into HAIDL-X, a middleware for JupyterLab that instantiates HAIDL by capturing user-bot state, building contextualized prompts, interfacing with AI providers, collecting feedback, and storing interactions in a repository. We add a learning layer over HAIDL that maps interaction objects and notebook execution traces into reproducible measures of user behavior, including engagement, performance, help-seeking, error-oriented use, and learning personas. HAIDL-X provides a foundation for treating human-AI collaboration as structured, queryable, replayable, analyzable data.",
    "published": "2026-10-29T13:23:54Z",
    "updated": "2026-10-29T13:23:54Z",
    "categories": [
      "cs.AI",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.40006"
  },
  {
    "id": "2610.40005",
    "title": "Efficient Learning of Mechanism Designs and Compositionality",
    "authors": [
      "João Pedro Gandarela",
      "Thiago Rios",
      "Stefan Menzel",
      "André Freitas"
    ],
    "abstract": "Learning mechanism behaviour requires a representation of how connected parts jointly constrain motion. We study whether exposing reusable constraint subassemblies improves prediction from limited data. Assur-KB represents planar mechanisms through irreducible modules, boundary interfaces, and solve dependencies while retaining source geometry. Our theoretical results characterize transfer through module interfaces and establish physical limits arising from missing interface information and accumulated sensitivity. To test the representation claim directly, the experimental design compares matched mechanism-curve pairs across training budgets within the same multilayer-perceptron family. This controlled comparison establishes the utility of the complete representation in the evaluated learning setting. Assur-derived features provide a geometric-mean $1.8\\times$ advantage in sample efficiency over flattened adjacency and position inputs across budgets of 50-10,000 mechanisms. Separate experiments establish invariance under tested joint relabelings, higher valid-generation rates under dyadic composition, and a coarser structural index over 10.02 million mechanisms. In summary, the theory and experiments identify how physical constraint structure supports limited-data prediction and which interface conditions govern compositional reuse.",
    "published": "2026-10-29T13:23:44Z",
    "updated": "2026-10-29T13:23:44Z",
    "categories": [
      "cs.AI",
      "cs.CE"
    ],
    "url": "https://arxiv.org/abs/2610.40005"
  },
  {
    "id": "2610.40002",
    "title": "How Much Should a VLA Trust Its Reasoning? Step-Level Guidance as a Measured Action-Value Function",
    "authors": [
      "Dabin Seo",
      "Eunhyek Joa"
    ],
    "abstract": "Reasoning vision-language-action (VLA) policies write a reasoning trace and then decode the action from it. A wrong trace yields a wrong action, and even a correct-looking trace can mislead the plan. Existing remedies ask whether the reasoning is right. We ask how strongly it should steer. CoC-CFG applies classifier-free guidance between the policy's context and the same context without the reasoning span. One weight per Euler step attenuates or amplifies the reasoning, and w=1 recovers the original policy. We treat the choice of this weight as a Markov decision process whose action values are measured, not bootstrapped. With the expert frozen and the noise fixed, applying a weight for one step and finishing the plan under the current controller returns that weight's value exactly. Q-adaptive guidance fits these values with small critics and improves the controller conservatively. In the Alpasim driving simulator it outperforms every fixed weight and online RL (SAC, GRPO) in open loop, and in closed loop it passes 262 of 300 scenes, against 252 for the original policy. On held-out frames of the Waymo end-to-end driving benchmark, its first three stages outperform every fixed weight, four adaptive-guidance methods, SAC and GRPO. On the hidden test set, a frozen Alpamayo 1.5 with rule-based camera and vehicle conversions and Q-adaptive guidance sets a new state of the art among published methods: 8.135159 rater feedback score, against 8.079 for the best published method.",
    "published": "2026-10-29T13:20:35Z",
    "updated": "2026-10-29T13:20:35Z",
    "categories": [
      "cs.RO",
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.40002"
  },
  {
    "id": "2610.39992",
    "title": "Accumulating Pruning Constraints: New Exact Polynomial-Space Algorithms for Max 2-SAT",
    "authors": [
      "Konstantin Kutzkov"
    ],
    "abstract": "We present deterministic polynomial-space algorithms that solve Max 2-SAT on $n$ variables exactly in time $\\Ostar(2^{(1-γ)n})$, for a fixed $γ>0$, on several classes of instances whose clause density may grow with $n$. Our main tool extends the classic DPLL branching algorithm. When the search gives a variable its less promising value, comparing the two values of the variable yields a pruning constraint that is satisfied by some optimal assignment. Accumulating these constraints along each branch prunes all but an exponentially small fraction of the assignments. The classes are formulas with many biased variables, semirandom 2-CNF formulas, and Max-Cut on regular expander graphs and on graphs generated by a stochastic block model. In a semirandom formula, the pairs of variables that may share a clause are arbitrary, and the clauses on these pairs are random. For semirandom formulas and block-model graphs, the algorithms are still exact on every input, and the time bound holds with high probability over the input. To our knowledge, these are the first polynomial-space algorithms with such a running time for nontrivial classes of dense Max 2-SAT instances. Beyond these classes, the pruning constraints can be added to any branching algorithm for Max 2-SAT, and we expect them to be of practical relevance for general formulas, in particular for sparse ones, where each constraint involves only a few variables.",
    "published": "2026-10-29T13:12:14Z",
    "updated": "2026-10-29T13:12:14Z",
    "categories": [
      "cs.DS",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.39992"
  },
  {
    "id": "2610.38497",
    "title": "Vision-Based Density Estimation for Adaptive Traffic Control",
    "authors": [
      "Mohammad Usaid",
      "Deepak Silaych",
      "Hrithik Mhatre",
      "Archak Mittal"
    ],
    "abstract": "Traffic congestion is becoming a critical challenge in rapidly growing urban centers, particularly in developing nations where rapid urbanization and inadequate transport infrastructure place increasing strain on transport networks. In highly heterogeneous and chaotic traffic flows, camera-based traffic-state estimation is limited by severe vehicle occlusion and overlap. In this paper, we propose a framework to optimize traffic flow directly from stochastic visual observations. The architecture is structurally decoupled into three primary components: (a) vehicle density estimation, (b) predictive dynamics modeling, and (c) policy optimization. The proposed methodology introduces a convolutional neural network (CNN) that learns the mapping from camera feeds to spatial density maps, utilizing an adaptive k-nearest-neighbor (k-NN) Gaussian kernel to handle varying congestion levels. This feeds into an ST3DNet predictive module for spatiotemporal forecasting, followed by a hierarchical Graph-Transformer Multi-Agent Reinforcement Learning (MARL) algorithm to optimize signal phases. The density estimation stage was evaluated on 40 annotated intersection images from Rambagh 4, Jaipur, India, with a reported five-fold validation mean absolute error (MAE) of $3.32 \\pm 0.95$ vehicles and a mean absolute percentage error (MAPE) of 14.5%. These results pertain to the perception component; empirical training and evaluation of the forecasting and control stages remain future work.",
    "published": "2026-10-28T09:15:54Z",
    "updated": "2026-10-28T09:15:54Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.38497"
  },
  {
    "id": "2610.38496",
    "title": "Accelerating Nonlinear MPC by Behavior Cloning with Separated Timescales: Application to Nuclear Reactor Load-Following",
    "authors": [
      "Perceval Beja-Battais",
      "Alain Grosset{ê}te",
      "Nicolas Vayatis"
    ],
    "abstract": "Behavior Cloning (BC) of expert controllers for multiscale dynamical systems is challenging: state variables evolving at widely separated timescales induce highly nonlinear couplings that a shared latent space may fail to adequately represent, degrading closed-loop generalization. We propose Structured Representation Learning for Behavior Cloning (SRLBC), an architecture designed to leverage the physical knowledge of multiscale systems in which slow state variables, fast (stiff) state variables, and predictable exogenous inputs evolve at different timescales. On 500 long-horizon roll-outs of a pressurized water reactor (PWR) load-following benchmark -a high-dimensional, stiff industrial system with challenging safety constraints -and across 20 training seeds, separated embeddings systematically outperform shared embedding baselines on cumulative cost, imitation accuracy and constraint satisfaction. The resulting standalone policies approach NMPC closed-loop performance at a computational cost 15 times lower on average. Since standalone policies still leave a few percent of trajectories infeasible, we embed the learned policies in a safety-augmented approximate NMPC framework, in which the optimizer is only called when the predicted input sequence is not certified as safe. This yields controllers still 6.8 times faster than the NMPC controller on average, with a feasibility (i.e., constraint satisfaction) of at least 99.8% for all architectures, SRLBC retaining the lowest closed-loop cost. Under distribution shift, standalone BC policies degrade sharply: SRLBC degrades the least, and once safety-augmented, it retains a feasibility above 98% with the lowest closed-loop cost. Beyond the quantitative results, Jacobian-based sensitivity analysis shows that the resulting controller relies on a sparse and less redundant set of latent features, each attributable to a single group of physical variables, and aligned with the physical timescale decomposition of the system.",
    "published": "2026-10-28T09:15:18Z",
    "updated": "2026-11-02T13:30:38Z",
    "categories": [
      "cs.AI",
      "cs.LG",
      "math.OC"
    ],
    "url": "https://arxiv.org/abs/2610.38496"
  },
  {
    "id": "2610.38494",
    "title": "Calibrating Track-Query Updates at Test Time for Multi-Object Tracking",
    "authors": [
      "Riku Inoue",
      "Shogo Sato",
      "Yu Mitsuzumi",
      "Kazuhiko Murasaki",
      "Tomoyasu Shimada",
      "Takashi Sano"
    ],
    "abstract": "Multi-Object Tracking (MOT) requires localizing multiple objects and maintaining their identities over time. Recent query-propagation trackers carry target-specific representations across frames and update them with current-frame image features, yet identity association remains difficult when visually similar targets overlap or cross. During such interactions, current-frame query updates may contain components directed toward nearby active tracks, which may affect identity association in later frames. To investigate this issue, we analyze track-query updates preceding identity switches (IDSWs), where the same target is assigned a different track ID. Our analysis shows that (i) propagated track-query representations change more abruptly before IDSWs, (ii) current-frame updates have larger positive projections along directions toward other active tracks, and (iii) bounding-box intersection over union (IoU) retrieves the counterpart track involved in a subsequent IDSW with high recall when that track remains active before the switch. Motivated by these findings, we propose Test-time Track-Query Calibration (TQC), a training-free and gradient-free method for query-propagation trackers. TQC calibrates the tracker output before propagation using a bounded correction estimated from update components directed toward nearby active tracks. It requires only track-query representations and bounding boxes available during inference, without retraining or architectural modification. Across nine DanceTrack and SportsMOT test settings, TQC improves HOTA and AssA in all settings and IDF1 in eight, with an average HOTA gain of +0.38 and limited inference overhead. Controlled variants on six validation settings further show that TQC's correction direction yields more consistent HOTA improvements than alternative directions with matched correction norms.",
    "published": "2026-10-28T09:07:44Z",
    "updated": "2026-10-28T09:07:44Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.38494"
  },
  {
    "id": "2610.38488",
    "title": "Generative AI as a Mediator in Creator Collaboration: Challenges, Design Opportunities, and Concerns",
    "authors": [
      "Hajun Kim",
      "Jini Kim",
      "Yunjae Josephine Choi"
    ],
    "abstract": "As Generative AI (GenAI) expands beyond individual workflows and becomes increasingly integrated intocollaborative creative work, its potential to address the fundamental challenge of building common groundamong creators with diverse expertise remains underexplored. Specifically, we lack empirical understandingof how GenAI can mediate collaboration asymmetries among heterogeneous creators. To address this gap,we conducted a multi-method study with narrative writers (N = 10) and visual designers (N = 10) in thecontext of game development. Our findings demonstrate that GenAI goes beyond individual assistance toserve as a collaborative mediator by aligning creative intent, sustaining shared understanding, and mitigatinginterpersonal friction among creators. At the same time, we highlight concerns that GenAI may reducecommunication among creators, undermine mutual trust, and reshape interpersonal dynamics and collaborativeprocesses. Based on these insights, we identify design opportunities for GenAI tools that nurture collaborativesynergy while preserving the creativity and values of human work.",
    "published": "2026-10-28T08:58:58Z",
    "updated": "2026-10-28T08:58:58Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.38488"
  },
  {
    "id": "2610.38482",
    "title": "Geometry-Aware Trajectory State Modeling for Few-Shot Action Recognition",
    "authors": [
      "Zhiqi Miao",
      "Marko Haralović",
      "Stanislav Levendeev",
      "Sarvesh Angadi",
      "Jannatul Ferdous",
      "Dan-Cristian Ploesteanu",
      "Jiapan Guo",
      "Estefanía Talavera"
    ],
    "abstract": "Few-shot action recognition (FSAR) requires representations that expose discriminative motion dynamics from only a few labeled videos. Recent trajectory-based methods leverage long-term point tracks for explicit temporal correspondence, but often treat trajectories as carriers of sampled visual features or summarize their motion with compact 2D displacement-based descriptors. We instead view an action as the ordered evolution of 2.5D trajectory states and their local geometric interactions. Based on this view, we introduce GeoTRAM, a geometry-aware trajectory state modeling framework for FSAR. GeoTRAM lifts sparse tracks into 2.5D trajectories, where StateMotion models ordered intra-trajectory state evolution and RelMotion captures state-conditioned local interactions through time-varying relative geometry and motion. Quality-filtered spectral sampling provides more reliable trajectory initialization; complementary semantic, motion, and depth cues are separately refined and preserved for joint spatio-temporal modeling; action-guided reweighting and top-$ρ$ trajectory selection support complementary frame- and trajectory-level matching. Experiments on five FSAR benchmarks demonstrate strong gains on the motion-centric Something-Something benchmarks while maintaining competitive performance on more appearance-driven benchmarks and a favorable accuracy--efficiency trade-off.",
    "published": "2026-10-28T08:56:33Z",
    "updated": "2026-10-28T08:56:33Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.38482"
  },
  {
    "id": "2610.38467",
    "title": "StreamStudio: Exploring Video Authoring with Streaming Autoregressive Generation",
    "authors": [
      "Boyu Li",
      "Zhe Lin",
      "Eli Shechtman",
      "Ding Li",
      "Hongbo Fu",
      "Yuqian Zhou"
    ],
    "abstract": "We present StreamStudio, a prototype system that explores a new authoring paradigm for streaming video generation. Instead of entering a prompt and waiting for a complete video before making changes, creators can interact with the generation as it unfolds: steering what comes next, returning to earlier moments, and exploring different continuations. In this way, StreamStudio shifts creative control from post-generation revision to continuous interaction with the generative process. Our contribution centers on this authoring paradigm and the interaction mechanisms that make streaming generation directly manipulable. StreamStudio is designed as a plug-and-play interface that can work with compatible generation and editing models, allowing its interaction model to evolve alongside advances in underlying video models. As streaming models become faster and easier to control in the future, such an interface may support more flexible and controllable video creation, including richer edits and multimodal interventions during generation.",
    "published": "2026-10-28T08:43:34Z",
    "updated": "2026-10-28T08:43:34Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.38467"
  },
  {
    "id": "2610.38462",
    "title": "Automatic Iconographic Annotation of Medieval Illuminations: Comparing Generative Vision-Language Models and Supervised Discriminative Classifiers",
    "authors": [
      "Vincent Jolivet",
      "Lucas Terriel",
      "Chahan Vidal-Gor{è}ne"
    ],
    "abstract": "The large-scale digitisation of medieval manuscripts creates a growing need for automated iconographic indexing. We evaluate two complementary paradigms for this task on 9,735 full-folio images annotated with 2,333 TIMEL concepts: generative Vision-Language Models (VLM) and supervised discriminative classifiers (SDC). The VLM experiments evaluate fine-tuning, structured JSON decoding, taxonomybased candidates generation, and deterministic reranking. The discriminative experiments evaluate flat, hierarchy-aware, and patch-attention heads over a frozen DINOv3 encoder. Our results highlight key functional differences: ML-Decoder (SDC) achieves the strongest overall retrieval performance (precision@1 of 0.696, MRR of 0.806), with loss calibration (Asymmetric Loss) serving as the primary performance lever. While SDCs provide superior precision and reliability within a closed vocabulary, VLMs offer strong semantic generalization and broad taxonomic coverage, particularly through structured JSON targets and verify-calibrate reranking (hierarchical F1 of 0.559). Furthermore, model behavior strongly depends on concept abstraction: SDCs excel at perceptually grounded descriptive concepts, whereas VLMs provide useful hypotheses for complex interpretative scenes. Finally, we find that enforcing explicit hierarchy within model architectures limits coverage compared to spatial feature aggregation. Overall, rather than competing approaches, SDCs and VLMs emerge as complementary components for future hybrid indexing systems combining structured retrieval with exploratory annotation assistance. As a methodological contribution, we define the soft F1 metric to provide a taxonomy-aware evaluation that credits semantically close predictions based on lowest common ancestors.",
    "published": "2026-10-28T08:38:13Z",
    "updated": "2026-10-28T08:38:13Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.38462"
  },
  {
    "id": "2610.38458",
    "title": "Tracekit Box: Running AI Agents in Micro-VMs Where Every Way Out Is Decided and Signed",
    "authors": [
      "Bravish Ghosh"
    ],
    "abstract": "AI agents now install packages, call model APIs with their operators' keys and change code in repositories that deploy to production. The network, credentials and write access they need are also how they can leak data, steal a key or change a system nobody approved. Sandboxes contain an agent but leave little evidence of what crossed their boundary; tracing records what happened but contains nothing. We present Tracekit Box, an open-source system (MIT, v0) that does both. Each job runs in its own Firecracker micro-VM with no network card. The only ways out are doors on the host, served over vsock: commands, outbound connections, secrets, model calls and the workspace patch. At every door a Tracekit signer the agent cannot reach decides what passes and signs it into one run per box. Names are resolved on the host; private and cloud-metadata addresses are always refused; secrets never enter the VM, which sees placeholders the host proxy swaps for real values only in one header for bound hosts; and changes come back as a patch applied file by file after the signer decides each file. Box fails closed, and each job ends as a .tkb bundle anyone can verify offline. All 13 end-to-end checks pass on a real KVM runner (the test that runs them takes 28.5 s, including image pull and boot); 15 fuzz targets on the trust boundary produced nine findings, all fixed; and the demo run's 102 signed records verify. Box does not yet run Firecracker's jailer, needs a co-located signer, and records processes inside the VM only where they cross a door.",
    "published": "2026-10-28T08:36:22Z",
    "updated": "2026-10-28T08:36:22Z",
    "categories": [
      "cs.CE",
      "cs.AI",
      "cs.CR",
      "cs.OS"
    ],
    "url": "https://arxiv.org/abs/2610.38458"
  },
  {
    "id": "2610.38448",
    "title": "Benchmarking decision models against generative large language models on medical multiple-choice questions",
    "authors": [
      "Oscar Freyer",
      "Daniel Glauert",
      "Moritz Hofmann",
      "Max Ostermann",
      "Stephen Gilbert",
      "Jakob Nikolas Kather"
    ],
    "abstract": "Medical workflows often require selecting among predefined options. We compared 13 decision models with 15 generative large language model configurations, including different reasoning settings, using 1,273 four-option MedQA questions under text-only conditions. Accuracy ranged from 67.71% to 89.08% for decision models and from 78.32% to 96.86% for generative configurations. Among the tested configurations, Mercury Decide had the lowest mean final-attempt cost (USD 0.0069 per 1,000 questions), while Clef Omni had the shortest median request duration (0.291 seconds). Decision-model probabilities distinguished correct from incorrect answers, but error rates among answers assigned probabilities of at least 0.90 ranged from 1.71% to 12.77%. Answer agreement across three runs ranged from 92.30% to 100%, while probability repeatability varied. Decision models offered resource advantages alongside lower peak accuracy; selecting models for medical workflows requires considering probability quality and repeatability together with accuracy and the resources needed to detect and correct errors.",
    "published": "2026-10-28T08:25:35Z",
    "updated": "2026-10-28T08:25:35Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.38448"
  },
  {
    "id": "2610.38445",
    "title": "DES-JEPA: Learning a Shared Vocabulary for High-Dimensional Discrete Event Sequences",
    "authors": [
      "Hugo Math",
      "Maximilian Forstenhäusler",
      "Christos Anagnostopoulos"
    ],
    "abstract": "Temporal foundation models such as Chronos and TimesFM generalize across domains through a shared numerical observation space. In contrast, discrete event sequences (DESs), including operational event logs or patient clinical-event trajectories, have domain-specific event vocabularies whose labels lack a consistent correspondence across domains. Beyond this lack of consistency, the number of distinct events in real-world settings is high enough to challenge both classical temporal point process modeling and current in-context foundation inference models such as FIM-PP. Critically, current foundation models for DESs are limited to a small, fixed number of event types, restricting their applicability to realistic, high-dimensional event streams. To address this, we propose two complementary modules: (i) DES-JEPA, a joint-embedding predictive architecture that learns a shared discrete vocabulary from synthetic stochastic processes with unaligned event vocabularies; and (ii) DES-PFN, a discrete event sequence prior-fitted network that reuses the learned vocabulary for in-context next-event prediction. Without task-specific fine-tuning, this framework achieves competitive zero-shot performance on eight unseen real-world datasets and scales up to 700 distinct event types.",
    "published": "2026-10-28T08:24:09Z",
    "updated": "2026-10-28T08:24:09Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.38445"
  },
  {
    "id": "2610.38439",
    "title": "Predict the Reward, Not the World: World Reward Models for ML Agents",
    "authors": [
      "Yuxiao Lee",
      "Zherui Yang",
      "Fan Liu",
      "Hao Liu"
    ],
    "abstract": "Search-based machine-learning (ML) agents improve a solution by writing candidate programs, executing them, and keeping the best. Execution gives the search reliable feedback, but a single run can take hours, and most runs end in programs the agent discards. Recent agents try to save these runs by letting a large language model act as a world model that predicts how each program would perform. However, a wrong prediction feeds the search false information. We argue that an agent does not need to predict the outcome of execution, only the decision that execution would support. We propose World Reward Models (WRMs), which learn from real execution results to choose directly which candidate will perform better, without predicting any intermediate outcome. We prove that a selector which predicts execution from the same inputs cannot outperform the best direct selector, that predicted outcomes add an error which can make a likelihood-trained world model prefer the worse program on every instance, and that cross-entropy on executed winners drives a WRM toward the optimum. Our WRM, ForeCritic, adapts a 9B typed decision model to 5k executed program pairs. On 12,438 held-out pairs from 26 ML tasks, it picks the better program 79.4% of the time, while general-purpose LLM judges reach 53--62%, and its probabilities are calibrated. Inside AIDE, ML-Master, and ForeAgent, it cuts mean task time by 4.4--7.5 times while keeping their mean scores within 0.01 or raising them.",
    "published": "2026-10-28T08:20:06Z",
    "updated": "2026-10-28T08:20:06Z",
    "categories": [
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.38439"
  },
  {
    "id": "2610.38438",
    "title": "RoleFUZZER: User-Behaviour Fuzzing for Role-Specification Adherence in Large Language Models",
    "authors": [
      "Kshitish Ghate",
      "Michael Saxon",
      "Tadayoshi Kohno",
      "Aylin Caliskan"
    ],
    "abstract": "Large language models (LLMs) are often conditioned into specific roles such as tutors, interviewers, or agents acting for an organisation, through system prompts that specify how they should behave. The extent to which they can actually adhere to these role specifications under multi-turn interactions with realistic and potentially problematic users is understudied. To address this, we propose user behaviour fuzzing, a guided search over plausible user behaviours that can lead a model to violate its role specification, and introduce RoleFUZZER, a framework that adapts coverage-guided fuzzing from software testing to operationalise the search. RoleFUZZER constructs scenarios guided by a user-behaviour coverage grid that crosses a grounded taxonomy of user interaction types and the role specification of the model under test i.e. what is under pressure. With RoleFUZZER, we evaluate LLMs across five role specifications, including tutor, financial advisor, AI interviewer, antagonistic roleplay character, and web agent under organisational policies. Across simulated and validated conversations in 15 campaigns, the framework reaches >= 89% coverage of the 64-cell behaviour grid for every model and role tested, and surfaces specification-grounded failure patterns. At an equal budget of conversations, removing the RoleFUZZER grid and asking an LLM to generate specification targeting users free-form lowers coverage to 39-69% with fewer kinds of violations. The same specification can also fail in opposite directions. For e.g., on the antagonist, open-weight target models override the player's safety signals, while Claude Haiku 4.5 breaks character instead. RoleFUZZER offers a tractable way to uncover vulnerabilities in LLMs across role specifications by testing diverse user behaviours that are likely to violate them.",
    "published": "2026-10-28T08:19:36Z",
    "updated": "2026-10-28T08:19:36Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.SE"
    ],
    "url": "https://arxiv.org/abs/2610.38438"
  },
  {
    "id": "2610.37459",
    "title": "M4Bench: Evaluating Procedural Specification for Clinical EHR Derivation Agents",
    "authors": [
      "Hannes Ill",
      "Rafi Al Attrach",
      "Rajna Fani",
      "Ahram Han",
      "Ryohei Yamamoto",
      "Marlene Louisa Moerig",
      "Dukyong Yoon",
      "Leo Anthony Celi"
    ],
    "abstract": "Clinical research over electronic health records depends on derived variables whose definitions sit outside the schema, in item codes, time windows, missingness rules, and output-grain choices that change cohorts and downstream conclusions. We introduce M4Bench, 28 clinical derivation tasks across 15 task families on MIMIC-IV and eICU, to test whether AI coding agents can reproduce such derivations and how clinician-reviewed agent skills change their results. Its controls decompose the value of skills into specification completeness, delivery format, and schema familiarity. In a Docker-isolated Codex campaign (GPT 5.4 Mini and GPT 5.5), skills raise reward by 0.136 over the no-skill baseline, with 26 of 28 tasks improving. Specification completeness accounts for most of this gain: on an eight-task control subset, an operational spec alone raises reward by 0.162, and skills add only 0.024 on top, indistinguishable from zero. On a ten-task subset, decoy skills score like no skill and raw reference SQL nearly matches targeted skills, arguing against generic context or the skill format as the explanation. Schema obfuscation and restructuring preserve 86% and 70% of the skill gain (GPT 5.4 Mini, 26 MIMIC-IV tasks), a descriptive robustness check rather than a bound on memorization. A descriptive Claude Code replication on all 28 tasks (Opus 4.7 and Sonnet 4.6, 560 runs) is directionally consistent (+0.120, 21 of 28 tasks improving). These gains are partial agreement with the reference, not completed tasks: only 25 of 280 with-skill and 13 of 280 no-skill Codex runs pass every strict check, and skills barely change which rows agents return (key F1 +0.003). Skills are released as a versioned, clinician-reviewable markdown delivery format, with a family-level reference-validity audit. M4Bench releases tasks, skills, evaluation code, and sanitized per-run evidence as an open-source benchmark.",
    "published": "2026-10-27T15:59:13Z",
    "updated": "2026-10-27T15:59:13Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.37459"
  },
  {
    "id": "2610.37448",
    "title": "Test-Time Communication in Trading Agent Swarms",
    "authors": [
      "Avid Fayaz",
      "Harry Zhang",
      "Håvard Alstadheim",
      "Erik Nordlöf",
      "Vilhelm Karlin",
      "André Silva"
    ],
    "abstract": "Communication between agents has mostly been studied on tasks with a shared objective and fast, clear feedback. Trading has neither: each agent manages its own account, with decisions being scored by markets late and noisily. A trading swarm is thus a population of independent decision-makers rather than a team, for which convergence is a risk and not the goal. We ran 200 agents from four model families in groups of ten under five communication regimes, from isolation to message boards and shared notes, over seven US trading days (1 to 9 October 2026), logging everything each agent read before every decision. In two of the four families, communicating groups came to hold far more of the same stocks than the isolated group. A group's return was largely the return on what its members held in common. Seeing a post from a groupmate made an agent 7 percentage points more likely to reuse an eight-word phrase from it. Agents that started too close together to see each other's posts shared such a phrase in 14% of cases, the rate that common inputs produce. Seeing the post did not detectably change that morning's trades. Case studies traced the adoption of positions and decision rules over subsequent days, and communicating groups sold in step more often than isolated ones. Because isolated groups also converged on the same stocks, sometimes completely, assessments of herding need to measure excess convergence relative to a no-peer baseline.",
    "published": "2026-10-27T15:54:05Z",
    "updated": "2026-10-27T15:54:05Z",
    "categories": [
      "cs.MA",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.37448"
  },
  {
    "id": "2610.37446",
    "title": "PolyGandr: Steering Generative Models via Spatial Navigation through Latent Space",
    "authors": [
      "Mingwei S. G. Li",
      "Susie S. Y. Li",
      "Isabel Moreira de Oliveira",
      "Ryan P. Adams",
      "Remco Chang"
    ],
    "abstract": "Generative models support content creation across text, images, videos, and design disciplines, yet their interfaces rely primarily on natural language. While effective for specifying high-level intent, language can be inefficient and imprecise for fine-grained control, iterative refinement, and open-ended exploration. We present PolyGandr, a visual interface for exploring relationships between latent representations and generated outputs, complementing natural-language model steering. PolyGandr formulates generative control as high-dimensional navigation, enabling users to define starting points, steering directions, and step sizes through a unified map-and-mixing-palette interface. Combining global exploration with local refinement supports both broad design-space navigation and fine-grained output manipulation without repeatedly translating visual intent into prompts. We evaluate PolyGandr across three use cases: StyleGAN2 face generation, Stable Diffusion chair design, and rotational kirigami engineering. A formative study indicates that PolyGandr complements existing workflows by supporting real-time editing while simultaneously providing an overview and means to explore the broader design space.",
    "published": "2026-10-27T15:52:23Z",
    "updated": "2026-10-27T15:52:23Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.37446"
  },
  {
    "id": "2610.37437",
    "title": "Representing the Unseen: Rethinking Visual Imagination for Spatial Reasoning",
    "authors": [
      "Zengqi Zhao",
      "Zun Wang",
      "Shoubin Yu",
      "Mohit Bansal",
      "Yue Zhang"
    ],
    "abstract": "Visual world models increasingly support spatial reasoning by generating RGB views of unobserved states. However, RGB has become the default interface largely because it is well suited for visual generation, rather than necessarily being the most effective representation for downstream reasoning. Different spatial questions may benefit from different representations of the same imagined state: top-down geometry can facilitate global distance comparisons, while panoramic views provide broader context for reasoning about open space. To isolate the role of representation in spatial imagination, we introduce ImagiRep, a simulator-grounded benchmark of 922 questions spanning seven question types across two settings, Viewpoint Imagination and Cross-view Integration, providing oracle RGB and six alternative representations (e.g., depth, panoramic views, and top-down geometry) of the same unobserved state. This controlled comparison reveals that even accurate imagined RGB does not guarantee accurate spatial reasoning, and different questions benefit from different representations. Similar trends hold for representations derived from world-model-estimated states. Notably, estimated RGB alone can mislead spatial reasoning, while alternative representations retain complementary benefits. Building on these findings, we introduce GEARS, a lightweight test-time strategy for adaptive representation selection, outperforming existing spatial imagination methods and showing that reasoning about unseen states requires more than generating RGB views.",
    "published": "2026-10-27T15:48:09Z",
    "updated": "2026-10-27T15:48:09Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.37437"
  },
  {
    "id": "2610.37434",
    "title": "FeatureArc: Benchmarking Coding Agents on Evolving Features",
    "authors": [
      "Yunlong Wang",
      "Alyssa Wu",
      "Cuiyun Gao",
      "Jia Feng",
      "Songyuanyi Lu",
      "Zhichao Hu"
    ],
    "abstract": "A software feature usually evolves over time: developers extend its first version as new use cases and requirements arrive, and each extension builds on code written earlier. Most feature benchmarks evaluate a single request on a fixed codebase. Feature evolution requires evaluating successive extensions on an agent's own earlier code and checking whether the feature remains correct. We introduce FeatureArc to evaluate coding agents on evolving features, together with a pipeline that constructs its tasks from repository histories. The benchmark combines dependencies between successive stages of the same feature, explicit requirements and interface contracts, and executable checks across four programming languages. The pipeline validates fail-to-pass (F2P) tests for new behavior and pass-to-pass (P2P) tests for existing behavior on the reference code before and after each stage. We evaluated 10 coding agents on 73 manually reviewed tasks of 2 to 10 stages. Each agent works in one persistent session and workspace without external test feedback or rollback. The evaluation reveals a gap between first-stage and whole-feature success: pooled success falls from 62.7% at the first stage to 28.5% when the whole feature is tested on the final code. Trajectory analysis identifies inherited defects as a common failure mechanism, present in 72.9% of failed later stages. These earlier errors often remain undetected: in stages following a failure, agents leave the earlier error unnoticed about 95% of the time, and their self-tests rarely revisit earlier stages. Evolving a feature autonomously, without human checks between stages, therefore remains a substantial challenge for current coding agents. At Tencent, the pipeline extends internal evaluations to this setting and guides the development of Hunyuan, Tencent's family of large language models.",
    "published": "2026-10-27T15:45:50Z",
    "updated": "2026-10-27T15:45:50Z",
    "categories": [
      "cs.SE",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.37434"
  },
  {
    "id": "2610.37431",
    "title": "Segmentation Confidence for Arbitrary CNNs",
    "authors": [
      "Baris Oguz",
      "Xing Yao",
      "Claudia Tawil",
      "Alison Pouch",
      "Brett Byram",
      "Gabriel Arenas",
      "Nadav Schwartz",
      "Ipek Oguz"
    ],
    "abstract": "Convolutional neural networks (CNN) are widely used for medical image segmentation. However, they lack an inherent measure of confidence. Existing methods for estimating prediction uncertainty often require a custom network architecture and/or dedicated training setups and need to be trained from scratch. In addition, the deduction of a single confidence score per input from the uncertainty maps is not always straightforward. In this study, we explore voxel-based uncertainty estimation methods that can be added to existing segmentation pipelines without training from scratch. We also propose a novel method to estimate a single confidence score from the uncertainty maps. Our evaluations on different ROIs and modalities suggest that our confidence score can predict segmentation performance in unseen data.",
    "published": "2026-10-27T15:42:29Z",
    "updated": "2026-10-27T15:42:29Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.37431"
  },
  {
    "id": "2610.37430",
    "title": "When Visual Evidence Is Insufficient: How Instructions, Post-Training, and Internal Activations Shape Refusal in Multimodal Language Models",
    "authors": [
      "Ananth K Suresh",
      "Aveen Dayal",
      "Gouthaman KV",
      "Aditya Pola",
      "Vineeth N Balasubramanian"
    ],
    "abstract": "For reliable deployment, multimodal large language models (MLLMs) should recognize when an image provides insufficient evidence to answer a question and withhold unsupported answers. Yet refusal alone is not necessarily evidence of such recognition: models may refuse because of unrelated safety constraints or without identifying the missing evidence. We study how refusal on visually unanswerable questions is shaped by three sources of control: inference-time instructions, post-training, and internal activation interventions. Across three MLLMs on the MoHoBench benchmark, we systematically manipulate the meaning and placement of refusal instructions, compare supervised and preference-based post-training, and intervene on a refusal-related activation direction derived from naturally answered and refused examples. We find that refusal is highly sensitive to both the meaning and placement of instructions, with model-specific changes at the sample level that are obscured by aggregate refusal rates. Evidence-aware and general refusal instructions have stronger effects than an intentionally mismatched safety instruction. Post-training produces larger increases in refusal, but can also induce responses that combine refusal language with attempted answers. In contrast, activation intervention produces smaller yet transferable changes across prompt conditions, without evidence of indiscriminate refusal on tested visually answerable samples. These findings show that refusal is jointly shaped by external instructions, post-training, and internal representations, highlighting the need to disentangle evidence recognition from a model's learned propensity to refuse.",
    "published": "2026-10-27T15:42:20Z",
    "updated": "2026-10-27T15:42:20Z",
    "categories": [
      "cs.LG",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.37430"
  },
  {
    "id": "2610.37429",
    "title": "Bayes-Adaptive MDPs for Rollout Allocation to Enhance GRPO Training",
    "authors": [
      "Faeze Moradi Kalarde",
      "Armin Toroghi",
      "Nam Ho Koh",
      "Doo Hwan Hwang",
      "Seungjin Kim",
      "Kee-Eung Kim",
      "Scott Sanner"
    ],
    "abstract": "Group Relative Policy Optimization (GRPO) has demonstrated strong performance in LLM post-training. However, it allocates a uniform rollout budget to every training question, ignoring variations in question difficulty. As a result, highly difficult questions may receive too few rollouts to generate informative positive reward signals, limiting their contribution to training, while moderately difficult questions often receive more rollouts than necessary. In this work, we formulate the problem of difficulty-aware rollout budget allocation to maximize training utility under the same total rollout budget as standard GRPO. We propose AdaRoll-GRPO, which reformulates rollout allocation as a sequential decision-making problem and leverages a Bayes-adaptive Markov decision process (MDP) to learn an adaptive allocation policy. The learned policy is computed offline and applied during GRPO training without introducing additional online optimization overhead. Extensive experiments on multiple reasoning datasets and LLM architectures demonstrate that AdaRoll-GRPO consistently improves GRPO training performance under a fixed rollout budget, highlighting the effectiveness of adaptive rollout allocation for GRPO in LLM post-training.",
    "published": "2026-10-27T15:41:57Z",
    "updated": "2026-10-27T15:41:57Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.37429"
  },
  {
    "id": "2610.37427",
    "title": "Time-Dynamic Semantic-Activity Entanglement: Quantifying Communication-Based Synchrony in Collaborative VR",
    "authors": [
      "Pooja Pol",
      "Jianing Zhang",
      "Qing Huang"
    ],
    "abstract": "Collaborative virtual reality (VR) produces rich multimodal traces of team behavior, yet practical methods for characterizing time-varying team communication remain limited. We present time-dynamic semantic-activity entanglement (TSAE), inspired by the entanglement concept introduced by Gloor et al. (2022), to describe communication-based team synchronization within discrete time windows. TSAE is modeled by combining relative speaking activity with contextual semantic alignment for participant pairs, which is aggregated into participant-level trajectories and summarized through the Gini coefficient to understand the distribution of team-level communication synchrony. This approach is employed with German-language transcripts from fifteen collaborative VR gameplay sessions. Transcript utterances are represented using a long-context embedding model with a late-chunking strategy and analyzed within fixed game-time windows. A representative session illustrates shifting dyadic alignment and low-to-moderate participant contributions, with sporadic periods of high entanglement. Across fifteen game sessions, the metrics indicate complementary insights, offering a qualitative contrast to the core-periphery pattern reported in the foundational work. Hence, these descriptive findings support the study of communication as a dynamic process and provide a mathematically grounded approach to analyze its evolving distribution in shared interactive VR spaces.",
    "published": "2026-10-27T15:40:51Z",
    "updated": "2026-10-27T15:40:51Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.37427"
  },
  {
    "id": "2610.37422",
    "title": "Beyond the Readout: A Latent Numerical Frame Shared Across Modality and Operation",
    "authors": [
      "Oriol Juan Sabater",
      "Alex Ferrando de las Morenas",
      "Pau Rodríguez",
      "Xavier Suau"
    ],
    "abstract": "When a multimodal model computes 17+35 from text or 91-39 from a rendered image, it produces the same answer, 52. Does it use one internal concept of number for both, or separate machinery for each path? Similarity metrics such as RSA or CKA cannot settle this question. They give the same score to identical and to rotated directions, and two representations can look alike only because both prepare the same output digits. We therefore use causal interventions. For four conditions (text or image, addition or subtraction), we learn a small subspace of Gemma4-12B-it's residual stream in which swapping coordinates swaps the model's answer. The subspaces answer three questions. First, do the conditions write numbers along the same directions? They do not. Reusing a subspace from text in an image on the same operation recovers only 53.2% of its causal effect. A single rotation and rescaling maps one subspace onto the other and raises recovery to 91.4%, so the conditions share one geometry expressed in different coordinates. Second, does this shared geometry only reflect the digit the model is about to print? To test this, we split each subspace into 9 directions that the output layer reads to choose the next digit and 13 directions that it cannot see. The 13 hidden directions still carry the number, yet changing them barely alters the digit being written. Third, what are these hidden directions for? A model must emit a multi-digit answer one digit at a time, so it can compute the full result early and keep it in reserve. When two numbers share their first digit, swapping the number in the hidden directions leaves the digit being written intact and redirects the next digit in 77.6% of cases. The model thus forms an abstract numerical concept upstream and unfolds it across time: multimodal representations share meaning through relational geometry across distinct coordinate frames.",
    "published": "2026-10-27T15:36:46Z",
    "updated": "2026-10-27T15:36:46Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.37422"
  },
  {
    "id": "2610.37738",
    "title": "Poisoned Skills: Propagating Jailbreaks Through Agent Markdown Files",
    "authors": [
      "Kashyap R Manjusha",
      "Murali Emani"
    ],
    "abstract": "Modern agent frameworks allow users to provide Markdown files containing system prompts, tool descriptions, and skill definitions (e.g., SKILL.md), which are incorporated into the agent's context during initialization. In this work, we investigate whether this configuration mechanism can also serve as an injection channel: can a jailbreak embedded in a Markdown skill file propagate through an agent and induce prohibited behavior? To answer this question, we construct a LangChain-based question-answering agent whose system prompt is assembled from a user-provided Markdown file. We embed a jailbreak combining persona manipulation with a GPTFUZZER-based attack and evaluate its effectiveness across seven contemporary open-weight models using 270 forbidden questions spanning nine harm categories. Under a benign system prompt, the models exhibit near-complete refusal behavior, with a mean attack success rate (ASR) of just 0.5%. In contrast, the injected skill file raises the mean ASR to 45%, reaching 68.9% for individual models. We further evaluate two payload obfuscation strategies: an invisible zero-width character-based stealth payload and a phonetic payload based on grapheme-to-phoneme transformations. Neither outperforms the plain-text injection; notably, the phonetic variant reduces mean ASR to 30%. These findings identify Markdown skill files as an underexplored attack surface for AI agents and suggest that vulnerability to configuration-based jailbreaks depends more strongly on the underlying model than on the specific payload obfuscation technique.",
    "published": "2026-10-27T15:29:41Z",
    "updated": "2026-10-27T15:29:41Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.37738"
  },
  {
    "id": "2610.37407",
    "title": "Constraining the Commit Boundary: A DIO/ODI-Informed Authorization Guardrail for Agentic Entity Resolution",
    "authors": [
      "Daniel Beránek"
    ],
    "abstract": "Agentic Entity Resolution (ER) systems iteratively plan actions, retrieve evidence, revise hypotheses, and propose graph mutations. An erroneous identity hypothesis may condition later retrieval and produce apparent confirmation. This paper proposes a Digital Identity Optimization (DIO) and Ontology of Digital Identity (ODI)-informed authorization boundary between evidence available for agent reasoning and evidence eligible to authorize persistent identity-changing mutations. A domain-governed constraint-binding function maps selected reconstruction-failure distinctions to explicit identity-preserving constraints. An abstract two-phase supervisor permits a commit only when claim-specific authorization-eligible evidence supports every required proposition, relevant conflicts are resolved, the operation remains within its authorized scope, and relevant state and policy versions remain valid. Admission as UNVERIFIED does not confer authorization eligibility. Separate claim-specific promotion governs evidentiary use; insufficient support or unresolved material conflict leads to deferral. The contribution is a specification connecting diagnostic-to-constraint mapping, evidence promotion, proposition coverage, conflict handling, scope binding, and commit-time version integrity. A proposed evaluation protocol is designed to assess the mapping's incremental value beyond generic authorization and conventional identifier rules. This is a conceptual architecture without implementation or empirical validation, not a theorem of semantic correctness. Its property depends on domain-policy adequacy, evidence promotion, and enforcement. It does not prevent erroneous hypotheses or hypothesis-conditioned retrieval; dependency-aware evidence flow remains future research.",
    "published": "2026-10-27T15:22:00Z",
    "updated": "2026-10-27T15:22:00Z",
    "categories": [
      "cs.AI",
      "cs.CR",
      "cs.DB"
    ],
    "url": "https://arxiv.org/abs/2610.37407"
  },
  {
    "id": "2610.34865",
    "title": "ECHOES: An Adaptive LLM-Powered AR Glasses Docent for Evidence-Grounded Urban Heritage Interpretation",
    "authors": [
      "Bang Xiao",
      "Baosheng Jin",
      "Jinhan Niu",
      "Xingchen Zhang",
      "Hua Shen"
    ],
    "abstract": "Urban heritage tours are often delivered through fixed scripts, leaving limited room for visitors' situated questions, language preferences, or requests for evidence. We present ECHOES, an adaptive LLM-powered AR glasses docent for evidence-grounded interpretation of historical buildings. Specifically, the agent adapts along three dimensions: it modifies response structure according to the type of visitor question (identification, architectural detail, evidence-seeking, or route inquiry); it accumulates session-level interest signals from repeated questions and expressed curiosity to shape later explanations; and it tracks language preference and retrieval context across turns to maintain conversational continuity. The core of ECHOES is an LLM agent initialized as a source-aware urban heritage docent that realizes this adaptation through dialogue and preference context maintained across the session. Around this agent, ECHOES integrates visual site grounding, a self-built historical knowledge base supporting retrieval-augmented generation, and concise multilingual AR output designed for glanceable use. Through a working prototype centered on Shanghai's East Nanjing Road and the Bund, we demonstrate how an adaptive LLM-powered AR docent can transform historical tours from scripted narration into situated, question-responsive, and source-aware conversations.",
    "published": "2026-10-26T05:27:57Z",
    "updated": "2026-10-26T05:27:57Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.34865"
  },
  {
    "id": "2610.34855",
    "title": "DecoyCount: Evaluating Visual-Reasoning Misalignment in Counting",
    "authors": [
      "Qiuyi",
      "Zhang",
      "Zhen Xu",
      "Jing Gu",
      "Seojin Bang",
      "Arnav Mohanty Das",
      "Yaning Hu",
      "Gautam Kumar",
      "Jared Lichtarge",
      "Le Xue",
      "Bettina Catoto",
      "Akul Datta",
      "Daniel Luo",
      "Farha Khan",
      "Marcella Valentine",
      "Yinfei Yang",
      "Andrew M. Dai"
    ],
    "abstract": "Visual counting benchmarks report whether vision-language models produce the correct number, but not whether errors arise from perception or reasoning. We introduce DecoyCount, a benchmark built from 1,660 real-world images with designed decoys across seven mechanisms, along with paired prompts: a neutral question, a matched alignment cue, and a novel multi-hop, multi-image question that situates the same counting problem in a realistic scenario. Using this design, we find that counting failures are induced partly by visual misalignment: models can execute the intended counting process when cue-guided but fail to select it unaided, and we term this difference in accuracy the reasoning-alignment gap. Despite being highly capable on general reasoning, frontier models remain below 50\\% accuracy on our benchmark, while alignment gaps range from 11.8-22.1 percentage points; strikingly, we observe that more capable models, greater thinking budgets, and agentic processes often induce larger gaps. Because humans may bring context that models lack, we test whether textual underspecification contributes to misalignment using a scenario-based multi-hop condition without explicit hinting, but this added context does not improve aggregate performance. Our analysis concludes that stronger general reasoning does not by itself generalize to aligned visual reasoning, leaving misalignment with human visual expectations as a substantial component of the remaining deficit.",
    "published": "2026-10-26T05:19:02Z",
    "updated": "2026-10-26T05:19:02Z",
    "categories": [
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.34855"
  },
  {
    "id": "2610.34854",
    "title": "Learning Dual-Camera Smooth Zoom via Decoupled Geometric-Photometric Data Synthesis",
    "authors": [
      "Junjie Fan",
      "Zhilu Zhang",
      "Renlong Wu",
      "Dazhi Zhang",
      "Wangmeng Zuo"
    ],
    "abstract": "When zooming between dual cameras on smartphones, prominent discontinuities in both geometric perspective and color rendition inevitably degrade the visual experience of users. To address this issue, we introduce the dual-camera smooth zoom (DCSZ) task, aiming to synthesize continuous intermediate frames for fluid zooming. However, directly applying existing video frame interpolation (VFI) models to this task is severely hindered by substantial domain gaps and the practical intractability of capturing real-world continuous ground-truth. To this end, we propose a novel data synthesis framework to generate high-fidelity DCSZ training sequences, named ZoomGS v2. It explicitly decouples geometric and color transformations from 3D scene representation modeling, thereby enabling extensive data generation from easily accessible single-camera 3D scenes. Furthermore, we develop ZoomFI, a specialized VFI network tailored to the DCSZ task, which leverages complementary bidirectional warping for comprehensive dual-camera information fusion. Extensive experiments on test datasets captured using two mobile phones demonstrate that training with the constructed DCSZ data significantly improves the performance of various VFI models. Moreover, ZoomFI achieves state-of-the-art results in both quantitative metrics and visual quality. The datasets, code, and pretrained models are available at https://hitjunjief.github.io/DCSZ-v2",
    "published": "2026-10-26T05:18:00Z",
    "updated": "2026-10-26T05:18:00Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.34854"
  },
  {
    "id": "2610.34850",
    "title": "Recovering Black-Box Point Cloud Models from Pose Shifts via Derivative-Free Optimization",
    "authors": [
      "Seonghwan Park",
      "Min-Gyu Park"
    ],
    "abstract": "Point cloud models are increasingly deployed through score-only black-box interfaces. Under this access model, test-time rotations outside the training distribution can substantially degrade performance. Although existing mitigations such as equivariant retraining and gradient-based adaptation are effective, they are infeasible without access to model weights or gradients. To address this limitation, we propose CanDO, a test-time canonicalization method that recovers lost performance using only forward queries. Specifically, CanDO searches for an input transformation that maximizes model confidence and uses derivative-free optimization to perform this search without gradients. We further identify three conditions for successful recovery: a training augmentation gap, an accuracy-aligned confidence surrogate, and global search over a multi-modal objective. Across multiple architectures and benchmarks, CanDO recovers 76% of the oracle gap under azimuthal misorientation and 51% under arbitrary SO(3) rotations for object part segmentation. These results show that frozen score-only point cloud models can recover from rotation-induced distribution shifts through post-deployment canonicalization alone.",
    "published": "2026-10-26T05:07:36Z",
    "updated": "2026-10-26T05:07:36Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.34850"
  },
  {
    "id": "2610.34846",
    "title": "Seeing Before Naming: Context-Grounded Learning of Novel Visual Concepts",
    "authors": [
      "Gabriel Adineera",
      "Jinoh Kim"
    ],
    "abstract": "Learning an unfamiliar visual category requires more than adapting a classifier: the model must connect its visual evidence to a useful semantic name. A pre-trained vision-language model can retain discriminative image features while providing a weak textual anchor for the target concept. We address this imbalance through context-grounded semantic anchoring. Our framework, SynerNet, learns concept-specific name embeddings, exposes them to compatible linguistic contexts, and conditions their representations on visual evidence. Difficulty-aware processing and adaptive objective weighting coordinate this adaptation while retaining the pre-trained backbone. On four VISTA-Beyond domains, SynerNet reaches a mean 16-shot accuracy of 74.35%, compared with 72.45% for few-shot name learning. Across 14 domains in the name-masked transfer setting, it improves mean accuracy from 45.17% to 46.74%. Ablations identify concept-specific name embeddings and cross-modal context integration as important components. These results support treating concept acquisition as the construction of visually grounded semantic anchors.",
    "published": "2026-10-26T04:55:38Z",
    "updated": "2026-10-26T04:55:38Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.34846"
  },
  {
    "id": "2610.34845",
    "title": "PosePlaner: Denoising Any Feed-Forward Pose Predictor from Pairwise Planar Geometry",
    "authors": [
      "Yihang Chen",
      "Bin Tan",
      "Yujun Shen",
      "Yinghao Xu",
      "Nan Xue"
    ],
    "abstract": "Recent multi-view Transformers (e.g., DUSt3R and VGGT) have advanced 3D reconstruction by scaling training data and model capacity from two views to many views and long sequences, subsuming the classical SfM/SLAM pipeline of feature extraction, matching, and pose estimation in a single feed-forward pass. Yet this subsumption hides the interfaces between pipeline stages---correspondences, geometry, and pose are entangled in a single forward pass, leaving supervised fine-tuning as the major path to improvement and offering no mechanism to correct predictions from geometric evidence at test time. We propose PosePlaner to close this gap by reviving the classical coupling between correspondences and pose via flow matching, treating pose refinement as a conditional generation problem that takes coarse geometric matches and initial pose as input condition and fuses the resulting pose hypotheses into a single refined estimate, providing a continuous, data-driven analog of RANSAC voting. Our method is trained efficiently on two-view data, yet serves as a periodic refiner for streaming n-view pose estimators with no retraining. Empirically, it corrects failures of feed-forward predictors, substantially improves correspondence-based solvers, and reduces accumulated drift in long streaming sequences.",
    "published": "2026-10-26T04:55:36Z",
    "updated": "2026-10-26T04:55:36Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.34845"
  },
  {
    "id": "2610.34837",
    "title": "Beyond Behaviour: A Stimulus-Response Safety Evaluation of Vision-Language-Action Models",
    "authors": [
      "Vy Vo",
      "Dinh Phung"
    ],
    "abstract": "Humans exhibit biological sensitivity to safety-critical stimuli that can trigger defensive action. Across three models and two video benchmarks, we investigate whether similar responses emerge in vision-language-action models by examining their internal representations and action tendencies in response to visible hazards and harmful consequences. Our findings suggest that task execution may remain the default response even when danger is internally registered.",
    "published": "2026-10-26T04:36:21Z",
    "updated": "2026-10-26T04:36:21Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.34837"
  },
  {
    "id": "2610.34836",
    "title": "Collective Emergent Alignment: Measuring and Amplifying Interaction-Induced Reasoning Alignment in Multi-Agent LLMs",
    "authors": [
      "Boxuan Wang",
      "Zhuoyun Li",
      "Sarvapali D. Ramchurn",
      "Xiaowei Huang",
      "Yi Dong"
    ],
    "abstract": "Multi-agent large language model (LLM) systems can exhibit emergent behaviors through interaction, yet whether a similar phenomenon exists for reasoning alignment remains largely unexplored. We study whether agent interaction produces additional reference-grounded reasoning alignment beyond matched individual self-refinement, and introduce REMAP (Reference-Entailment-Matrix for Agentic Process), a framework that quantifies this effect through Semantic Coverage and interaction-specific alignment gains. Across diverse model families and two multi-hop reasoning benchmarks, we observe broadly positive interaction gains, particularly on reasoning content that depends on integrating evidence distributed across agents. These gains are consistently associated with independently measured peer-information recovery, while further analysis reveals composition-dependent heterogeneity effects and asymmetric information transfer across agent capability levels. Motivated by these findings, we further introduce a fact-level multi-agent communication framework that replaces full reasoning-trace exchange with compact, gap-aware, and selectively routed information. Our experiments show that compact fact exchange improves reasoning alignment and task performance while reducing communication overhead, whereas more selective communication exposes a trade-off between acquiring distributed information, retaining local content, and communication efficiency. Overall, our results show that collective emergent alignment can be quantified, linked to information-transfer patterns, and used to guide more effective multi-agent communication.",
    "published": "2026-10-26T04:31:56Z",
    "updated": "2026-10-26T04:31:56Z",
    "categories": [
      "cs.AI",
      "cs.MA"
    ],
    "url": "https://arxiv.org/abs/2610.34836"
  },
  {
    "id": "2610.34833",
    "title": "Streaming Recurrent Memory",
    "authors": [
      "Mohamed Elsayed",
      "Minh Pham",
      "A. Rupam Mahmood"
    ],
    "abstract": "Natural intelligence learns from a continuous stream of sensorimotor experience: data can arrive at high bandwidth, and behavior adapts to feedback as soon as it arrives, even when it is delayed. In contrast, most modern deep learning systems rely on stored datasets, replay buffers, and retained contexts through which credit is later assigned. At high data rates, storing and revisiting past experience can be impractical under tight memory and computational constraints. This paper studies recurrent memory under a streaming learning constraint: the learner learns from experience as soon as it arrives without storing raw experience. We ask whether a streaming learner can maintain a state that remains useful for future prediction and control from delayed feedback. We introduce Streaming Recurrent Memory (SRM), a recurrent memory designed for the streaming setting which preserves information that may matter later while remaining trainable with one-step backpropagation through time (BPTT). SRM provides a streaming-compatible recurrence that is designed to recall past information by content or time, track elapsed steps, and compose transformations whose outcome depends on the order in which inputs are observed. Across controlled memory tasks and streaming applications, SRM learns effectively with one-step BPTT, outperforming recurrent baselines in associative recall and online language modeling while achieving near-perfect success in associative T-Maze with delayed rewards. These results suggest that fixing how inputs are stored in the recurrent state, while learning how that state is read out, enables effective streaming learning without long-range backpropagation.",
    "published": "2026-10-26T04:29:44Z",
    "updated": "2026-10-26T04:29:44Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.34833"
  },
  {
    "id": "2610.34829",
    "title": "Logic Hijacking of RAG: Single-Document Poisoning via Local Optimization",
    "authors": [
      "Hangyi Zhao",
      "Bonan Zhang",
      "Fusen Guo",
      "Jiaheng Wei",
      "Chao Chen",
      "Tianqing Zhu"
    ],
    "abstract": "Single-document corpus poisoning under black-box access poses a severe threat to Retrieval-Augmented Generation (RAG). However, existing attacks predominantly rely on explicit factual refutations or imperative instruction overrides. Modern aligned LLMs often arbitrate such conflicts conservatively, rejecting overt contradictions in favor of parametric memory or clean retrieved context while triggering input guardrails. We propose MONOLOGUE, a single-document poisoning framework based on Logic Hijacking without explicit refutation. Rather than disputing the ground truth, our method concedes it as an authoritative historical baseline before introducing the update, weaving a grounded record-correction narrative (e.g., dated institutional reattributions) that presents the counterfactual target as the most recent update. To prevent suspicious live writes, payloads are refined entirely offline via local multi-dimensional gated optimization, coupling automated text quality audits with surrogate behavioral verification. Evaluations across three benchmarks, three retrieval backends, and four open-weight generator regimes show that our method achieves the strongest overall attack efficacy among the evaluated single-document poisoning attacks.",
    "published": "2026-10-26T04:23:01Z",
    "updated": "2026-10-26T04:23:01Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.34829"
  },
  {
    "id": "2610.34826",
    "title": "TrustJev: Separating Policy Authority from Untrusted Evidence in LLM-Based Decisions",
    "authors": [
      "Zhiwei Xu",
      "Xuyang Liu",
      "Xiaolin Peng",
      "Weixian Deng",
      "Jiabao Gao",
      "Zirui Li",
      "Tian Qiu",
      "Boya Zhou",
      "Wei Jiao",
      "Hai Wan",
      "Xibin Zhao"
    ],
    "abstract": "Decision models enable software to select from predefined actions using natural language inputs. However, the external evidence that supplies facts for these decisions may also contain instructions that attempt to override the application's policy. We propose TrustJev, a framework combining protected policy scoring with bounded evidence corrections. A single Transformer backbone computes policy scores and a correction budget from trusted policy and candidates, then bounds evidence corrections by that budget. Paired supervision encourages stable predictions under instruction insertions that preserve task facts and changed preferences when edits change the correct answer. Authority supervision accommodates evidence when the policy alone cannot determine the decision. We evaluate a 0.6B implementation against 14 baselines on three datasets covering authentication, instruction hierarchy, and executable authorization rules. TrustJev achieves the highest mean Balance, the harmonic mean of accuracy on non-attack and attack inputs, exceeding the strongest baseline on each by 0.57-1.05 percentage points. In the authorization benchmark, it correctly answers all 32 attacks per source in a fixed pool for 95.77% of sources, compared with 80.98% for the strongest comparator. TrustJev maintains comparable inference memory and median latency, with additional overhead primarily during training.",
    "published": "2026-10-26T04:17:53Z",
    "updated": "2026-10-26T04:17:53Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.34826"
  },
  {
    "id": "2610.34825",
    "title": "Interpretable Brain Age Prediction Using White Matter Fiber Orientation Distributions with Rotation-Equivariant Deep Learning",
    "authors": [
      "Chenyang Fan",
      "Robert D. Sanders",
      "Elie Matar",
      "Yixuan Yuan",
      "Xiang Li",
      "Sharon L. Naismith",
      "Fernando Calamante",
      "Jinglei Lv"
    ],
    "abstract": "Diffusion MRI (dMRI) provides information about white matter microstructure that can support brain age prediction. However, many existing prediction models use diffusion tensor imaging (DTI) scalar metrics that omit orientation information. Deep learning is increasingly used for brain age prediction, but conventional CNNs do not explicitly respect the geometric structure of orientation-dependent features. We present an interpretable brain age prediction framework that combines white matter fiber orientation distributions (WM-FODs) with an SE(3) (Special Euclidean group in 3 dimensions) equivariant CNN. The network operates directly on spherical harmonic (SH) coefficients of the FOD, preserving their transformation properties under rotation. Evaluation in 692 participants aged 36-90 years from the Human Connectome Project Aging dataset showed that the combined framework outperformed the evaluated DTI-based models and conventional CNNs. Averaging predictions from five cross-validation models yielded a mean absolute error of 3.54 years and Pearson's correlation of 0.958. Our results indicated that the performance advantage depended on combining WM-FODs with equivariant processing. Prediction accuracy was highest at a maximum SH order of Lmax = 2 and declined at higher orders. Tract-level occlusion, where each segmented tract was masked in turn, revealed age-dependent patterns of model sensitivity, with importance peaks in frontal projection pathways at 36-44 years, the fornix at 45-54 years, the callosal isthmus at 55-64 years, the middle cerebellar peduncle at 65-74 years, and the callosal genu at 75-90 years. These findings support rotation-equivariant processing of WM-FODs for accurate brain age prediction with anatomically interpretable model sensitivity.",
    "published": "2026-10-26T04:14:38Z",
    "updated": "2026-10-26T04:14:38Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.34825"
  },
  {
    "id": "2610.33605",
    "title": "Data Governance for Generative and Agentic AI : Technology, Law, Economics, and Security",
    "authors": [
      "Narayana Darapaneni",
      "Padmaja K",
      "Gnana Chaithra D"
    ],
    "abstract": "This book develops a unified governance framework for systems that retrieve, generate, infer, remember and act on information from large language models and retrieval augmented pipelines to autonomous multi agent systems. Eleven chapters and eight appendices integrate three disciplinary lenses-technology, law and economics-across the full lifecycle: data quality, lineage and provenance; global data protection law and intellectual property; the economics of data governance; digital trust, cybersecurity and zero-trust architecture; ethics and responsible AI; governing generative AI pipelines; governing agentic AI and multi-agent systems; data governance in elections and the public sphere; AI regulation across six jurisdictions; and the design of a governance control plane for 2030. Each chapter is anchored in Indian law and institutions while maintaining a comparative, cross jurisdictional perspective.",
    "published": "2026-10-24T11:03:57Z",
    "updated": "2026-10-24T11:03:57Z",
    "categories": [
      "cs.AI",
      "cs.CY"
    ],
    "url": "https://arxiv.org/abs/2610.33605"
  },
  {
    "id": "2610.33594",
    "title": "Counterfactual Model Testing Under Distribution Shift",
    "authors": [
      "Joran Leest",
      "Ilias Gerostathopoulos",
      "Claudia Raibulet",
      "Patricia Lago"
    ],
    "abstract": "Deployed machine learning (ML) models can degrade as the distribution of their input data shifts. Such shifts can result from changes in the population or from data integrity issues in the pipeline that materializes model features, two sources that operate through different mechanisms. Because labels are often absent or delayed, it is common practice to track shifts in the data instead, but a detected shift does not indicate how it affects the model. We formulate this problem as online model testing under distribution shift. Testing requires reproducing the shift on a controlled baseline with known labels. Since the same shift can come from either source, doing so requires knowing which mechanism changed. We propose a methodology that reproduces observed changes in both mechanisms to estimate current performance and the potential gain from repairing observed data integrity issues. Experiments on real-world datasets with simulated faults show that separating the two sources generally improves both estimates, supporting this formulation. A churn prediction case illustrates how these tests can support monitoring and repair prioritization",
    "published": "2026-10-24T10:42:31Z",
    "updated": "2026-10-24T10:42:31Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.33594"
  },
  {
    "id": "2610.33592",
    "title": "Auditing evaluation artifacts and data leakage in large language model systems for rare disease diagnosis",
    "authors": [
      "Jian Yang",
      "Peilin Liu",
      "Xiaohan Li",
      "Songda Li",
      "Yu Cao",
      "Yuqing Feng",
      "Haomin Li"
    ],
    "abstract": "Augmented large language model (LLM) systems have reported high benchmark accuracies in rare disease diagnosis, yet their real-world clinical utility remains unproven. A recent meta-analysis flagged augmented LLM diagnostic evaluations as having a high risk of bias due to suspected data leakage; however, the precise impact of these vulnerabilities on model inference has yet to be fully quantified. In this study, we present a comprehensive empirical audit to quantify evaluation artifacts across prevailing AI paradigms, using a repository of over 60,000 cases from diverse public and independent clinical cohorts. By reconstructing a state-of-the-art agentic framework, we demonstrate that candidate-space contamination artificially inflates performance: enforcing strict cross-dataset isolation resulted in a marked performance decline, with the cross-dataset mean Recall@1 decreasing from 54.3% (under conventional one-vs-rest evaluation) to 40.3% (Hedges' g = 0.94). Similar spatial overfitting in supervised classifiers caused diagnostic accuracy to drop from an internal mean of 42.9% to 16.7% across external cohorts (Cohen's d = 2.01). Furthermore, we quantify how LLMs infer diagnoses by exploiting retrospective therapeutic cues in clinical narratives, and how temporal misalignment in foundational knowledge bases leads to performance fluctuations. We conclude that prevailing evaluation protocols for augmented LLM systems inadvertently reflect data leakage rather than genuine medical reasoning. To address these systematic artifacts, we propose a rigorous evaluation framework - coupling strict data-isolation protocols with standardized benchmarking safeguards - to ensure future diagnostic AI for rare diseases is evaluated on actual clinical robustness.",
    "published": "2026-10-24T10:35:48Z",
    "updated": "2026-10-24T10:35:48Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.33592"
  },
  {
    "id": "2610.33589",
    "title": "Mix Forcing: Causal Pre-Training via Mixture Attention for Interactive World Models",
    "authors": [
      "Zelin Gao",
      "Hao Ouyang",
      "Jiapeng Zhu",
      "Qiuyu Wang",
      "Jingye Chen",
      "Zichen Liu",
      "Xing Zhu",
      "Yujun Shen",
      "Yinghao Xu"
    ],
    "abstract": "While interactive video world models require autoregressive generation, directly adapting pretrained bidirectional video diffusion models into autoregressive ones with teacher forcing can disrupt their visual priors and degrade autoregressive generation quality. In this paper, we introduce Mix Forcing, a causal pre-training paradigm for interactive video world models, implemented with the Mixture-of-Bidirectional-and-Autoregressive (MoBA) attention. Mix Forcing jointly trains a video diffusion model with both teacher forcing and bidirectional training, yielding a strong causal initialization for few-step post-training. In self-attention, Mix Forcing leverages teacher forcing to learn causal next-chunk prediction for autoregressive rollout, while using bidirectional attention to preserve pretrained visual priors. To support online text interaction, Mix Forcing further adopts a chunk-wise cross-attention design that conditions each video chunk on a shared environment prompt and its own local prompt, without exposing future instructions to the current chunk. Following causal pre-training on a 14B image-to-video model, we apply consistency and distribution matching distillation to obtain a four-step autoregressive generator. Experiments on our internal benchmark and public benchmarks, including WBench and SANA-WM-Bench, show that our model achieves state-of-the-art visual quality and timely event following with precise camera control. Notably, our model supports high-fidelity long-horizon generation without quality degradation even over one-hour rollouts. Project page is here: https://zelingao98.github.io/mixforcing",
    "published": "2026-10-24T10:31:58Z",
    "updated": "2026-10-24T10:31:58Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.33589"
  },
  {
    "id": "2610.33582",
    "title": "Replicate What Varies: Resource Sharing for Domain-Randomized Embodied Simulation",
    "authors": [
      "Zixu Hao",
      "Weijun Wang",
      "Xiangyu Li",
      "Liang Mi",
      "Hao Wu",
      "Yunxin Liu",
      "Ting Cao"
    ],
    "abstract": "Simulation provides a low-cost sandbox where embodied agents can attempt tasks, observe outcomes, and learn from experience. Running many diverse simulation environments concurrently can consume substantial CPU and GPU memory because independently constructed scenes duplicate resources that remain unchanged across instances. We present Patchwork, a resource-sharing system for domain-randomized simulation, built around the representation $E=T+Δ$: a shared template contains common resources, and a patch records the mutations needed to construct a target environment. Patchwork separates randomization sampling from replay and selects reusable templates together with patches that preserve each target environment's intended configuration. Its layered runtime shares compiled model structure and immutable assets while keeping mutable parameters and simulation state private to each instance. We implement Patchwork on robosuite and MuJoCo and evaluate it on LIBERO-plus and RoboCasa365 workloads. At 32 replicas, shared-template execution reduces CPU RSS by 88-92% relative to process-per-environment execution. Controlled experiments show how sharing shifts memory growth toward template diversity and unique asset content rather than instance count, within the supported sharing boundaries.",
    "published": "2026-10-24T10:20:13Z",
    "updated": "2026-10-24T10:20:13Z",
    "categories": [
      "cs.DC",
      "cs.AI",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2610.33582"
  },
  {
    "id": "2610.33581",
    "title": "UltraFlash: Accelerating Megapixel Visual Synthesis",
    "authors": [
      "Phuc Lai",
      "Anh Nguyen",
      "Phong Nguyen",
      "Anh Tran"
    ],
    "abstract": "Megapixel visual synthesis with latent diffusion models requires operating far beyond the resolutions at which these models are typically trained. Cascade refinement is a leading strategy for this setting: it starts from a base image at a native resolution and progressively upsamples it to the target resolution through multiple refinement stages. Each stage typically performs a pixel-space resolution transition followed by latent-space denoising. While prior acceleration efforts mainly focus on reducing denoising cost, we identify a complementary and underexplored bottleneck: the repeated movement of representations through the VAE. We call these operations pixel-space transitions. In cascade pipelines, intermediate latents are often decoded to RGB, resized, and re-encoded before refinement, while final latents are decoded patch by patch with dense overlap to suppress boundary artifacts. We propose UltraFlash, a transition-efficient approach that accelerates these VAE-heavy operations. UltraFlash has two components. Latent Hyperloop replaces intermediate RGB round trips with a learned latent-space shortcut that approximates the decode-resize-encode transformation without repeated VAE decoding and encoding. Sparse Patch-based Decoding accelerates final reconstruction by addressing patch seams caused by inconsistent GroupNorm statistics and reusing cached statistics across patches, enabling sparse VAE decoding with much smaller overlap. Integrated into a state-of-the-art cascade baseline, UltraFlash reduces 4K generation latency by approximately 2x while improving image quality. These results show that optimizing pixel-space transitions can improve both efficiency and fidelity, offering an effective route toward fast, high-quality megapixel visual synthesis.",
    "published": "2026-10-24T10:19:20Z",
    "updated": "2026-10-27T11:09:49Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.33581"
  },
  {
    "id": "2610.33580",
    "title": "ZoomSEM: accelerating large-scale brain connectomics with intelligent SEM super-resolution",
    "authors": [
      "Jiateng Shou",
      "Zhiwei Xiong",
      "Ruikang Xu",
      "Zhicheng Wang",
      "Peiyao Shi",
      "Te Shi",
      "Haiqun Jin",
      "Chunying Yin",
      "Jun Guo",
      "Manfred Auer",
      "Hanchuan Peng",
      "Ruobing Zhang",
      "Feng Wu"
    ],
    "abstract": "Serial electron microscopy (EM) is essential for large-volume biological imaging and connectomics, yet its throughput remains a major bottleneck, with cubic-millimeter-scale brain imaging requiring months or years. Existing deep learning-based EM super-resolution methods are limited to small upscaling factors or rely on synthetic data, offering modest acceleration and limited practical impact. We introduce ZoomSEM, a deep learning-based super-resolution method to dramatically accelerate SEM imaging. Trained on real low- and high-resolution scanning electron microscopy (SEM) pairs, ZoomSEM enables reliable recovery of 4$\\times$, 8$\\times$, and up to 16$\\times$ higher-resolution images from fast low-resolution scans while preserving fine neuronal structures critical for connectomic analysis, achieving up to 30-fold effective acceleration. Extensive experiments across datasets of diverse biological samples demonstrate robust generalization under realistic low-resolution acquisition. This advance enables high-resolution, large-volume serial EM imaging at unprecedented speed, poised to transform connectomics and related fields.",
    "published": "2026-10-24T10:18:50Z",
    "updated": "2026-10-24T10:18:50Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.33580"
  },
  {
    "id": "2610.33575",
    "title": "CADonatello: Towards Real-World Multi-Part 3D CAD Reconstruction",
    "authors": [
      "Ahmet Serdar Karadeniz",
      "Dimitrios Mallis",
      "Parsa Akbari Chianeh",
      "Kseniya Cherenkova",
      "Anis Kacem",
      "Djamila Aouada"
    ],
    "abstract": "Existing methods for CAD reconstruction from 3D scans achieve strong performance on standard benchmarks, yet their effectiveness often degrades in real-world scenarios where objects consist of multiple parts and scan artifacts such as noise. A key reason is that current CAD reconstruction datasets predominantly contain single-part models and clean geometric inputs, limiting the ability of learned models to generalize to realistic settings. In this work, we introduce CADonatello, a part-aware framework for reconstructing parametric CAD models from real-world 3D scans. Our approach first decomposes the input geometry into structurally meaningful components using a foundation-scale 3D part segmentation model, and then reconstructs each component independently through a cross-section-driven pipeline that performs sketch parameterization followed by an extrusion. To improve the robustness of sketch parameterization to scan-derived cross-sections, we further introduce CC3D Cross-Sections, a dataset of paired rasterized cross-section images from realistic scans and their corresponding parametric sketches derived from aligned CAD models. This dataset enables effective domain adaptation from clean CAD sketch images to scan-derived cross-section images. Extensive experiments demonstrate that the proposed approach improves generalization to noisy scans and enables reliable reconstruction of complex multi-part objects across multiple real-world CAD reverse engineering benchmarks.",
    "published": "2026-10-24T10:05:26Z",
    "updated": "2026-10-24T10:05:26Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.33575"
  },
  {
    "id": "2610.33566",
    "title": "Distilling Dense Trajectory Teachers For Large-Motion Video World Models",
    "authors": [
      "Shuofeng Sun",
      "Linqing Zhao",
      "Haibin Yan"
    ],
    "abstract": "Video world models are expected to generate videos that accurately follow specified camera trajectories while maintaining consistent 3D structures. However, existing models are predominantly trained on densely sampled videos with small inter-frame camera motions. When applied to sparse, large step trajectories, they often produce frozen frames, inaccurate camera motion, and severe geometric drift. We attribute this degradation to a mismatch between the gradual viewpoint transitions seen during training and the large viewpoint changes required at inference time. To address this problem, we propose Dense Trajectory Teacher Distillation (DTTD), a post-training framework that transfers a model's generation capability from dense trajectories to large camera motions. Given a sparse trajectory, DTTD interpolates additional camera poses to construct a dense trajectory covering the same path. The frozen base model then generates reliable teacher videos along this familiar dense trajectory, and pose aligned teacher observations are used to evaluate candidate videos generated under the original sparse trajectory. In this way, the model serves as its own generation teacher, requiring neither additional video data nor a stronger external video generator. We further combine dense teacher supervision with geometry aware rewards that assess cross frame consistency and camera trajectory following, and use the resulting preferences for offline preference optimization. To stably expand the model's motion range, we introduce a cumulative curriculum that progressively incorporates larger motion steps while retaining simpler trajectories to reduce capability forgetting.",
    "published": "2026-10-24T09:35:13Z",
    "updated": "2026-10-24T09:35:13Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.33566"
  },
  {
    "id": "2610.33565",
    "title": "WorldFailBench: Do World Models Understand Policy Failures?",
    "authors": [
      "Zheng Zhang",
      "Xiaoyang Tang",
      "Shuaiqi Cheng",
      "Jiakai Huang",
      "Zhongbo Wu",
      "Ziyi Zhang",
      "Yuan Si",
      "Zeyu Liu",
      "Weibo Gao",
      "Shunyu Liu",
      "Shan You",
      "Fei Wang",
      "Xiaogang Wang",
      "Dacheng Tao"
    ],
    "abstract": "Robot policy evaluation informs deployment decisions and policy improvement, but physical testing and simulator preparation require substantial effort. World models offer a complementary route through closed-loop interaction in generated environments. Recent benchmarks have demonstrated their potential as policy evaluators through outcome-based evaluation (i.e., assessing task success or failure). However, such evaluation does not establish whether world models faithfully simulate how policies fail. Misrepresenting failures can lead to incorrect diagnoses of policy weaknesses and make policies appear ready for deployment even when small scene changes cause them to fail. We therefore ask: do world models faithfully simulate how and at which stages policies fail, and under what conditions they transition from success to failure? To answer this question, we introduce WorldFailBench with three evaluation tasks. Failure reason tests whether models reproduce the observable errors policies make. Failure stage assesses whether failures concentrate at the same stages of full-task execution. Failure boundary examines whether models reproduce the conditions under which policies transition from success to failure under controlled scene changes in simulation. The benchmark covers manipulation tasks in the LIBERO and RoboTwin simulation environments and real-world manipulation tasks performed by the G1 humanoid robot. Experiments across seven world models reveal substantial gaps in their understanding of policy failures, providing guidance for developing more reliable world models for policy evaluation.",
    "published": "2026-10-24T09:33:52Z",
    "updated": "2026-10-24T09:33:52Z",
    "categories": [
      "cs.RO",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.33565"
  },
  {
    "id": "2610.33564",
    "title": "What Remains OOD? OODConceptBench for Open-World Concept Recognition in Vision-Language Models",
    "authors": [
      "Zhiran Luo",
      "Zhiyong Yang",
      "Zitai Wang",
      "Sicong Li",
      "Qianqian Xu",
      "Qingming Huang"
    ],
    "abstract": "In the era of large-scale pretrained models, zero-shot generalization has increasingly blurred the boundary between known and unknown concepts. However, current evaluations do not directly reveal which open-world concepts different vision-language models can recognize. To study this problem, we introduce OODConceptBench, a hierarchical benchmark for open-world concept recognition on image-concept pairs. The full benchmark set (L1) contains 30,752 images, and the harder subset (L2) contains 14,285 images. The benchmark covers 560 concept phrases across seven open-world categories. We evaluate 37 vision-language models across release year, model family, and variant. We obtain three main findings. First, target-concept recognition is lower on L2 than on L1 across all 37 evaluated models. Second, later-released models do not necessarily achieve stronger open-world concept recognition. Third, an increase in overall recognition does not imply consistent improvement across all benchmark categories. Together, these results show that OOD remains a challenge even in the era of large-scale vision-language pretraining.",
    "published": "2026-10-24T09:33:41Z",
    "updated": "2026-10-24T09:33:41Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.33564"
  },
  {
    "id": "2610.33562",
    "title": "Hybrid-time PINNs: Discontinuity-Aware Physics-Informed Neural Networks for Learning Hybrid Dynamical Systems",
    "authors": [
      "Shivanshu Tripathi",
      "Maziar Raissi"
    ],
    "abstract": "Hybrid dynamical systems flow continuously but jump at discrete events. Physics-informed neural networks (PINNs) fit data while enforcing known dynamics, but a single network is smooth in time and cannot model these jumps. We show that the more closely a PINN follows a jump, the larger its physics loss must be. We propose hybrid-time PINNs (HT-PINNs), which assign one network to each flow interval of the hybrid time domain and train the networks jointly with the jump times and the unknown parameters. The number of jumps and the sequence of modes are found by enumeration. HT-PINNs recover the number of jumps and the restitution coefficient of a bouncing ball. In a MuJoCo simulation of robotic disassembly, where a robot pulls a press-fitted pin out of a housing through a spring, HT-PINNs find the number of jumps and the sequence of modes, and estimate the static and kinetic friction coefficients with small errors of 0.1% and 1.7%.",
    "published": "2026-10-24T09:29:58Z",
    "updated": "2026-10-24T09:29:58Z",
    "categories": [
      "eess.SY",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.33562"
  },
  {
    "id": "2610.32163",
    "title": "Forging Emotions: a deep learning experiment on emotions and art",
    "authors": [
      "Amalia Foka"
    ],
    "abstract": "Affective computing is an interdisciplinary field that studies computational methods that relate to or influence emotion. These methods have been applied to interactive media artworks, but they have focused on affect detection rather than affect generation. For affect generation, computationally creative methods need to be explored that have recently been driven by the use of Generative Adversarial Networks (GANs), a deep learning method. The experiment presented in this paper, Forging Emotions, explores the use of visual emotion datasets and the working processes of GANs for visual affect generation, that is, for generating images that can convey or trigger specified emotions. This experiment concludes that the methodology used so far by computer science researchers to build image datasets for describing high-level concepts such as emotions is insufficient and proposes utilizing emotional networks of associations according to psychology research. Forging Emotions also concludes that to generate affect visually, merely corresponding to basic psychology findings, such as bright or dark colours, does not seem adequate. Therefore, research efforts should aim to understand the structure of trained GANs and compositional GANs in order to produce genuinely novel compositions that can convey or trigger emotions through the subject matter of generated images.",
    "published": "2026-10-23T04:54:00Z",
    "updated": "2026-10-23T04:54:00Z",
    "categories": [
      "cs.CV",
      "cs.CY",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.32163"
  },
  {
    "id": "2610.32161",
    "title": "MG-REPA: Multi-Granularity Representation Alignment for Generative Target Speaker Extraction",
    "authors": [
      "Dohwan Kim",
      "Jung-Woo Choi"
    ],
    "abstract": "Generative target speaker extraction (TSE) models achieve high-quality extraction, but suffer from considerably slow training convergence. Representation Alignment (REPA) accelerates diffusion transformer training by aligning hidden states with a pre-trained Self-Supervised Learning (SSL) teacher. However, existing alignment in the speech and audio domain operates at a single granularity. For TSE, frame-level alignment leaves the global, time-invariant characteristics of the target speech implicit, whereas utterance-level alignment leaves the time-varying content implicit, even though extracting the target requires both. We propose Multi-Granularity Representation Alignment (MG-REPA), aligning the hidden states with an SSL model at the frame level and a speaker verification model at the utterance level. We further apply temporal normalization to the frame-level target, removing its utterance-level statistics so that each branch concentrates on its granularity. On Libri2Mix, MG-REPA reaches the OVRL and PESQ of a MeanFlow-TSE baseline with $3.0\\times$ and $2.1\\times$ fewer epochs, respectively. Trained for 750 epochs, it is competitive with the published 2,000-epoch baseline on intrusive metrics while improving non-intrusive metrics. An ablation demonstrates that MG-REPA outperforms alignment at a single granularity.",
    "published": "2026-10-23T04:51:51Z",
    "updated": "2026-10-23T04:51:51Z",
    "categories": [
      "eess.AS",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.32161"
  },
  {
    "id": "2610.32159",
    "title": "Playing Bias: Epistemic Games for Interpreting Text-to-Image Models",
    "authors": [
      "Amalia Foka"
    ],
    "abstract": "Text-to-image (T2I) systems do not merely render prompts; they circulate defaults for \"what X looks like,\" shaping recognition through pose, camera, costume, props, and setting. While technical audits quantify disparities, they rarely cultivate the literacy needed to argue how images assemble stereotypes and confer authority. This paper translates a three-stage, humanities-informed framework into a set of epistemic games that make this cultural work visible and debatable: Interpret (art-historical close looking with AI outputs), Interrogate (counter-intent prompting as artistic exploration), and Expose (creative misuse through paired prompts with a constant motif and a BiasSlot rule, in which only the bias cue varies). In a pilot with undergraduate fine-arts students, the games shifted discussion from impressionistic reactions to concise, warranted hypotheses grounded in visual evidence, supported by lightweight classroom instruments that enabled reproducibility and structured collaboration. We argue that such game-based approaches foster critical literacy across educational contexts, equipping learners to recognize, discuss, and contest how T2I models encode bias.",
    "published": "2026-10-23T04:50:16Z",
    "updated": "2026-10-23T04:50:16Z",
    "categories": [
      "cs.CY",
      "cs.CV",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.32159"
  },
  {
    "id": "2610.32153",
    "title": "Sparsity-driven emergence of functional modularity in multitask neural networks",
    "authors": [
      "Bowen Shi",
      "Qi Ouyang",
      "Long Qian"
    ],
    "abstract": "Neural networks can learn multiple tasks, but how learning organizes shared computation into specialized and reusable components remains poorly understood. In this work, we show that sparsity inducing regularization promotes functional modularity in multitask networks without predefined module boundaries. Using functional profiling in multilayer perceptrons and a lightweight transformer, we identified compact, task-selective subnetworks, termed functional tokens. Across rule-based task families, selectively retaining these tokens preserves their associated functions while reducing performance on other tasks. Such specialization develops preferentially in deeper layers during training, while earlier layers retain shared computation. Regularization strength and form shape module compactness and specialization, while task weighting alters functional allocation. Moreover, extracted functional tokens can be recombined through alternative pathways to reconstruct a learned composite computation without retraining, preserving their connectivity and learned weights. Our results suggest that sparsity-constrained optimization shapes not only parameter use but also the organization and reuse of learned computation.",
    "published": "2026-10-23T04:38:24Z",
    "updated": "2026-10-23T04:38:24Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.32153"
  },
  {
    "id": "2610.32151",
    "title": "The LLENS Platform for On-Premises Large Language Model Agents in a Japanese University Hospital: Development and Evaluation Study",
    "authors": [
      "Ken Enda",
      "Jien Saito",
      "Masami Mukai",
      "Feng Han",
      "Emir Turkes",
      "Tatsumi Kusakabe",
      "Reona Umeki",
      "Kazuhiro Sumiyoshi",
      "Mitsuya Numata",
      "Takumi Tanikawa",
      "Akira Endoh",
      "Kenji Hirata",
      "Atsushi Yoshida",
      "Kohsuke Kudo",
      "Shinya Tanaka"
    ],
    "abstract": "Large language model agents that use tools could take on part of the electronic health record and desk work that occupies physicians' time, but in many hospitals the medical information systems run inside closed networks, so the model and the agent harness must also be inside the network. We designed, implemented, and deployed LLENS, a clinical support AI agent platform that runs inside the closed network of Hokkaido University Hospital on a single host with 8 NVIDIA H200 GPUs, the open-weight model Kimi K2.6 (~1 trillion parameters), and a web application rebuilt from Open WebUI. The harness has 10 components, including page image reading, full-text attachment input, a path-addressed document tree without a vector index, a network-isolated sandbox, artifact return, self-checking of generated output, subagents, and saved procedures. Kimi K2.6 was chosen from 3 open-weight candidates and scored 480/500 on the 2026 Japanese Medical Licensing Examination; it generated 119 tokens/s for a single user and served 16 concurrent requests at 908 tokens/s in total. On 180 questions over hospital documents (3 seeds each), mean accuracy was 10.7% with no documents, 81.3% with fixed retrieval (top 10 chunks of one lexical search), and 97.2% with interactive access, in which the model reads with document tools and the sandbox (15.9 percentage points above fixed retrieval, 95% CI 10.9-21.3); the difference lay in filtering/counting questions (16.7% vs 87.8%). In an automated test of 13 work scenarios (4 runs each), the expected components were triggered in all runs for 12, and 5 scenarios were run with synthetic data on the deployment host. The platform has run on the hospital network since September 14, 2026.",
    "published": "2026-10-23T04:34:26Z",
    "updated": "2026-10-26T04:31:45Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.32151"
  },
  {
    "id": "2610.32147",
    "title": "Implicit Neural Representations for Variational Problems on Graphons",
    "authors": [
      "Taeyoung Kim",
      "Jineon Baek",
      "Joonkyung Lee",
      "Hongseok Yang"
    ],
    "abstract": "We propose a neural exploratory framework for variational problems over graphons, i.e., symmetric measurable functions $[0,1]^2 \\to [0,1]$, that arise as limits of dense graph sequences. Such problems are central to two parts of the mathematical literature: extremal graph theory, which studies graph parameter optimisation under given restrictions, often for those graphs with a large number of vertices, and the large deviation theory of dense random graphs, which characterises the structure of rare events through constrained graphon optimisation. We represent graphons by implicit neural networks and optimise graphon objectives by gradient descent. Our design combines three ingredients: a multi-scale sinusoidal residual architecture biased toward sharp, step-like graphons; an embedded solver that enforces a single empirical density constraint and is differentiated by implicit differentiation; and symmetry-aware Monte Carlo estimators. On generalised Turán problems that previously required substantial human effort, our framework rediscovers known optimal graphons without human intervention. Applied to open instances, it produces candidate optima, including a previously unreported family of extremal structures. Applied to the variational problems from the large deviation theory of Erdős--Rényi random graphs, the framework produces new candidate optimal graphons across both upper- and lower-tail regimes for multiple pattern graphs; for the case of the triangle graph and the upper-tail regime, these candidates improve upon the best-known reference construction of Lubetzky and Zhao. The structures found by our framework have also led to new theorems on the optimal graphons for both families of problems.",
    "published": "2026-10-23T04:25:44Z",
    "updated": "2026-10-23T04:25:44Z",
    "categories": [
      "stat.ML",
      "cs.AI",
      "cs.LG",
      "math.CO"
    ],
    "url": "https://arxiv.org/abs/2610.32147"
  },
  {
    "id": "2610.32146",
    "title": "Separating Angular Alignment from Radial Ordering in Hyperbolic Vision-Language Models",
    "authors": [
      "Mingyang Gao",
      "Yuwei Wu",
      "Shiyu Luo",
      "Wei Wu",
      "Xiaomeng Fan",
      "Qihao Lv",
      "Haoyu Zhang",
      "Rui Gao",
      "Bingzhen Liu",
      "Zhi Gao",
      "Che Sun"
    ],
    "abstract": "Hyperbolic vision-language models are well suited to modeling the hierarchical structure of multimodal data, because hyperbolic volume grows exponentially with radius, enabling low-distortion representations of tree-like taxonomies from general to specific concepts. However, existing pretraining objectives for hyperbolic vision-language models entangle semantic alignment with entailment modeling, forcing radial coordinates to simultaneously encode semantic matching and hierarchical structure, leading to conflicting geometric constraints. In this paper, we introduce AURORA, a hyperbolic vision-language framework that decouples the objectives through angular alignment and a novel Radial-Angular Order Cone (RAOC) for entailment modeling. Angular alignment captures semantic similarity while preserving the radial structure for representing hierarchies. Unlike conventional entailment cones, RAOC determines angular allowance from relative parent-child radial gaps. It is incorporated into hierarchical entailment contrastive training to capture partial-order relations. We further introduce a norm regularization term that prevents undesirable radial degeneration for stable training. We train models on millions of image-text pairs and evaluate them across zero-shot classification, image-text retrieval, hierarchical reasoning, and compositional understanding. Our model consistently outperforms strong Euclidean and hyperbolic vision-language baselines, demonstrating the effectiveness of decoupling semantic alignment from hierarchical entailment modeling.",
    "published": "2026-10-23T04:25:17Z",
    "updated": "2026-10-23T04:25:17Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.32146"
  },
  {
    "id": "2610.32142",
    "title": "Rethinking LoRA Initialization for Robust Asymmetric Learning Rates",
    "authors": [
      "Disen Liao",
      "Yaoliang Yu"
    ],
    "abstract": "Low-Rank Adaptation (LoRA) is often highly sensitive to learning-rate (LR) choices. Recent empirical studies suggest that, once LRs are carefully tuned, vanilla LoRA can remain competitive with many proposed LoRA variants. This shifts the central practical question from designing ever more variants to reducing the cost and brittleness of LR selection. LoRA+ addresses this issue with asymmetric LRs, using a larger LR for the up-projection matrix $B$ than for the down-projection matrix $A$. However, the ratio $η_B / η_A$ itself becomes an additional hyperparameter: large ratios can improve adaptation, but under the standard LoRA initialization they can also cause unstable training and ratio-dependent performance collapse. We identify the source of this brittleness through a signal--noise decomposition of LoRA dynamics. Under standard \\initA, the update contains an initialization-induced noise term whose magnitude can be affected by the LR for $B$, $η_B$, the initialization scale $β$, and the adapter rank $r$. In practical LLM fine-tuning, this non-vanishing noise can limit the performance gains expected from LoRA+ style asymmetric LRs. To suppress this effect, we propose \\initAA, a simple initialization that scales the variance of $A$ as $σ_A^2 \\propto n^{-2}$ while keeping $B_0=0$. Under matched rank and training time for both initializations, this reduces the initialization-noise energy by an additional factor of $1/n$, stabilizing asymmetric LoRA training while preserving zero initial adapter output. Empirically, \\initAA substantially widens the stable LR region across initialization scales, adapter ranks, and LoRA update multipliers. Across tasks and models, \\initAA reduces best-ratio drift, prevents the high-ratio collapse observed with standard \\initA, and makes the width-based guideline $η_B \\approx n η_A$ a useful starting point for finite pretrained models.",
    "published": "2026-10-23T04:15:33Z",
    "updated": "2026-10-23T04:15:33Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.32142"
  },
  {
    "id": "2610.32141",
    "title": "Beyond Data Schedule: Fast LLM Pretraining on Data Mixtures by Loss-Reweighting",
    "authors": [
      "Jiazheng Li",
      "Huaqing Zhang",
      "Jing Xu",
      "Tianle Cai",
      "Jingzhao Zhang"
    ],
    "abstract": "Large language models often acquire specialized capabilities through successive pretraining stages, but these gains can come at the cost of forgetting earlier knowledge. In this work, we investigate whether such trade-offs can be improved by changing how strongly each domain contributes to learning while keeping its data exposure fixed. We find that, in controlled knowledge--mathematics experiments, loss reweighting produces a single checkpoint that surpasses the best knowledge and reasoning scores attained along either stage trajectory. This reveals an independent control that data-mixture ratios alone do not capture. Building on this finding, we propose LARE (Loss-Adaptive Reweighting under fixed Exposure), which automatically adjusts domain weights from running loss statistics. Motivated by a theoretical analysis of gradient noise, its normalized inverse-square-root rule balances relative loss scales without changing the sampled mixture or requiring additional runs to search for weights. Across knowledge, mathematics, and code, \\Method{} improves all five evaluated benchmarks for a 1.5B model trained on 240B tokens, averaging +7.84 pp over a matched direct mixture, including gains of +17.06 pp on GSM8K and +9.00 pp on MATH. These findings demonstrate that adjusting domain loss scales can improve joint capabilities without additional domain exposure.",
    "published": "2026-10-23T04:09:46Z",
    "updated": "2026-10-23T04:09:46Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.32141"
  },
  {
    "id": "2610.32132",
    "title": "SyncPro: Synchronous Reasoning and Responding for Proactive Streaming Video Understanding",
    "authors": [
      "Xueyun Tian",
      "Bingbing Xu",
      "Jiaming Liu",
      "Jinpeng Yu",
      "Yang Shi",
      "Yu Zhao",
      "Ruihua Huang",
      "Yuanzhuo Wang",
      "Huawei Shen"
    ],
    "abstract": "Proactive streaming video understanding requires assistants to track unfolding events and respond when a user's requested condition is met. To make these decisions, assistants must accumulate relevant evidence and reassess response conditions as new observations arrive. Existing work offers complementary capabilities for this process: proactive video assistants learn when to respond, while streaming video reasoning methods generate scheduled intermediate text to organize observations and support subsequent answers. Together, these capabilities provide a foundation for proactive reasoning, but how to coordinate ongoing reasoning with timely responses remains underexplored. In a direct adaptation, fixed reasoning intervals can trigger updates when nothing relevant has changed or postpone useful updates until the next scheduled step. Sharing one generation path also couples two distinct requirements: preserving evidence for future decisions and producing only the response requested by the user. Moreover, responses generated after reasoning must wait for it to finish, even when sufficient evidence is already available. To address these challenges, we introduce SyncPro, a synchronous dual-stream framework with specialized generation paths for evidence tracking and user-facing responses. Its Inner and Response branches share causal history and activate independently, allowing relevant evidence changes to trigger internal updates and responses to proceed concurrently with ongoing reasoning. We construct 189K dual-stream examples and train SyncPro through supervised fine-tuning followed by trajectory-level reinforcement learning. Experiments across three proactive benchmarks show improved response timing and more accurate answers to user requests.",
    "published": "2026-10-23T03:58:17Z",
    "updated": "2026-10-23T03:58:17Z",
    "categories": [
      "cs.CV",
      "cs.CL",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.32132"
  },
  {
    "id": "2610.32129",
    "title": "Shorter Is Not Cheaper: A Controlled Comparison of Declarative Animation Specifications and Free-Form Code for LLM-Generated Explanations",
    "authors": [
      "Jiantang Huang"
    ],
    "abstract": "Chat assistants increasingly answer conceptual questions with interactive, animated explanations, generated either as free-form HTML/JavaScript or as declarative specifications that a fixed runtime plays. The declarative route is widely expected to be cheaper, faster and more reliable, because its outputs are shorter and constrained. We test this expectation in controlled comparisons whose hypotheses and analysis plans were frozen before the runs. We designed ExplainSpec, a time-indexed declarative animation format, and an observation contract that makes every generated explanation programmatically inspectable; validated, pacing-agnostic checkers score 20 explanation requests from five domains. Three Claude models (360 jobs) and, in a follow-up, the open-weight Qwen3-14B with thinking enabled and disabled (240 jobs) answered every request in both formats. For every model the specifications were 25-48% shorter in answer tokens (output excluding reasoning), yet with reasoning enabled total output fell significantly only for the largest Claude model and no model generated significantly faster. The reasons differed. The Claude models reasoned far more before writing specifications (exploratory; for the two larger models, from 15-20% to 85-88% of generations). Qwen3-14B reasoned about as much in both formats (a pre-registered test of this shift was not supported), and its shorter answers saved little against a reasoning trace more than twice as long. Nor were specifications more reliable: free-form pages were valid after one repair round in 95-100% of jobs for every model, whereas Qwen3-14B produced valid specifications in only 33% of jobs and passed all semantic tests in 17% (HTML/JavaScript: 62%). For reasoning models, a shorter format alone therefore does not make generation cheaper, faster or more reliable, and a format learned in context can cost reliability.",
    "published": "2026-10-23T03:56:19Z",
    "updated": "2026-10-23T03:56:19Z",
    "categories": [
      "cs.CL",
      "cs.HC",
      "cs.SE"
    ],
    "url": "https://arxiv.org/abs/2610.32129"
  },
  {
    "id": "2610.32127",
    "title": "MPQ: A Message-Passing View of Post-Training Quantization",
    "authors": [
      "Yanshuo Chen",
      "Chenxi Liu",
      "Reza Shirkavand",
      "Heng Huang"
    ],
    "abstract": "Post-training quantization (PTQ) is a key technique for efficiently deploying large language models, as it compresses weights into low-bit representations without retraining. Existing PTQ solvers, including GPTQ, LDLQ, and block coordinate descent, commit each weight block to a single codeword before its neighbors are considered, leaving near-optimal alternatives unexplored. In this work, we cast row-wise PTQ as posterior inference over discrete codebooks, in which existing solvers correspond to a zero-temperature, hard-decision limit retaining only the top codeword per block. We propose Message-Passing Quantization (MPQ), which preserves soft posterior information across blocks during inference and commits to hard codewords only at the output stage. MPQ first uses vector approximate message passing to compute approximate blockwise posteriors, then refines a hard-decision initialization by exact block coordinate descent. Across 2-bit lattice and 3- and 4-bit scalar quantization on dense language models from Llama, Qwen, and Mistral families, MPQ improves perplexity and zero-shot accuracy over strong hard-decision baselines, and composes favorably with preprocessing techniques such as activation-aware scaling and incoherence processing. Our implementation is available at https://github.com/poseidonchan/MPQ.",
    "published": "2026-10-23T03:54:41Z",
    "updated": "2026-10-23T03:54:41Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.32127"
  }
];

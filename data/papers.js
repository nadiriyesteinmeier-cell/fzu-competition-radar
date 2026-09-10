window.PAPER_DATA_UPDATED_AT = "2026-09-10";
window.PAPER_ITEMS = [
  {
    "id": "2609.10540",
    "title": "Programmable World Model",
    "authors": [
      "Zheng-Hui Huang",
      "Guixu Lin",
      "Jiacheng Lin",
      "Yi-Chuan Huang",
      "Ruihan Yu",
      "Muyao Niu",
      "Siqi Yang",
      "Yu-Lun Liu",
      "Yung-Yu Chuang",
      "Kaipeng Zhang",
      "Zhixiang Wang"
    ],
    "abstract": "Recent video world models generate increasingly realistic and interactive visual experiences, yet lack reliable mechanisms for maintaining persistent world state and enforcing programmable rules over extended interactions. We introduce Programmable World Model, a framework that decouples world-state evolution from visual observation generation. An agent translates natural-language instructions into executable programs that specify entity states and state-transition rules, enabling direct control over individual entities and their interactions. A lightweight engine executes these programs to update and maintain an explicit, persistent global world state, including off-screen entities and non-visual attributes. To connect world state with visual generation, we introduce state-augmented 3D oriented bounding boxes (OBBs) as an intermediate representation. This representation, together with the target camera trajectory, is deterministically compiled into pixel-aligned spatiotemporal conditioning signals for a pretrained video model serving as the generative renderer. This design allows users to create playable games with predefined mechanics, direct control over individual entities, and persistent world state throughout gameplay. We further introduce CombatStateBench, a benchmark for evaluating programmable world models. On CombatStateBench, our method achieves 94% Count Accuracy and 98% State Accuracy, substantially outperforming existing interactive video world models while supporting coherent long-horizon generation. These results demonstrate the effectiveness of separating explicit state evolution from generative rendering for building persistent, programmable worlds.",
    "published": "2026-09-09T17:59:32Z",
    "updated": "2026-09-09T17:59:32Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.10540"
  },
  {
    "id": "2609.10531",
    "title": "Guiding Image-to-3D Generation with Test-Time Partial Observations",
    "authors": [
      "Jerred Chen",
      "Simon Weber",
      "Ronald Clark"
    ],
    "abstract": "Image-to-3D models can generate visually compelling 3D assets from a single RGB image, but their geometry is often only loosely constrained by the available observations, limiting their use in applications that require geometric fidelity. In many real-world settings, however, partial geometric observations of the object may be available at test time. We introduce a training-free framework for incorporating such evidence into pretrained image-to-3D generative models without retraining or finetuning. To do this, we guide generation using a ray-consistent observation likelihood defined over the model's occupancy representation, combining surface occupancy and free-space evidence. Applied to SAM 3D and its multi-view extension, our approach substantially improves geometric fidelity across different levels of observability, as well as visual quality. Our results demonstrate that pretrained image-to-3D models can effectively integrate partial geometric observations through explicit test-time guidance, complementing their learned generative priors without modifying the underlying model.",
    "published": "2026-09-09T17:58:04Z",
    "updated": "2026-09-09T17:58:04Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.10531"
  },
  {
    "id": "2609.10524",
    "title": "Precision in Rice Variety Classification using Stacking-Based Ensemble Learning",
    "authors": [
      "Md. Masudul Islam",
      "Galib Muhammad Shahriar Himel",
      "Md. Golam Moazzam",
      "Mohammad Shorif Uddin"
    ],
    "abstract": "Rice, a staple food for a significant portion of the global population, exhibits remarkable diversity in its varieties, presenting substantial challenges for accurate identification by consumers, traders, and farmers. This complexity often facilitates fraudulent practices, such as the unauthorized mixing of rice types, which undermines quality and trust in the supply chain. Despite its critical importance, existing research falls short of providing robust and efficient methods for precise rice variety classification based on external characteristics like color, size, and texture. To address this gap, our study introduces a comprehensive rice variety identification framework designed to enhance transparency and quality assurance. We developed a stacked ensemble model tailored for rice variety classification and curated a comprehensive dataset comprising 20 rice varieties, each distinguished by unique visual attributes. The proposed approach achieved an unprecedented classification accuracy of 100%. Furthermore, we integrated our model into a mobile application, enabling even novice users to effortlessly identify rice varieties using grain images from a smartphone camera. These findings underscore the transformative potential of advanced machine learning techniques in mitigating fraudulent practices and ensuring stringent rice quality control. Our work holds significant implications for agricultural stakeholders, paving the way for automated crop identification systems and advancing precision agriculture practices.",
    "published": "2026-09-09T17:53:50Z",
    "updated": "2026-09-09T17:53:50Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.10524"
  },
  {
    "id": "2609.10522",
    "title": "Show-Harness: Just a VLM Agent Can Play Robots",
    "authors": [
      "Yanzhe Chen",
      "Zechen Bai",
      "Zhijun Cao",
      "Wenzheng Zeng",
      "Kevin Qinghong Lin",
      "Yiqi Lin",
      "Guoqiang Liang",
      "Kevin Yuchen Ma",
      "Qiming Huang",
      "Mike Zheng Shou"
    ],
    "abstract": "Foundation vision-language models (VLMs) exhibit broad intelligence about the world, yet translating this intelligence into robot control remains challenging. We present Show-Harness, an Embodied Harness that enables VLMs to \"play\" robots through a compact semantic interface linking intent to action. Show-Harness exposes discrete semantic action units that VLMs can naturally reason over, while embodiment-specific interpreters deterministically ground them into local robot actions, keeping the VLM directly responsible for fine-grained physical decisions. Through the same interface, Show-Harness demonstrates the feasibility of (1) directly unlocking closed-source frontier VLMs for zero-shot robot control, and (2) adapting small-scale open-source VLMs for low-cost deployment with just a few GPU-hours of fine-tuning. We further develop GUMI (GUI Manipulation Interface), which extends the same semantic action space to GUI-based demonstration collection, allowing humans and agents to \"play\" robots across embodiments without specialized teleoperation hardware. Extensive experiments show that Show-Harness-equipped VLM agents generalize robustly across tasks, embodiments, and environments, outperforming representative agentic and VLA paradigms. These results suggest that the right interface can unlock substantial embodied capability from foundation VLMs, without requiring additional model capacity or costly embodiment-specific pretraining.",
    "published": "2026-09-09T17:53:38Z",
    "updated": "2026-09-09T17:53:38Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.CV",
      "cs.MM"
    ],
    "url": "https://arxiv.org/abs/2609.10522"
  },
  {
    "id": "2609.10518",
    "title": "BrainTaskonomy: Learning How to Pretrain and What to Transfer in fMRI Foundation Models",
    "authors": [
      "Junfeng Xia",
      "Wenhao Ye",
      "Junxiang Zhang",
      "Jiayu Zuo",
      "Mo Wang",
      "Quanying Liu"
    ],
    "abstract": "fMRI foundation models increasingly aggregate heterogeneous data across brain states, cohorts, and acquisition settings, yet pretraining domains are commonly treated as a flat mixture and downstream tasks are adapted independently. We study whether measured learning relations can organize both stages without modifying the backbone. During pretraining, a lightweight Brain-DiT proxy estimates difficulty and directed facilitation across ten fMRI domains, yielding a priority-guided cumulative domain curriculum combined with high-to-low-noise timestep scheduling and joint consolidation. During adaptation, controlled first- and higher-order transfer across fifteen tasks constructs a directed taskonomy, from which budgeted integer programming (BIP) selects directly supervised source tasks and target-specific routes. The joint priority-domain and high-to-low-timestep curriculum reduces v-NMSE, PSD-NMSE, and FC-MSE by 6.5%, 16.3%, and 10.5%, respectively, relative to uniform sampling over both dimensions, and shows strong downstream performance across six in- and out-of-domain tasks. The taskonomy reveals asymmetric, target-dependent transfer, while exploratory sealed-test evaluation shows larger descriptive gains for BIP policies when higher-order route spaces are available than for matched random controls. Together, these findings support organizing fMRI pretraining and adaptation by measured learning relations rather than treating domains and tasks as independent flat sets.",
    "published": "2026-09-09T17:50:39Z",
    "updated": "2026-09-09T17:50:39Z",
    "categories": [
      "cs.CV",
      "q-bio.NC"
    ],
    "url": "https://arxiv.org/abs/2609.10518"
  },
  {
    "id": "2609.10506",
    "title": "DUET-DINO: Simultaneous Cross-View World Modeling for Latent Planning in Robot Manipulation",
    "authors": [
      "Nisarga Nilavadi",
      "Ralf Römer",
      "Moritz Reuss",
      "Michael Krawez",
      "Tobias Jülg",
      "Angela P. Schoellig",
      "Rudolf Lioutikov",
      "Wolfram Burgard"
    ],
    "abstract": "Action-conditioned latent world models predict future visual representations, enabling zero-shot goal-conditioned robot planning and control. However, their predictions for fine-grained spatial and rotational actions are unreliable for full 7-DoF end-effector control. To address this gap, we introduce DUET-DINO, a simultaneous cross-view latent world model that jointly learns action-conditioned predictions from static side- and wrist-camera observations through cross-view conditioning. By exploiting complementary global scene and gripper-centric information, DUET-DINO enables latent planning over the full 7-DoF action space. Across spatially diverse reach, orientation-intensive angled-reach, and multi-goal grasp-and-lift tasks, DUET-DINO consistently outperforms single-view and independent dual-view baselines, achieving 92% success on reach, 72.5% on angled-reach, and 60.0% on lift tasks. DUET-DINO is trained from scratch on DROID and RoboArena datasets and generalizes robustly under visual distribution shifts. We further show that while V-JEPA 2 wrist-view predictions underestimate visual dynamics induced by fine-grained actions, DINOv3 predictions better capture action-conditioned scene changes, leading to stronger downstream planning. The code and model checkpoints will be open-sourced. Project page: https://utn-air.github.io/DUET-DINO",
    "published": "2026-09-09T17:41:38Z",
    "updated": "2026-09-09T17:41:38Z",
    "categories": [
      "cs.RO",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.10506"
  },
  {
    "id": "2609.10498",
    "title": "Field Converter: Geometry-Initialized Temporal Residual Refinement for World-Grounded Player Pose Estimation from Soccer Broadcasts",
    "authors": [
      "Simon Khan",
      "Laurent Gajny",
      "Jennyfer Lecompte",
      "Sébastien Laporte"
    ],
    "abstract": "Recovering 3D human pose from monocular sports broadcasts remains challenging when players must be localized in a shared metric world coordinate system rather than only reconstructed relative to their own body. We introduce Field Converter, a geometry-initialized temporal residual framework for world-grounded 3D player pose estimation from calibrated soccer broadcasts. Our method first uses camera and pitch geometry to initialize the player root through ray-ground intersection, then predicts a temporal residual correction from pose, image, camera, and geometric cues. On match-disjoint evaluation sequences, residual refinement reduces root error from 49cm with geometry alone to 14cm with a frame-wise MLP and 10cm with a TCN, while a Transformer achieves a comparable 11cm. The resulting world-space MPJPE reaches 13.2cm, and ablations show that residual prediction clearly outperforms direct global-root regression while temporal context matters more than the specific temporal backbone. Failure analysis further identifies airborne motion as the main limitation of the ground-based geometric initialization.",
    "published": "2026-09-09T17:35:16Z",
    "updated": "2026-09-09T17:35:16Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.10498"
  },
  {
    "id": "2609.10495",
    "title": "Cross-Model Agreement as a Deployment-Time Reliability Signal for Automatic Polyp Segmentation",
    "authors": [
      "Siddharth Gupta",
      "Jitin Singla"
    ],
    "abstract": "In real-time colonoscopy, ground-truth annotations are unavailable at inference, so polyp segmentation models can fail silently. We propose Referee-Based Quality Estimation (RBQE), a reference-free framework measuring agreement between a primary segmentation model and an independently trained referee on the same image. RBQE is evaluated on a standardized 1,223-image external benchmark drawn from four public datasets, using four referee configurations chosen to separate two design axes: referee independence and architectural diversity. Using a common Agreement Dice descriptor, a same-architecture referee differing from the primary model only in random initialization already yields a useful reliability signal (ROC-AUC = 0.923), showing that independent training alone is sufficient. Cross-architecture referees improve further: SegFormer-B0 achieves the strongest performance (ROC-AUC = 0.960), significantly outperforming the same-architecture control and UNet++, and exceeding a representative Test-Time Augmentation baseline by 0.055 ROC-AUC under an identical protocol, whereas a prompt-coupled MedSAM referee underperforms despite maximal architectural diversity. Because empty-mask agreement is trivially separable, we also report a restricted evaluation excluding such cases: ROC-AUC falls to 0.876 (SegFormer-B0, 1,046 images) and 0.783 (same-architecture control, 975 images), yet RBQE's margin over both baselines widens on this identical subset. RBQE additionally increases the mean Dice of retained predictions as low-agreement cases are progressively rejected, supporting selective prediction, and requires only one additional deterministic referee forward pass at inference. Our study therefore supports cross-model agreement as a practical, interpretable reliability framework for automated polyp segmentation.",
    "published": "2026-09-09T17:32:43Z",
    "updated": "2026-09-09T17:32:43Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.10495"
  },
  {
    "id": "2609.10494",
    "title": "IBIB: A Protocol for Measuring Enterprise AI Systems by Serving Route, Not Model Identifier",
    "authors": [
      "Blake Stenstrom",
      "Charangan Vasantharajan",
      "Brian Sathianathan"
    ],
    "abstract": "Enterprises deploy systems, not checkpoints. Usable capability depends jointly on weights, serving route, precision, output contract, and harness, yet all 18 audited benchmarks score advertised model identifiers. We treat this as measurement error and give a protocol that makes it reportable. It has three parts. A gold-blind capability-binding preflight verifies that a route can execute the evaluation contract before any task reaches it; a reliability-inclusive first-pass scoring rule keeps failure in the score while keeping unsupported capability out; and adjudication is structurally score-blind. We call the protocol IB2 and release its algorithms, classification tables, request contract, and manifest schemas. Its reference instantiation, 128 locked tasks and 987 assertions over document, spreadsheet, chart, tool and database work, stays sealed: the procedure is the artifact, not the corpus. Across eleven systems, four results. Capability availability is measurable: two complete single-route runs on identical weights later failed distinct predicates of the finalized binding gate, while a third passed that gate before a fresh run. The advertised identifier exposed neither limit. Discrimination is not uniform: four of seven suites saturate under a six-system band, with the spread almost entirely from governed database work and multi-tab joins, so we report interval-backed resolution groups, not ranks; two of the nominal five-label output's four cuts fail multiplicity adjustment. Serving-arm choice moved one declared revision and precision from 77.38 to 82.54, paired interval [0.11,10.60], though the arms differ in access mode, harness generation, and the serving tool-call parser, and harness generation is a property of our evaluator, not any endpoint. Excluding failed responses from denominators changes the point ordering, so reliability inclusion changes a conclusion, not its wording.",
    "published": "2026-09-09T17:31:29Z",
    "updated": "2026-09-09T17:31:29Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.10494"
  },
  {
    "id": "2609.10489",
    "title": "Artificial Intelligence Literacy and Sustainable Development: An Ethical Governance and Development Goals Framework",
    "authors": [
      "Md. Masudul Islam",
      "Mirza Niaz Morshed",
      "Md. Shafiqul Islam"
    ],
    "abstract": "AI literacy provides foundational competencies that support ethical, transparent, and sustainable technological development, although higher-order capabilities such as governance, critical evaluation, and strategic decision-making extend beyond basic literacy into advanced levels of AI competency. This study positions AI literacy as a governance capacity that complements and strengthens all 17 SDGs. It introduces a six-level taxonomy of artificial intelligence reasoning and ethics that extends traditional learning models by incorporating ethical judgement and strategic foresight. This taxonomy forms the foundation of an integrated framework linking education, governance, and sustainable development. A survey of 300 participants from diverse professional backgrounds within a national context which reveals strong technical awareness but limited ethical and governance readiness, highlighting critical gaps in public capacity to manage artificial intelligence responsibly. Findings show that ethical reasoning and reflective thinking are the strongest predictors of sustainable and trustworthy artificial intelligence use. The study proposed to embed literacy-based competencies into curricula, institutional policies, and governance mechanisms to accelerate equitable and responsible progress toward sustainable development goals",
    "published": "2026-09-09T17:28:08Z",
    "updated": "2026-09-09T17:28:08Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.10489"
  },
  {
    "id": "2609.10469",
    "title": "AgroVisNet: A lightweight Convolutional Network and the BD-PlantDX Expert-Validated Benchmark for Radish, Potato and Pointed Gourd Disease Classification",
    "authors": [
      "Md. Abdullah Mandal",
      "Saad Ahmed",
      "Md. Khalid Syfullah"
    ],
    "abstract": "Automated plant disease diagnosis is increasingly deployed on farmer-held devices in regions where agronomic expertise is scarce and network connectivity is unreliable. Three obstacles limit its practical value: public benchmarks are dominated by a small set of non-native crops, region-specific datasets are rarely validated by domain experts, and the architectures that reach competitive accuracy carry parameter budgets that are unsuited to low-cost hardware. We propose AgroVisNet, a compact convolutional network trained from scratch, together with BD-PlantDX, an expert-validated benchmark of 12,432 field images spanning 12 classes of radish, potato and pointed gourd in healthy and diseased states, collected across the Bogura and Nilphamari districts of Bangladesh. AgroVisNet couples grouped bottleneck residual blocks carrying sequential channel and spatial attention with multi-scale depthwise blocks and a dual-pooling classification head, reaching 290,572 trainable parameters. On BD-PlantDX the model attains 99.52% test accuracy and 99.52% weighted F1, exceeding all six ImageNet-pretrained lightweight backbones evaluated under an identical protocol while using 8.7 to 16.8 times fewer parameters and 1.3 to 8.5 times fewer multiply-accumulate operations. Exported for deployment, the model quantises to a 0.46 MB full-integer network at a 0.22 percentage-point accuracy cost and classifies an image in 8.40 ms on a single CPU. Across five random seeds accuracy remains at 99.57 +- 0.10%, a ten-variant ablation isolates the contribution of each component, and the same architecture transfers without redesign to two independently collected datasets at 98.71% and 99.05% accuracy. Grad-CAM evidence indicates that predictions rest on lesion-bearing leaf regions rather than on background cues.",
    "published": "2026-09-09T17:12:17Z",
    "updated": "2026-09-09T17:12:17Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.10469"
  },
  {
    "id": "2609.10464",
    "title": "Semigroup-JEPA: Latent Dynamics Consistency for Zero-Shot Physics Generalization",
    "authors": [
      "Andy Zeyi Liu",
      "Haoran Sun",
      "Lucas Baker",
      "Randall Balestriero",
      "John Sous"
    ],
    "abstract": "Joint-Embedding Predictive Architecture (JEPA) world models learn a compact latent representation of the world that supports prediction and planning, but their capability to learn physics and generate physically realistic dynamics remains hitherto untested. In this work, we introduce SemiGroup-JEPA (SG-JEPA), which extends the LeWorldModel framework by supplying the parameter governing the physics to the temporal model via action-conditioning and jointly training an encoder and predictor through an autoregressive latent rollout. To evaluate the model's ability to generalize out of distribution, we design dynamical tasks under different gravitational fields that, despite obeying the same physical law, exhibit qualitatively different dynamics, ranging from floating motion in weak gravitational fields to rapid bouncing in strong ones. In contrast to DINO-WM, SG-JEPA reduces open-loop prediction error by up to 2 times on two-dimensional datasets, and increases control success rate up to 2.5 times for three-dimensional robotic datasets, for which we train independent diffusion policies. To explain this advantage, we develop a linear feature model that separates local law-conditioned error from its recursive amplification under rollout. Guided by this model, we find that back-propagating the multi-step rollout loss into the representation trains the encoder to keep the features that the predictor can carry forward, and that those are the features the dynamics depend on, so most of the gain comes from the encoder learning better features rather than from the predictor learning better dynamics. See project page at https://sg-jepa.github.io.",
    "published": "2026-09-09T17:08:13Z",
    "updated": "2026-09-09T17:08:13Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.10464"
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
    "id": "2609.09158",
    "title": "TANGO: Humanoid Navigation in Cluttered Environments with a Whole-Body Vision-Language-Action Model",
    "authors": [
      "Anqi Li",
      "Yuxin Chen",
      "Zhaobo Li",
      "Zhuo Cao",
      "Junli Ren",
      "Masayoshi Tomizuka",
      "Dhruv Shah"
    ],
    "abstract": "We study the problem of navigating cluttered indoor environments with a humanoid robot. Unlike conventional methods that model navigation as a 2D path planning problem, humanoid traversal in cluttered environments requires continuous geometry-aware whole-body adaptation, including coordinated arm placement, torso adjustment, and gait modulation for collision-free movement through complex 3D spaces. We introduce TANGO, the first whole-body vision-language navigation framework for language-conditioned humanoid traversal in cluttered environments. Given a natural-language instruction and egocentric RGB observations, TANGO directly predicts 29-DoF joint-space actions for downstream whole-body control. We train TANGO entirely in simulation by synthesizing diverse collision-free traversal behaviors via global path planning, kinematic whole-body motion generation, obstacle-aware motion editing, and RL-based tracking. This pipeline provides dynamically feasible action supervision for learning language-conditioned whole-body policies. In extensive simulation experiments, TANGO demonstrates state-of-the-art performance in vision-language navigation, while outperforming strong modular baselines in navigating challenging scenes requiring obstacle negotiation. Lastly, we deploy TANGO zero-shot on a Unitree G1 humanoid robot, and observe robust language-guided traversal in cluttered real-world scenes without training on any real-world navigation data.",
    "published": "2026-09-08T17:59:55Z",
    "updated": "2026-09-08T17:59:55Z",
    "categories": [
      "cs.RO",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.09158"
  },
  {
    "id": "2609.09155",
    "title": "SyncWorld: Visual Calibration Enables World Models as Zero-Shot Simulators",
    "authors": [
      "Yuncong Yang",
      "Zhengtao Han",
      "Furkan Ozyurt",
      "Zeyuan Yang",
      "Han Yang",
      "Junyi Cao",
      "Haoyu Zhen",
      "Yilun Du",
      "Chuang Gan"
    ],
    "abstract": "World models are increasingly used as policy-in-the-loop imagination environments, where reliable rollouts require fine-grained controllability with respect to low-level robot actions. A key obstacle to scaling such models in robotics is that actions are not a universal language in pixel space: changes in visual environment, camera view, robot placement, or embodiment alter how the same numerical action manifests visually, leading to conflicting supervision under mixed training and brittle generalization at deployment. We introduce SyncWorld, an action-conditioned world model that serves as a zero-shot simulator across unseen environments without any additional training. SyncWorld leverages a visual calibration episode---paired frames and actions that showcase all the controllable degrees of freedom---to specify the setup-specific Action--Visual Mapping in context. Training with visual calibration contexts teaches the model to interpret actions through visual evidence and to leverage interaction history when explicit calibration is unavailable. Experiments show that SyncWorld can accurately simulate action outcomes in previously unseen settings, and that its capability of simulating rollouts enables test-time policy improvement without training.",
    "published": "2026-09-08T17:59:47Z",
    "updated": "2026-09-08T17:59:47Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.09155"
  },
  {
    "id": "2609.09153",
    "title": "Procedural Graphs: Self-Evolving Execution Structures for LLM Agents",
    "authors": [
      "Yuxing Lu",
      "Yicheng Chen",
      "Shanchan Wu",
      "Sercan Ö. Arık"
    ],
    "abstract": "Large language models are increasingly deployed as agents that plan over long horizons and act through external tools. Most agents select actions through unconstrained generation over an accumulating history, leaving implicit the procedural knowledge of what to do, in what order, and under which conditions. As trajectories lengthen, agents can lose track of their objectives, invoke tools out of order, and repeat unproductive actions. We introduce the Procedural Graph: just as a knowledge graph organizes factual knowledge into (entity, relation, entity) triplets for what-is questions, a Procedural Graph organizes procedural knowledge into (procedure, relation, procedure) triplets for what-to-do questions. At each decision step, the framework localizes the agent's active node, and a guidance model translates the surrounding subgraph into step-level situational guidance that biases the solver's next action without dictating it. The graph is self-evolving: an LLM refiner contrasts failed trajectories with successful ones and edits the graph's topology and attributes, committing edits that preserve or improve held-out validation performance while retaining rejected ones to discourage repetition. Starting from a minimal skeleton, the loop builds graphs that match or surpass hand-designed ones. It can also repair a flawed expert prior. Across multiple datasets, task types, and LLMs, the Procedural Graph delivers consistent gains over memory-based baselines, and self-evolution further improves performance without manual engineering.",
    "published": "2026-09-08T17:59:41Z",
    "updated": "2026-09-08T17:59:41Z",
    "categories": [
      "cs.AI",
      "cs.CL",
      "cs.MA"
    ],
    "url": "https://arxiv.org/abs/2609.09153"
  },
  {
    "id": "2609.09145",
    "title": "Point4D: Long-range 4D Motion Reconstruction",
    "authors": [
      "Minsik Jeon",
      "Jay Karhade",
      "Deva Ramanan",
      "Shubham Tulsiani"
    ],
    "abstract": "We introduce Point4D, a feed-forward model for 4D reconstruction of long-range video sequences. Point4D is able to reliably infer dense per-point 3D trajectories across multi-hundred-frame videos, unlike existing 4D methods that are limited to short input windows of at most a few dozen frames. A key innovation that enables this is our flexible 3D query-based motion decoder that decouples trajectory prediction from image-plane visibility. The predicted 3D endpoints are then directly re-queried in the next chunk without re-projection or matching. Furthermore, we show that extracting and reusing a visual descriptor from an arbitrary frame where the point is visible leads to better performance than relying solely on the source patch. Overall, Point4D achieves state-of-the-art performance across diverse long-video tracking benchmarks spanning over 200 frames and largely outperforms previous feed-forward 4D method. Project page: https://point-4d.github.io",
    "published": "2026-09-08T17:58:35Z",
    "updated": "2026-09-08T17:58:35Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.09145"
  },
  {
    "id": "2609.09143",
    "title": "Studying Image Tokenizers as Visual Languages in Unified Multimodal Models",
    "authors": [
      "Siting Li",
      "Zhengyang Wang",
      "Simon Shaolei Du",
      "Xi Chen",
      "Yang Liu"
    ],
    "abstract": "Image tokenizers define the ``visual language'' of unified multimodal models, yet are commonly studied through isolated metrics or generation-/understanding-only evaluations. These evaluations do not fully capture how visual tokens behave when modeled jointly with text. We build a controlled pure-autoregressive testbed and track task-specific validation losses during multimodal continual pretraining across text, image, text-to-image (T2I), and image-to-text (I2T) prediction. We examine how these losses scale and relate to downstream performance, then use them to study multimodal learnability---how well image and text tokens are jointly modeled---and tokenizer design. We find that (1) losses should be analyzed by task, since they exhibit distinct scaling behavior and rank tokenizers differently. (2) The loss--performance relationship depends on the predicted token space: for a fixed tokenizer, T2I and I2T losses correlate with generation quality, but across tokenizers, the T2I loss--performance relationship shifts with the image-token space, whereas I2T loss, computed over a shared text vocabulary, provides a more consistent signal. I2T loss also correlates with both generation and visual understanding performance after supervised finetuning. Using losses as a lens, we show that (3) better reconstruction does not necessarily yield lower task-specific losses or stronger downstream performance, and that (4) image tokenizer choice can affect text modeling under joint optimization. As case studies, we revisit three tokenizer design axes---the discriminator, semantic supervision, and vocabulary size---to examine their effects on joint modeling and downstream performance. Together, our testbed offers a complementary perspective on image tokenizers as visual languages, highlighting their interplay with text in joint multimodal training.",
    "published": "2026-09-08T17:57:53Z",
    "updated": "2026-09-08T17:57:53Z",
    "categories": [
      "cs.CV",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2609.09143"
  },
  {
    "id": "2609.09140",
    "title": "NOAH: Learning the Full Patient Journey. A Longitudinal Multimodal Time-Aware Model for Representation and Forecasting",
    "authors": [
      "Tobias Susetzky",
      "Raphael Rehms",
      "Dmitrii Seletkov",
      "Özgün Turgut",
      "Michelle Espranita Liman",
      "Lisa Steinhelfer",
      "Rickmer Braren",
      "Daniel Rueckert"
    ],
    "abstract": "The digitization of healthcare has generated vast, longitudinal, and multimodal patient records over a lifetime, yet fully exploiting these data to represent and predict patient state trajectories remains a critical challenge. Current AI models often struggle to capture the complex, irregular temporal dynamics and inherent stochasticity of real-world multimodal patient data. Existing AI approaches for modeling longitudinal patient records are predominantly discriminative, limited to a few modalities, constrained by closed categorical vocabularies, treating time as a monotonic inductive bias, or they are limited in forecasting future patient states. We introduce NOAH, a time-aware, task-agnostic, generative transformer model representing and forecasting the full multimodal patient journey. NOAH features a novel bidirectional time integration and a variational latent space to capture the continuous evolution of patient states and the stochasticity of clinical trajectories. Built from over 559 million clinical events from 431,000 hospital visits of 299,000 patients across the MIMIC dataset family, NOAH natively processes medical images, time-series and numeric signals, categorical events, as well as structured and unstructured clinical records. NOAH is the first truly holistic generative model in its field, enabling autoregressive forecasting with optional time control, zero-shot classification, and counterfactual intervention simulation. It generates highly informative and predictive patient state representations that demonstrate strong performance in probing for clinical outcomes, 15 ICD chapters, and 29 comorbidities, as well as in time-to-event prediction. Seamlessly handling diverse modalities and complex temporal dynamics, NOAH provides a versatile, task-agnostic, scalable foundation for intelligent predictive systems in personalized clinical care and digital medicine.",
    "published": "2026-09-08T17:56:13Z",
    "updated": "2026-09-08T17:56:13Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.09140"
  },
  {
    "id": "2609.09137",
    "title": "A Data-Driven Framework for Identifying and Prioritizing RPA Opportunities in Healthcare Processes",
    "authors": [
      "Maria Alejandra Gomez",
      "Juan Manuel Castillo"
    ],
    "abstract": "Robotic Process Automation (RPA) is widely used to reduce administrative burden in United States hospitals, yet an estimated 30-50% of RPA initiatives underperform because processes are selected informally, without a repeatable method to catalogue candidates, prioritize them, match each to an automation tier -- a Python bot, an open-source orchestrator such as n8n, or an enterprise platform such as UiPath -- and forecast financial return before committing resources. We propose a four-module, data-driven framework unifying these decisions: a Process Taxonomy of twenty recurring hospital processes across five value streams; a Prioritization module deriving an Automation Suitability Index from an Analytic Hierarchy Process matrix with an explicit consistency check; a Tool-Tier Selection module recommending the least-cost technology sufficient for a process complexity, integration, and compliance profile; and a Return-on-Investment module quantifying labor savings, error-cost avoidance, payback, and net present value. Applied to a synthetic portfolio spanning all twenty processes, plus a reference data-flow architecture linking it to hospital EHR/payer/ERP systems: 12 of 20 clear the prioritization threshold; the ranking is robust to +/-20% weight perturbation (Spearman correlation 0.83, top-5 set preserved 97.7%, 2,000 Monte Carlo trials); an Automation Risk Index flags four qualifying processes as Critical risk; a budget-constrained portfolio optimization shows diminishing marginal NPV as spend scales from $400K to $1.03M; and a second Monte Carlo analysis shows portfolio NPV stays positive at its 5th percentile. The framework is a conceptual synthesis of the literature rather than an instrument calibrated on primary hospital data; we discuss HIPAA governance and a research agenda for empirical validation. A supplementary Python implementation accompanies the paper.",
    "published": "2026-09-08T17:55:28Z",
    "updated": "2026-09-08T17:55:28Z",
    "categories": [
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2609.09137"
  },
  {
    "id": "2609.09134",
    "title": "Co-Evolving Harnesses and Models: On-Policy Correction Helps Weaker Models Catch Up Where Imitation Fails",
    "authors": [
      "Zhou Yu",
      "Bin Bi",
      "Shiva Kumar Pentyala",
      "Shubham Mehrotra",
      "Sougata Chaudhuri",
      "Shilpa Bhagavath",
      "Zeyuan Chen",
      "Ran Xu",
      "Phil Mui",
      "James Zhu",
      "Sitaram Asur"
    ],
    "abstract": "Agent harnesses (the system prompt, tool set, execution hooks, and context-management scaffolding around a model) are a critical determinant of agentic task success. Automated harness evolution can enable smaller models to perform well on domain-specific tasks at a fraction of frontier-model cost. Since both the harness and model weights shape behavior, we ask how harness evolution and lightweight fine-tuning should be combined. Across seven enterprise agent tasks, we first evolve a harness with the weaker model, then find that a stronger expert often uses it more effectively, suggesting expert supervision could close the remaining gap. However, training the weaker model on the expert's complete trajectories under the evolved harness backfires: performance regresses on all seven tasks by 4 to 30 points across Qwen3-Coder and Gemma 4, even though the same procedure helps under the unevolved harness. Our analysis shows that imitation transfers knowledge and increases scaffold usage, but disrupts model-harness fit: the weaker model adopts the expert's planning strategy without the competence to execute it and no longer matches the harness evolved around its native planning style. We therefore develop an on-policy expert-correction pipeline, automated by a meta-level MLE agent, that localizes the failing turn in the weaker model's own rollout and asks the expert to rewrite only that turn. This preserves the model's planning style and combines the gains of harness evolution and model adaptation. Our results identify and resolve a source of contention between harness and weight updates, yielding a compatibility-preserving recipe for economical co-evolution on domain-specific enterprise tasks.",
    "published": "2026-09-08T17:53:49Z",
    "updated": "2026-09-08T17:53:49Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.09134"
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
  },
  {
    "id": "2609.06072",
    "title": "ACE: Adapter Consolidation across Experts for Parameter-Efficient Fine-Tuning of MoE LLMs",
    "authors": [
      "Ahin Lee",
      "Sehyun Yun",
      "Joonha Park",
      "Taesik Gong"
    ],
    "abstract": "Parameter-efficient fine-tuning (PEFT) of mixture-of-experts (MoE) models commonly attaches a separate low-rank adapter to each expert. This expert-wise design fragments adaptation in three ways: capacity is split across narrow low-rank updates, gradient supervision becomes sparse and imbalanced under sparse routing, and execution is decomposed into many small GEMMs. We find that such expert-wise separation is often unnecessary, as subsets of LoRA adapters become functionally similar during fine-tuning, revealing redundancy among expert-specific adapters. Based on this redundancy, we propose ACE (Adapter Consolidation across Experts), which groups redundant experts and replaces their expert-specific adapters with group-shared higher-rank LoRA modules under the same PEFT budget. ACE further introduces grouped adapter execution, which consolidates fragmented expert-wise adapter computations into fewer, larger group-level GEMMs. Across evaluations covering 12 datasets and four MoE backbones, ACE achieves the highest observed mean accuracy among the parameter-matched PEFT methods on the three backbones with complete baseline coverage, while providing $1.31\\times$ to $1.48\\times$ wall-clock training speedup over expert-wise LoRA without increasing peak memory. Our code is available at https://github.com/UbiquitousAILab/ACE.",
    "published": "2026-09-05T13:05:01Z",
    "updated": "2026-09-05T13:05:01Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2609.06072"
  },
  {
    "id": "2609.06071",
    "title": "Generating Instance Generators in PDDL Planning",
    "authors": [
      "Nicola J. Müller",
      "Naya Rudolph",
      "Katharina Stein",
      "Jörg Hoffmann",
      "Ayal Taitler",
      "Timo P. Gros"
    ],
    "abstract": "PDDL, the de-facto standard language in the AI Planning community, is designed to specify planning domains: sets of instances that share the same predicates and action schemas. Yet it does not provide any means to specify the actual instance set, i.e., legality constraints on initial states and goal conditions, as well as possibly domain subset constraints specifying an instance subset we are interested in. One consequence of this is that instance generation has always been ad-hoc, with manually written domain- and subset-specific instance generators. Recent work has started to address this, through reasoning and learning methods that however suffer from scalability limitations. Here we introduce an alternative approach, leveraging LLMs to generate instance-generation programs, with built-in soundness guarantees through prescribed checks. We show that these automatically generated instance generators return large numbers of sound and diverse instances efficiently.",
    "published": "2026-09-05T13:04:22Z",
    "updated": "2026-09-05T13:04:22Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.06071"
  },
  {
    "id": "2609.06064",
    "title": "The Role of Gradient Modification in Heavy-Tailed Nonconvex Stochastic Min-Max Optimization",
    "authors": [
      "Tianxi Zhu",
      "Yi Xu",
      "Xiangyang Ji"
    ],
    "abstract": "Stochastic min-max optimization has attracted increasing attention due to its applications in modern machine learning, while existing theoretical studies mainly rely on the bounded variance assumption for stochastic gradients. Under heavy-tailed noise, where stochastic gradients only possess a finite $p$-th moment for $p\\in(1,2]$, gradient clipping or normalization is commonly believed to be necessary to guarantee convergence. In this work, we revisit stochastic min-max optimization under heavy-tailed noise and provide a comprehensive theoretical study of stochastic gradient descent ascent (SGDA). We first show that vanilla SGDA, without any modification to its update rule, can converge under heavy-tailed noise in both nonconvex-strongly-concave (NC-SC) and nonconvex-concave (NC-C) settings, establishing the first convergence guarantees for SGDA in these regimes. Beyond unregularized problems, we further investigate regularized stochastic min-max optimization, where directly incorporating gradient normalization into proximal updates is nontrivial due to the incompatibility between normalization and proximal structures. We overcome this difficulty by developing new clipping-free algorithms, i.e., Stoc-TRGDAM and Stoc-TRGDmax, and they both can achieve the optimal dependence on the target accuracy without using gradient clipping.",
    "published": "2026-09-05T12:49:28Z",
    "updated": "2026-09-05T12:49:28Z",
    "categories": [
      "math.OC",
      "cs.AI",
      "stat.ML"
    ],
    "url": "https://arxiv.org/abs/2609.06064"
  },
  {
    "id": "2609.06063",
    "title": "Explaining AI Agents Through Execution Traces",
    "authors": [
      "Vittoria Vineis",
      "Fabiano Veglianti",
      "Lorenzo Antonelli",
      "Claudia Di Carlo",
      "Matteo Silvestri",
      "Gabriele Tolomei"
    ],
    "abstract": "AI Agents are increasingly deployed in real-world settings, where they interact with external tools and make sequential decisions with limited human oversight. This creates a pressing need for reliable and auditable explanations of what an agent did and why. However, traditional Explainable AI (XAI) methods fall short of providing the process-level transparency required for such interactive, multi-step systems, motivating a paradigm shift toward approaches specifically designed for AI Agents. To address this gap, we present a post-hoc XAI framework that transforms a lengthy agent's execution trace into a structured report and a faithful natural-language explanation explicitly grounded in its observable behavior. Because it relies solely on execution traces, the framework applies across different agent architectures, environments, and tasks. Human and automated evaluations across multiple benchmarks and architectures show that our framework produces high-quality, trace-faithful explanations while reliably identifying unsupported claims, unjustified actions, and evidence gaps, outperforming naive LLM-generated explanations.",
    "published": "2026-09-05T12:45:56Z",
    "updated": "2026-09-05T12:45:56Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.06063"
  },
  {
    "id": "2609.06060",
    "title": "Calendar-SPCA: Interpretable Representation Learning for Multi-Periodic Electricity Consumption Profiles",
    "authors": [
      "Carlos Quesada-Granja",
      "Tony Castillo-Calzadilla",
      "Carlos Rizo-Maestre"
    ],
    "abstract": "Long-term electricity-consumption profiles exhibit several simultaneous periodic structures, including daily, weekly, and annual cycles. This work introduces Calendar-SPCA, a calendar-structured sparse principal component method that incorporates this known multi-periodic geometry directly into low-dimensional representation learning. The feature domain is represented as the Cartesian product of cyclic calendar axes, and a low-rank factorization is estimated using an L1 loading penalty together with graph total variation over the resulting calendar graph. The method therefore produces sparse and locally coherent loading patterns that remain directly readable in their original temporal coordinates. Calendar-SPCA is evaluated on two independent smart-meter datasets with different sample sizes and temporal resolutions: GoiEner and Low Carbon London. A factorial experiment characterizes the complementary effects of sparsity and calendar coherence and examines robustness across sample size, latent dimensionality, and repeated fits. At rank 15, Calendar-SPCA retains 96.92% and 82.90% of the explained variance of rank-matched PCA in GoiEner and Low Carbon London, respectively, while producing mean loading sparsities of 61.95% and 81.50%. Comparisons with classical sparse PCA and SPCA-TV further show that Calendar-SPCA adds a systematic organization of the latent factors in the original calendar coordinates while preserving substantial low-rank information. The resulting components form coherent and complementary daily, weekly, seasonal, and jointly localized calendar patterns, with dataset-specific geometries across the two datasets.",
    "published": "2026-09-05T12:43:18Z",
    "updated": "2026-09-05T12:43:18Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.06060"
  },
  {
    "id": "2609.06059",
    "title": "DAREBench: Deployment-Aware and Reliable Evaluation of Models as Agents",
    "authors": [
      "Yu Liu",
      "Zhilin Liu",
      "Zhiwei Yang",
      "Shaojie Zhang",
      "Zheyuan Deng",
      "Tingwei Huang",
      "Zhenbo Luo",
      "Lei Jiang",
      "Yanbing Liu",
      "Pei Fu"
    ],
    "abstract": "As large language models evolve from question-answering systems into general-purpose agents, evaluation must move beyond static answer correctness to assess multimodal perception, multi-step execution, tool use, and artifact delivery. However, existing benchmarks are often tied to specific task types, execution environments, or scoring protocols, limiting their comparability, interpretability, and reliability for deployment decisions. We introduce DAREBench (Deployment-Aware and Reliable Evaluation of Models as Agents), a benchmark designed to capture workload variation and support reliable agent evaluation. Built on a shared OpenClaw execution environment, DAREBench organizes 233 tasks selected and adapted from 22 source benchmarks into a $2\\times3$ workload matrix defined by input modality and execution form, and evaluates them under a unified contract-based protocol with evidence-based score auditing. We evaluate 23 commercial API models and 12 locally deployed open-weight models over 7,587 model--task runs, reporting accuracy and token consumption alongside reference costs for API models. Results show that no single model dominates all workload groups, text and multimodal tasks exhibit distinct accuracy--cost trade-offs, and local open-weight models are competitive in several groups but still trail frontier commercial models overall. These findings suggest that agent deployment and model selection should consider workload profiles, deployment mode, and accuracy--cost trade-offs rather than rely on a single aggregate score.",
    "published": "2026-09-05T12:36:59Z",
    "updated": "2026-09-05T12:36:59Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.06059"
  },
  {
    "id": "2609.06058",
    "title": "GradeTrap: Authority Cues in Images Shift VLM Judgments Despite Explicit Instructions to Ignore Them",
    "authors": [
      "Deep Dessai"
    ],
    "abstract": "As vision-language models (VLMs) become increasingly capable and are deployed in consequential real-world settings, they must evaluate evidence independently rather than defer uncritically to human authority. We introduce GradeTrap, a controlled evaluation that places two social cues in direct conflict: a student answer, which should attract sycophantic agreement, and a conflicting answer attributed to a peer, teacher, or official answer key, which should attract authority-based deference. Models produce free-form answers while being explicitly instructed to solve independently and ignore all student answers, feedback, and grading marks. We test the models on 60 synthetic real-world trade-off scenarios. Five neutral trials establish a stable model-relative preference, followed by three repetitions of six experimental cues including controls. On the 45-item common intersection across Gemini 3.5 Flash-Lite, GPT-5.6 Luna, and Claude Haiku 4.5, a generic second-answer control yields 5.4% conflicting-answer selection. Relative to that control, pooled within-item changes show no reliable peer-review effect, a 6.9-point teacher-review effect, and a 19.5-point official-key effect. In contrast, a displayed conflicting student answer alone compared to a displayed student reference answer alone only raises selection from 2.2% to 5.2%. Official-key provenance therefore redirects judgements more than a student answer or the generic second-answer control, despite an explicit ignore instruction and an opposing student answer given along with the official key. Effects vary in magnitude across the three models.",
    "published": "2026-09-05T12:30:39Z",
    "updated": "2026-09-05T12:30:39Z",
    "categories": [
      "cs.CV",
      "cs.CL",
      "cs.CY",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.06058"
  },
  {
    "id": "2609.06055",
    "title": "DriveZero: End-to-End Driving Beyond Human Demonstrations",
    "authors": [
      "Hao He",
      "Chengcheng Hu",
      "Zirun Su",
      "Heng Zhang",
      "Haisong Liu",
      "Jinke Li",
      "Haochen Tian",
      "Zhenwei Shen",
      "Hongyang Li",
      "Zhichao Li",
      "Yunchen Yang",
      "Bochao Huang",
      "Siyu Zhang",
      "Kuangye Chen",
      "Xiongjie Zhang",
      "Wentao Dai",
      "Hengchen Dai",
      "Siyuan Liu",
      "Zehao Huang",
      "Naiyan Wang"
    ],
    "abstract": "Most end-to-end autonomous-driving systems learn by imitating human driving logs, leaving their learned behavior constrained by the quality and behavioral coverage of the recorded trajectories. This report presents DriveZero, an end-to-end system that learns driving behavior beyond human demonstrations. It decomposes driving into a perception model and an action model, pretrains each in the regime best suited to it, and combines them into one end-to-end planner. The two models call for different learning recipes: perception must understand the world, and benefits from massive and diverse visual data; action must interact with it, and requires closed-loop feedback. On the action side, we introduce DriveRL, a mixed-agent closed-loop reinforcement-learning framework. It converts real driving logs into interactive worlds, where a privileged teacher policy is trained with PPO through closed-loop rollouts. For the perception model, DriveVFM consolidates multiple frozen vision foundation models, including DINOv3, SigLIP2, SAM and Depth Anything V2, into a single backbone from raw images alone, requiring no task-specific annotations. DriveZero then unifies the two: a camera-only planner that distills the frozen DriveRL teacher through its rolled-out trajectories. The goal-conditioned teacher can moreover be queried under augmented driving intents, yielding diverse, goal-consistent supervision that logged data cannot provide. On nuPlan, DriveRL with value-guided test-time action search achieves a mean score of 93.57 across the Val14, Test14-hard, and Test14-random community splits in both non-reactive and reactive modes, exceeding the Log-Replay expert on all three splits. DriveZero achieves state-of-the-art performance on NAVSIMv1, NAVSIMv2 and the closed-loop HUGSIM benchmark without any human trajectory supervision.",
    "published": "2026-09-05T12:20:38Z",
    "updated": "2026-09-05T12:20:38Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.06055"
  },
  {
    "id": "2609.06052",
    "title": "SkillSpec: Intent-Masked Specification Reasoning for Agent Skill Correctness",
    "authors": [
      "Yizhuo Zhang",
      "Bo Kang",
      "Yi Yang",
      "Zhiyu Duan",
      "Zhouteng Ye",
      "Shunkun Yang"
    ],
    "abstract": "Autonomous agent systems increasingly depend on reusable skill abstractions for consolidating experiential knowledge and domain expertise. These artifacts typically bundle free-form instructions with heterogeneous resources. However, ensuring their correctness remains challenging. Their failure modes transcend conventional code defects to subtle semantic inconsistencies such as intent conflicts, which manifest as silent failures masked by the underlying model. Moreover, skill correctness must be grounded in intended task boundaries and generalizability. We propose SkillSpec, a Hoare-style framework that formulates skill correctness as a specification reasoning problem. It transforms a heterogeneous skill repository into a unified graph representation that aligns descriptions, instructions and code artifacts. For each node, SkillSpec derives an ExpectSpec from the surrounding declared intent, and infers FactSpecs from encoded behavior under partially disclosed intent. An intent mask regulates access to holistic, lineage, neighborhood, and local views to balance the bias introduced by excessive context against unsupported inference caused by insufficient context. SkillSpec jointly reasons over these views to flag candidate defects, and automatically validates them in an isolated sandbox. On 515 real-world skills from SkillsBench and widely downloaded repositories, SkillSpec identified 763 manually confirmed defects across 239 skills, achieving 61.2% precision. The node-level analysis across multiple model families shows that specification reasoning is consistently reliable for code nodes, whereas plain-text nodes remain a major bottleneck. Most defects arise at the boundaries between declared intent and implementation, demonstrating that explicit specifications provide a practical foundation for skill quality assurance in real-world agent ecosystems.",
    "published": "2026-09-05T12:17:02Z",
    "updated": "2026-09-05T12:17:02Z",
    "categories": [
      "cs.SE",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.06052"
  },
  {
    "id": "2609.09203",
    "title": "OpenDiscoveryTrace: Process Traces for Evaluating AI Scientist Workflows",
    "authors": [
      "Aayam Bansal",
      "Keertan Balaji"
    ],
    "abstract": "Existing benchmarks for autonomous AI scientists evaluate only final outputs---generated code, hypotheses, or papers---yet discard the reasoning process by which those outputs were obtained. This makes it impossible to audit scientific methodology, diagnose failure modes, or distinguish systematic reasoning from fortunate guessing. We present \\textbf{OpenDiscoveryTrace}, a public dataset of 558 complete AI scientific agent trajectories that captures how models reason, not just what they produce. Each trajectory records a structured 9-field-per-step trace---including thoughts, tool calls, observations, errors, revision triggers, and self-reported confidence---as models execute 124 scientific tasks spanning drug discovery, materials science, genomics, and scientific literature analysis. The dataset covers seven models: three frontier models (GPT-5.4, Claude Opus 4.6, and Gemini 3.1 Pro; 124 trajectories each, fully balanced across domains and difficulty levels) and four open-weight models (Qwen2.5-7B, Mistral-7B-v0.3, Phi-3.5-mini, and Qwen2.5-1.5B; 30 each), plus 60 live-retrieval variant trajectories. Pilot analysis on 363 LLM-judged trajectories reveals that process traces expose behavioral differences invisible to output-only evaluation: all three frontier models achieve comparable success rates (84--89%), yet Claude Opus 4.6 produces 30$\\times$ more errors than GPT-5.4 (2.5 vs. 0.08 per trajectory, $p < 0.0001$, Cliff's $δ= 0.613$), with qualitatively different error profiles---66.7% tool misuse for Claude versus 83.6% reasoning errors for GPT-5.4. We define five benchmark tasks with baselines from logistic regression, random forests, LSTMs, and Transformer models. The dataset, trace schema, agent harness, and benchmark definitions are publicly available under CC BY 4.0 to support research on process-level evaluation, scientific agent auditing, and AI governance.",
    "published": "2026-09-05T12:16:47Z",
    "updated": "2026-09-05T12:16:47Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.09203"
  },
  {
    "id": "2609.06051",
    "title": "Image-Scale Robustness and Visual Recognition Performance: A Cross-Architecture Analysis",
    "authors": [
      "Anish Monsley Kirupakaran"
    ],
    "abstract": "The sensitivity of visual recognition models to changes in image scale is well established, yet the factors governing this sensitivity across heterogeneous architectures remain unclear. In this work, we investigate whether scale robustness exhibits a common quantitative structure across modern vision models. We evaluate 20 pretrained ImageNet-1K classifiers spanning seven architectural families, including convolutional, mobile, efficient, and Transformer-based architectures. By systematically reducing input image scale, we construct scale-accuracy response curves and define a characteristic scale as a compact measure of the onset of substantial recognition degradation. We then examine the relationship between characteristic scale and baseline recognition accuracy, model parameter count, architectural family, and representation stability. A strong inverse association is observed between baseline accuracy and characteristic scale (Pearson r = -0.890, R^2= 0.792, p < 10^-6). This relationship remains stable under bootstrap resampling, leave-one-architecture-out analysis, and leave-one-family-out analysis. In contrast, parameter count provides negligible additional explanatory power after controlling for baseline accuracy (p = 0.80), while architectural family does not provide significant incremental explanatory power. Furthermore, characteristic scale shows essentially no association with representation stability (r = -0.003, p = 0.991). These results indicate that, across the studied models, scale robustness is strongly organized by baseline recognition performance rather than simply by model size, architectural family, or representation stability. The study provides an empirical framework for characterizing scale robustness across vision architectures and identifies a reproducible accuracy-scale regularity that warrants further theoretical investigation.",
    "published": "2026-09-05T12:12:00Z",
    "updated": "2026-09-05T12:12:00Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.06051"
  },
  {
    "id": "2609.06050",
    "title": "A solution to the Erdős Problem #1040",
    "authors": [
      "Ioannis Tzachristas"
    ],
    "abstract": "For a compact set $K\\subset\\mathbb{C}$, let $\\vartheta(K)$ be the infimum of the planar areas of the unit lemniscates of all monic polynomials with zeros in $K$, allowing arbitrary degree and repeated zeros. We prove that $\\vartheta(K)=0$ whenever $\\operatorname{cap}(K)=1$, with no regularity assumption on $K$. The proof uses a centered harmonic polynomial that is positive on all but a set of arbitrarily small area in the polynomial hull of $K$. A Fourier average of exterior harmonic measures realizes this polynomial as the logarithmic potential of a signed measure having bounded density with respect to the equilibrium measure. A positive perturbation and an $L^1$ approximation by empirical measures then produce the required polynomials. This extends the smooth-boundary result of Krishnapur, Lundberg, and Ramachandran to arbitrary compact sets of capacity one. Together with the capacity-greater-than-one theorem of Ghosh and Ramachandran and an elementary argument for unbounded sets, it follows that $\\vartheta(F)=0$ for every closed infinite set $F\\subset\\mathbb{C}$ of transfinite diameter at least one, answering the vanishing question in Erdős Problem 1040.",
    "published": "2026-09-05T12:11:52Z",
    "updated": "2026-09-05T12:11:52Z",
    "categories": [
      "math.CA",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.06050"
  },
  {
    "id": "2609.04902",
    "title": "Sound-based Multi-Person 3D Pose Estimation",
    "authors": [
      "Yusuke Oumi",
      "Yuto Shibata",
      "Go Irie",
      "Akisato Kimura",
      "Yoshimitsu Aoki",
      "Mariko Isogawa"
    ],
    "abstract": "Can we recover the 3D poses of multiple people using only sound? This paper presents the first attempt to estimate multi-person 3D poses solely from acoustic signals. Estimating the poses of multiple individuals using acoustic signals is inherently challenging due to the superposition of motion-dependent signal variations. Unlike single-person scenarios, the presence of multiple subjects leads to overlapping acoustic signatures, making it difficult to attribute specific signal changes to an individual's pose. Furthermore, the complexity is compounded by inter-person reflections, which introduce intricate propagation delays that obscure the temporal motion-acoustic relationship. To address these issues, we propose SoundMHPE (Sound-based Multi-person Human Pose Estimator), a novel encoder-decoder framework consisting of two key components. First, the Acoustic Multi-scale Encoder captures diverse temporal and fine-grained frequency features to isolate subtle acoustic signatures from complex, overlapping signals. Second, the Temporal Pose Decoder employs an attention mechanism to disentangle multi-person information across successive frames. By jointly accounting for temporal dynamics and inter-person dependencies, this component precisely reconstructs frame-wise individual poses. To validate our approach, we constructed the 6-hour Acoustic Multi-person Pose (AMP) dataset consisting of 432K synchronized frames of multi-person pose and acoustic data, and demonstrated that our SoundMHPE outperforms baseline models. Project page: https://oumi03.github.io/sound-mhpe/",
    "published": "2026-09-04T09:02:11Z",
    "updated": "2026-09-04T09:02:11Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.LG",
      "cs.RO",
      "cs.SD"
    ],
    "url": "https://arxiv.org/abs/2609.04902"
  },
  {
    "id": "2609.04901",
    "title": "Adaptation Interfaces for In-Context Tabular Foundation Models in Time-to-Event Prediction",
    "authors": [
      "Minh-Khoi Pham",
      "Luca Cotugno",
      "Dan Cernei",
      "Alina Sirbu",
      "Stefano Masi",
      "Giuseppe Prencipe",
      "Alessandro Pingitore",
      "Patrizia Landi",
      "Working Group on Uric Acid",
      "Cardiovascular Risk of the Italian Society of Hypertension",
      "Tai Tan Mai",
      "Martin Crane",
      "Marija Bezbradica"
    ],
    "abstract": "Tabular foundation models (TabFMs) achieve strong performance on structured data, particularly for standard classification and regression problems. Yet, extending them to censored time-to-event prediction is challenging because it requires properly handling censoring and event-time dynamics. Building on our prior work, we further link TabFMs with CoxPH and DeepHit and revise the context-resampled training procedure. We evaluate temporal zero-shot reformulation, classification-based fine-tuning, and survival-head adaptation using frozen TabFM backbones on 74 single-risk data sets, and we additionally study 4 competing-risk data sets. Zero-shot inference is effective on smaller single-risk data sets, whereas supervised adaptation becomes increasingly advantageous as data sets scale. Cox provides the most reliably strong interface, especially for Integrated Brier Score (IBS) on larger data sets. DeepHit is relatively stronger for the time-dependent Concordance Index than for IBS, while cause-specific MTLR ranks highest among the TabFM survival heads in the four-data-set competing-risk analysis. Classification fine-tuning becomes more competitive with zero-shot inference as data sets grow but remains weaker for probabilistic prediction. Overall, our results indicate that effective TabFM transfer depends on the data regime and on the statistical structure represented by the chosen adaptation interface. The implementation scripts used for this work are available at https://github.com/kaylode/survival-fm.",
    "published": "2026-09-04T09:01:16Z",
    "updated": "2026-09-04T09:01:16Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.04901"
  },
  {
    "id": "2609.04898",
    "title": "RefactorPlatform: An Open-Source Harness for Controlled Evaluation of Repository-Scale Refactoring Agents",
    "authors": [
      "Aziz Ben Amor",
      "Drish Mali",
      "Mann Acharya",
      "Vijayasri Iyer",
      "Sébastien Bratières"
    ],
    "abstract": "Repository-scale refactoring requires coding agents to propagate a single change across many interdependent files without altering program behavior, yet to our knowledge no existing harness isolates the design choices that determine agent success on this task. We present RefactorPlatform, an open-source evaluation harness that holds the environment fixed and varies each design axis explicitly: model backbone (via OpenRouter and GitHub Copilot CLI), execution regime (baseline, retrieval-augmented, and multi-agent), and prompt specificity. Each run executes in an isolated workspace with live terminal streaming, per-task logging of tokens, diffs, and transcripts, AST-based verification, and exportable telemetry for audit and reproduction. Demonstrating the platform on 100 multi-file RefactorBench tasks across four model families, we illustrate the analyses it supports: AST-aware chunking outperforms naive token-window chunking by 25-30% across prompt modes, whereas naive retrieval falls below the retrieval-free baseline; a lean retrieval-augmented single agent (86%) beats the sub-agent configuration we evaluated (66%) on matched tasks with no task passing under delegation that fails under retrieval; and retrieval's accuracy gains absorb its token overhead, leaving cost per successful refactoring unchanged. RefactorPlatform is open-sourced to make refactoring-agent evaluation reproducible and auditable.",
    "published": "2026-09-04T08:58:10Z",
    "updated": "2026-09-04T08:58:10Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.04898"
  },
  {
    "id": "2609.04894",
    "title": "From Language Models to World-Acting Systems: Progress and Limits of Agentic AI across Digital, Social, Virtual, and Physical Environments",
    "authors": [
      "Linsen Zhu",
      "Mengqing Cai"
    ],
    "abstract": "Large language models become consequential agents when surrounding systems let outputs change external state. Models now call tools, operate interfaces, delegate work, retain state, inhabit generated worlds, and control robots or laboratory equipment. Such advances are often narrated as one march toward autonomy, conflating model competence, system integration, persistence, and safe authority. This critical review synthesizes primary research and official technical specifications available by 31 August 2026. We organize the evidence along delegated authority, temporal persistence, and environmental coupling, while separating model, harness, and environment. Within the evidence examined, action-interface expansion is documented more convincingly than robust completion, recovery, authorization, or independent verification. Model Context Protocol and Agent2Agent improve interoperability but do not establish trustworthy delegation; multi-agent organization adds specialization alongside cost and correlated failure. Persistent simulations and world models support training and planning but do not themselves demonstrate agency; robotics and self-driving laboratories establish bounded feasibility rather than unattended open-world reliability. We propose justified delegation as an analytical and normative heuristic, not an observed law or certified score: expand action scope only where evidence supports provenance, bounded authority, failure detection, safe recovery, and calibrated human control. This framing yields a research agenda for coupled model-harness evaluation, capability-based permissions, durable state, cross-agent accountability, and staged physical validation.",
    "published": "2026-09-04T08:52:28Z",
    "updated": "2026-09-04T08:52:28Z",
    "categories": [
      "cs.AI",
      "cs.LG",
      "cs.MA"
    ],
    "url": "https://arxiv.org/abs/2609.04894"
  },
  {
    "id": "2609.04891",
    "title": "Attention-guided super-resolution of 4D flow MRI in carotid arteries",
    "authors": [
      "Ali Mokhtari",
      "Dominik Obrist"
    ],
    "abstract": "Four-dimensional (4D) flow magnetic resonance imaging (MRI) is a powerful non-invasive technique for visualizing and quantifying complex blood flow patterns in vivo. Despite its clinical promise, broader adoption is limited by low spatial resolution and sensitivity to noise, which restrict accurate assessment of critical hemodynamic biomarkers such as wall shear stress, pressure gradients, and turbulent kinetic energy. To overcome these challenges, we propose a deep learning-based super-resolution framework that integrates multi-scale feature extraction and attention mechanisms to enhance the quality of 4D flow MRI data. The model was trained on a dataset of 120 patients with 240 stenosed carotid arteries. High-resolution ground truth data were generated using patient-specific computational fluid dynamics (CFD) simulations based on segmented vascular geometries and physiologically realistic boundary conditions, and the resulting velocity fields served as targets for supervised learning. The proposed architecture uses convolutional block attention modules (CBAM) to guide the network toward clinically relevant spatial features and to suppress noise in low-resolution inputs. Quantitative results show that the attention-guided model substantially reduces the root mean square error (RMSE) compared with a baseline model without attention, and qualitative velocity contour analysis confirms improved reconstruction of intricate flow patterns. These findings highlight the capacity of the model to restore high-fidelity flow fields under noisy conditions and support the use of deep learning to extend the clinical utility of 4D flow MRI for non-invasive hemodynamic assessment.",
    "published": "2026-09-04T08:48:32Z",
    "updated": "2026-09-04T08:48:32Z",
    "categories": [
      "physics.med-ph",
      "cs.AI",
      "physics.flu-dyn"
    ],
    "url": "https://arxiv.org/abs/2609.04891"
  },
  {
    "id": "2609.04886",
    "title": "SimFuse3D: Source-Guided Target Simulation and Confidence-Guided Multi-Stage Localization Reweighting for Cross-Platform 3D Object Detection",
    "authors": [
      "Yongchun Lin",
      "Xinliang Zhang",
      "Yun Zou",
      "Zhixuan Xiao",
      "Liang Lei",
      "Jianya Guo",
      "Yuqiang Zhai",
      "Xiaofeng Wang",
      "HaiKuo Xu",
      "Haoang Li"
    ],
    "abstract": "Changes in sensor height and viewpoint alter object-level point distributions, making cross-platform LiDAR unsupervised domain adaptation (UDA) difficult. Self-training uses labeled source scans and unlabeled target scans, yet a retained prediction may provide a useful target location while enclosing sparse foreground returns, background clutter, or points inconsistent with the predicted box. We refer to this mismatch as box-point inconsistency. We introduce SimFuse3D, which preserves the target placement and repairs the associated pseudo-object using measured geometry from labeled source scans. Object Memory retrieves a compatible labeled source instance. Target Simulation places its ground-truth box at the target location, aligns its points with the target viewing geometry, and filters the aligned crop to approximate the target observation. Confidence-Guided Multi-Stage Localization Reweighting (CMLR) maps each target pseudo-object confidence score to a bounded weight shared by RPN localization and R-CNN box regression. All components operate only during adaptation, leaving the detector architecture and inference graph unchanged. Across six cross-platform transfers, SimFuse3D exceeds Pi3DET-Net on every reported AP metric and ranks first among the compared adaptation methods on nearly all metrics. On nuScenes-to-KITTI, it ranks first among the compared adaptation methods with both evaluated detectors.",
    "published": "2026-09-04T08:41:56Z",
    "updated": "2026-09-04T08:41:56Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.04886"
  },
  {
    "id": "2609.04880",
    "title": "Reinforcement Learning for Sequential Solar PV Policy Design under Uncertainty: An Agent-Based Approach",
    "authors": [
      "Iias Faiud",
      "Jonaid Shianifar",
      "Michael Schukat",
      "Karl Mason"
    ],
    "abstract": "Designing effective and fiscally sustainable policies for solar photovoltaic (PV) adoption requires balancing adoption gains against public expenditure under uncertainty and heterogeneous decision-making. This study formulates PV policy design as a sequential decision problem and integrates reinforcement learning (RL) with a stochastic agent-based model (ABM) that simulates yearly solar PV adoption under uncertainty. A policymaker agent selects annual incentives, including capital grants, subsidised loan rates, and feed-in tariffs, over a 16-year horizon. Adoption--cost trade-offs are explored by varying policy preferences within a scalarised reward framework. Policies are learned using PPO, SAC, and TD3 and evaluated under stochastic simulation. The results show that this approach produces a clear trade-off structure: the highest-adoption policy (TD3, $w_{\\text{cost}}=0.5$) achieves approximately 4,145 adopters at a cost of EUR 41.73 million, while the lowest-cost policy (PPO, $w_{\\text{cost}}=2.0$) reduces expenditure to EUR 7.27 million with 2,682 adopters. The balanced policy (PPO, $w_{\\text{cost}}=1.6$) achieves 3,495 adopters at a cost of EUR 22.47 million. Across algorithms, consistent trade-off patterns are observed, indicating robustness of the adoption--cost relationship. Compared with static baseline policies, the RL framework explores a broader range of policy configurations. These findings demonstrate the potential of RL as a flexible tool for adaptive policy design under uncertainty.",
    "published": "2026-09-04T08:38:34Z",
    "updated": "2026-09-04T08:38:34Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.04880"
  },
  {
    "id": "2609.04878",
    "title": "ReCAST: Restoration-aware Cascaded Stage-wise Training for Obfuscated SMS Risk Classification",
    "authors": [
      "Jieyun Huang",
      "Yi Shen",
      "Kaikai Zhao",
      "Jiangze Yan",
      "Wenjing Zhang",
      "Ping Chen",
      "Ning Wang",
      "Zhaoxiang Liu",
      "Kai Wang",
      "Shiguo Lian"
    ],
    "abstract": "Fraudulent messages sent via Short Message Service (SMS) are increasingly obfuscated to evade cost-conscious classifiers in production systems. In Chinese SMS, attackers can exploit a wide range of carefully crafted obfuscation strategies to hide risk-bearing phrases while preserving human readability, making direct classification brittle under real-world latency and throughput constraints. We propose ReCAST, a Restoration-aware Cascaded Stage-wise Training framework for robust obfuscated Chinese SMS classification. ReCAST distills a large teacher model's de-obfuscation ability into a smaller deployable student model by supervising obfuscated span detection, obfuscation type prediction, and text restoration, and then uses the restoration-aware student for downstream risk classification. Experiments on an internally constructed real-world Chinese SMS benchmark show that ReCAST substantially improves classification performance over directly trained baselines under obfuscation. The results suggest that restoration-aware distillation offers a practical path toward robust SMS risk classification with smaller deployable models under production-oriented constraints.",
    "published": "2026-09-04T08:36:21Z",
    "updated": "2026-09-04T08:36:21Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.04878"
  },
  {
    "id": "2609.04877",
    "title": "MARLA: A Conceptual Scaffold for Regulatory Learning under the EU AI Act",
    "authors": [
      "Alessio Buscemi",
      "Tom Deckenbrunnen",
      "Imane Hmiddou",
      "Marco Billi",
      "Livio Rubino",
      "Silvia Rizzuto Ferruzza",
      "Daniele Pagani",
      "Antonino Rotolo"
    ],
    "abstract": "The EU AI Act positions regulation as part of the infrastructure for safe, trustworthy and market-ready innovation. Realising this ambition requires regulatory learning: the evidence generated during implementation must be translated into governance and legal knowledge that supports consistent interpretation, effective oversight, and adaptation as technologies evolve. Yet the actors who produce this evidence and those who rely on it operate in different professional worlds. This paper proposes MARLA (Map, Assess, Report, Learn, Adapt), a conceptual scaffold organising regulatory learning as a five-stage cycle centred on the implementation of legal requirements into socio-technical practices, situated at the Local, National and European levels of the AI Act's governance architecture. Deliberately non-prescriptive, MARLA gives technical and legal stakeholders a shared vocabulary in which each of the first three stages generates its own documentable form of regulatory learning. We illustrate the scaffold with two piloted case studies and a prospective National-to-European illustration.",
    "published": "2026-09-04T08:35:01Z",
    "updated": "2026-09-04T08:35:01Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.04877"
  },
  {
    "id": "2609.04875",
    "title": "Forgetting Without Restarting: Execution-State Unlearning for Stateful LLM Agents",
    "authors": [
      "Chao Yao",
      "Yangbo Wei",
      "Zhen Huang",
      "Junhong Qian",
      "Chenle Chen",
      "Shaoqiang Lu",
      "Chen Wu",
      "Lei He"
    ],
    "abstract": "Long-running LLM agents are stateful: beyond the transcript they accrete compressed summaries, plaintext memory, pending tool plans, and, under every serving API, a KV cache. Yet today's \"forget\" operations delete a plaintext memory record and stop, leaving every artifact derived from the revoked information intact. We formalize execution-state unlearning: after a forget request, the agent must behave as if it had never observed the target. Modeling the runtime as a deterministic transition system, we prove that the pre-target trajectory prefix is shared with this counterfactual world for free, that the post-target suffix is irreducibly tainted without token-level attribution, and that exact unlearning requires at least $T-τ+1$ recomputed transitions, where $τ$ is the target's injection step. Provenance-Guided Selective Replay attains this bound as a cross-layer contract spanning prompt, compressed memory, and cache: a provenance graph locates the injection point, checkpoint restoration reduces to cropping the KV cache, and sanitized replay regenerates the counterfactual suffix. Audited with elicitation, stochastic, and string-free behavioral tests across three agent suites, nine baselines, and three model families, memory deletion leaves leakage unchanged, instruction-based forgetting collapses under elicitation (Leak@probes = 1.00), and source redaction still acts on a revoked preference in 80% of episodes, while selective replay is indistinguishable from a full reset at up to 9x fewer recomputed tokens.",
    "published": "2026-09-04T08:31:40Z",
    "updated": "2026-09-04T08:31:40Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.04875"
  },
  {
    "id": "2609.04871",
    "title": "AutoLR: Automating the Path from Research to Launch Review in Industrial Recommender Systems",
    "authors": [
      "Qi Zhang",
      "Yanlin Chen",
      "Wenchao Xiao"
    ],
    "abstract": "Improving an industrial recommender is an iterative research-and-engineering process rather than a direct path from idea to deployment. In \\textbf{DASHEN, NetEase's gaming-community app}, algorithm engineers typically identify promising directions from research papers, technical reports, and prior production experiments; reproduce or adapt the underlying methods; implement them in the production codebase; and evaluate the resulting models through training and offline experiments. Promising candidates are then advanced to online A/B tests, and those demonstrating robust gains are submitted to Launch Review---the internal gate for full-traffic rollout. Large language models (LLMs) can assist with individual stages of this workflow, but the overall process remains human-dependent without a harness that can reliably coordinate them across long-running, often multi-day experimental cycles. We present \\textbf{AutoLR}, initially built as \\textbf{Auto Launch Review} and later extended upstream into an autonomous research-to-launch harness. AutoLR combines three system mechanisms: a \\textbf{multi-expert council} that debates and adversarially reviews proposals; a \\textbf{deterministic evidence-weighted exploration--exploitation selector} that allocates a limited trial budget across candidate directions and uses Council reranking; and a layered knowledge system that combines external research, production-system knowledge, and DASHEN-specific domain knowledge---such as game communities, player characteristics, and content-interaction patterns---with posterior evidence from configurations, patches, logs, failures, and offline outcomes. LLM agents perform semantic reasoning and code generation, while deterministic controllers retain authority over execution, metric extraction, guardrails, and persistent state transitions.",
    "published": "2026-09-04T08:30:36Z",
    "updated": "2026-09-04T08:30:36Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.04871"
  },
  {
    "id": "2609.04870",
    "title": "CHAMP: Cross-domain Hybrid Architecture for Matchmaking and Prediction in Online Multi-Player Games",
    "authors": [
      "Kai Wang",
      "Ge Fan",
      "Chaoyun Zhang",
      "Yuyang Jiang",
      "Yuze Liu"
    ],
    "abstract": "Multiplayer Online Battle Arena (MOBA) games rely on matchmaking to maintain competitive balance. Our prior work, CUPID, framed matchmaking as an assignment re-optimization problem and showed that a single-mode win-rate predictor can meaningfully rebalance teams. However, deploying such a system across diverse player populations exposes three practical bottlenecks: most queueing players lack sufficient in-mode match history (cold start), skill distributions shift drastically across rank tiers (distribution inconsistency), and extreme skill segments are severely data-starved. We present CHAMP, a cross-domain matchmaking framework that resolves these deployment bottlenecks. To address data sparsity and cold starts, CHAMP replaces the target-mode-only player profile with a hybrid domain feature collection: a timestamp-ordered cross-mode short-term sequence whose slices are annotated with target-domain features, plus per-mode breakdowns of long-term, real-time and team statistics. We further propose the Domain-Aware Win-rate Network (DAWN): a Domain-aware Knowledge Extractor (DAKE) compiles target-mode attributes into learnable representations that feed Domain-Aware Temporal/Spatial/Permutation OmniNet Encoders (DATOE/DASOE/DAPOE), so that mode-conditioned representations and per-mode debiasing are learned jointly inside a single shared network. Online, one trained DAWN serves every supported mode, with per-mode position-satisfaction thresholds as the only mode-specific knob. Offline, DAWN achieves 67.73% win-rate prediction accuracy, outperforming all evaluated attention and sequence baselines. Online A/B tests across the entire League ladder of a large-scale MOBA game, from novice players up to the top-expert players served by Elite Mode, demonstrate consistent drops in imbalanced matches. For lower-tier players, CHAMP reduces the 5-minute kill crushing rate by up to 20.73%.",
    "published": "2026-09-04T08:30:29Z",
    "updated": "2026-09-04T08:30:29Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.04870"
  },
  {
    "id": "2609.05552",
    "title": "An Agent Model Abstraction for Human-AI Teaming Cognitive Coupling",
    "authors": [
      "Kolitha Kottagaha W. M",
      "Jos A. C. Bokhorst",
      "Ben Gaffinet",
      "Christos Emmanouilidis"
    ],
    "abstract": "Industrial environments increasingly rely on collaboration between humans and AI-enabled agents. Effective teamwork requires aligning how agents perceive situations, plan actions to pursue goals, and adapt to changing conditions, yet existing systems lack mechanisms for cross-agent cognitive processes coupling. This paper presents a conceptual cognitive agent model that formalises cognitive coupling through eight components: Input, Process, Output, State, Value, Memory, World Model, and Goal. The model abstracts how agents coordinate and co-regulate their cognitive cycles, providing a basis for analysing distributed cognition and designing cognitively interoperable human-AI systems.",
    "published": "2026-09-03T11:01:02Z",
    "updated": "2026-09-03T11:01:02Z",
    "categories": [
      "cs.HC",
      "cs.AI",
      "cs.MA"
    ],
    "url": "https://arxiv.org/abs/2609.05552"
  },
  {
    "id": "2609.03665",
    "title": "PlanePivoting: Exploration and Optimization of Gaze-Mouse Cursor Alignment for Spatial Object Translation",
    "authors": [
      "Jinwook Kim",
      "Sangmin Park",
      "Jihyeon Lee",
      "Sang Ho Yoon",
      "Jeongmi Lee"
    ],
    "abstract": "As XR matures into a ubiquitous computing platform, the disconnect between 2D and 3D input modalities remains a critical barrier to seamless workflow. Frequent transitions between the mouse for 2D precision and hand gestures for 3D manipulation induce significant physical fatigue and cognitive load. To address this, we introduce PlanePivoting, a multimodal interaction technique that extends standard mouse input into 3D space by leveraging gaze-mouse alignment. This technique dynamically modulates the translation plane based on the spatial overlap between the gaze and mouse cursor, eliminating the need for physical input modality switching. To systematically explore the foundational design space of gaze-mouse coordination and optimize key variables, we conducted a user study comparing PlanePivoting with a standard 3D Gizmo interface across two translation mapping profiles and two gaze cursor apertures. Results demonstrate that PlanePivoting outperforms the Gizmo on efficiency metrics while maintaining comparable precision and yielding higher subjective satisfaction. This study demonstrates the potential of gaze-mouse alignment for efficient spatial manipulation between 2D and 3D environments.",
    "published": "2026-09-03T10:59:56Z",
    "updated": "2026-09-03T10:59:56Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2609.03665"
  },
  {
    "id": "2609.03663",
    "title": "Cross-Dataset Transfer and Reliability of Explainable Artificial Intelligence for RhythmFormer Remote Photoplethysmography",
    "authors": [
      "Louis Chen",
      "Torbjörn E. M. Nordling"
    ],
    "abstract": "Background. Remote photoplethysmography estimates the cardiovascular pulse from facial video, and its explanations have rested on inspecting heatmaps rather than on quantitative evidence about where a model reads it. We quantified the explanations and asked whether such explanations transfer between datasets and track model performance. Method. We trained eight condition-specific RhythmFormer models on NCKU-rPPG, recorded under three illumination levels, speaking, rotation, and cycling, estimated one heart rate per 5.12-second clip, and set them beside a UBFC-rPPG reproduction. Raw attention, rollout, attention flow, and Beyond Intuition were assessed by skin coverage and the Salience-guided Faithfulness Coefficient (SaCo). Results. Beyond Intuition ranked highest on both datasets, at median coverage 0.789 and SaCo 0.837 on Static level 3 against 0.826 and 0.917 on UBFC-rPPG; lower ranks differed. Within one participant of one condition, neither measure was related to a clip's heart-rate error, waveform correlation, or signal-to-noise ratio on either dataset: 186 of the 252 coefficients fell below $|ρ|=0.10$ and 28 reached $p<0.05$ against the 13 expected by chance. Across the eight scenarios only Beyond Intuition's coverage followed the three performance measures, at $ρ=-0.43$, $+0.57$, and $+0.43$, while the attention-only methods' SaCo ran opposite to each. It failed at 40 lux alone, its median coverage falling to 0.180 and its median SaCo to $-0.178$, whereas motion degraded the estimates far more without such a drop. Conclusions. Skin coverage and SaCo carry information complementary to the performance measures rather than a proxy for them: attributing to the skin does not guarantee an accurate estimate. What an attribution reveals about a condition is where the model looks rather than how faithfully its map is ordered.",
    "published": "2026-09-03T10:59:45Z",
    "updated": "2026-09-03T10:59:45Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "eess.IV"
    ],
    "url": "https://arxiv.org/abs/2609.03663"
  },
  {
    "id": "2609.03661",
    "title": "Point&Spawn: Mid-Air Reference-Free Object Instantiation Using Gaze and Hand Gestures in Extended Reality",
    "authors": [
      "Jihyeon Lee",
      "Ken Pfeuffer",
      "Jinwook Kim",
      "Jeongmi Lee"
    ],
    "abstract": "Mid-air object instantiation in XR requires users to specify a 3D position without spatial references, such as surfaces or existing objects. We present Point&Spawn, a staged pipeline for pre-instantiation position specification through Direction Setting, Depth Setting, and Position Refinement within a continuous gesture flow. We evaluated six controller-free techniques combining Gaze or Non-Dominant Hand (NDH) direction setting with Ray Intersection, Relative Gain, or Drag&Hold depth setting in a user study (N=24) across Near and Far spawn depths. Relative Gain and Drag&Hold yielded faster and more accurate spawning, lower workload, higher usability, and greater preference than Ray Intersection. The shoulder-referenced NDH ray improved speed and coarse accuracy, whereas the viewpoint-based Gaze ray reduced hand movement with comparable final accuracy. Farther spawn depth imposed greater temporal costs as well as Gaze and accuracy costs with Ray Intersection. These findings offer empirical guidance for designing direction and depth control in spawning in XR.",
    "published": "2026-09-03T10:58:11Z",
    "updated": "2026-09-03T10:58:11Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2609.03661"
  },
  {
    "id": "2609.03660",
    "title": "Local Updates, Global Learning (LUGL): Playing Games with non-incremental Learners",
    "authors": [
      "David Milec",
      "Spyridon Samothrakis",
      "Michael Fairbank",
      "Dennis J. N. J. Soemers"
    ],
    "abstract": "The dominance of Neural Networks (NNs) in RL is partially due to their incremental learning capability, which naturally suits the online, non-stationary nature of self-play training. However, gradient-boosted trees like LightGBM are widely recognised as the state of the art for tabular data in supervised learning, often outperforming NNs in accuracy and efficiency. Game states are inherently tabular---discrete actions, categorical card identities, structured board positions---which makes them an ideal candidate for tree-based methods. We introduce LUGL (Local Updates, Global Learning), a framework that decouples data collection from model fitting, enabling non-incremental learners such as GBTs to operate in RL settings where they would otherwise fail due to distributional shift. LUGL alternates between a local updates phase, where the agent plays self-play games and accumulates tabular updates (Q-values, V-values, policies, or regret values) in a finite table, and a global learning phase, where the table is used to train a function approximator that generalises to unseen states before the table is reset. We test our approach in four standard perfect-information games (Tic-tac-toe, Connect-4, Othello, and Hex) and five imperfect-information games (Kuhn's poker, Leduc Hold'em, Liar's Dice, Goofspiel, and Flop5 Hold'em), and show that our results are competitive with or superior to DQN and DeepCFR. Our experiments demonstrate that the community's strong bias towards NNs in game-playing may be unwarranted, since LightGBM-based agents achieve competitive or superior performance across all tested benchmarks.",
    "published": "2026-09-03T10:58:09Z",
    "updated": "2026-09-03T10:58:09Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.03660"
  },
  {
    "id": "2609.03657",
    "title": "Rethinking 3D Noise: Learning 3D-Aware Video Priors via Optimization-Free Morphological Perturbations",
    "authors": [
      "Onat Şahin",
      "Mohammad Altillawi",
      "George Eskandar",
      "Carlos Carbone",
      "Ziyuan Liu"
    ],
    "abstract": "3D scene representations like NeRF and 3D Gaussian Splatting (3DGS) suffer severe artifacts in sparse-view settings. Recent generative 3D artifact fixers attempt to address this, but rely on paired corrupted and clean renders requiring costly, per-scene reconstructions across varying view configurations. While 2D image augmentations act as instant regularizers, no explicit equivalents exist for 3D representations to preserve spatial consistency across views, an essential property for 3D-aware training. We propose 3D Morphological Perturbations as an optimization-free regularizer that preserves spatial consistency. Leveraging explicit 3DGS, we treat each Gaussian as a fundamental building block - analogous to a 2D pixel - and apply perturbations across its morphological parameter space via scale, rotation, and pruning. Our method eliminates per-scene 3DGS optimization loops from dataset curation while enabling models to learn stronger geometric priors than sparse-view baselines in diagnostic ablations conducted on a lightweight video diffusion sandbox. Scaled to a 14B-parameter video model via ControlNet, our approach maintains visual fidelity while reducing mean depth error by 12.5% over state-of-the-art image-to-image 3D artifact refiners, ultimately boosting downstream robotics policy success rates by up to 8.0% across 3 of 4 manipulation tasks.",
    "published": "2026-09-03T10:54:49Z",
    "updated": "2026-09-03T10:54:49Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.03657"
  },
  {
    "id": "2609.03655",
    "title": "PL-SCEA: Reconfiguring Pretrained Attention for Few-Shot Industrial Anomaly Detection",
    "authors": [
      "Xiaoyu Yang",
      "Qixing Wu",
      "Huixian Zhao",
      "Changlong Jin"
    ],
    "abstract": "Vision Foundation Models (VFMs) provide transferable patch representations for few-shot industrial anomaly detection, but their attention computation is typically inherited from pretraining objectives centered on semantic aggregation. This creates a potential mismatch: token relations that support semantic recognition may not adequately expose the localized texture and structural deviations required for anomaly localization. We therefore investigate the hypothesis that the attention computation of a frozen VFM can be reconfigured as a task-relevant component of anomaly detection. We instantiate this idea with Power-Law Self-Correlation Enhanced Attention (PL-SCEA), which retains the semantic context of pretrained query-key attention while constructing token-adaptive self-correlations over contextualized value features. Positive-correlation filtering and power-law reweighting then emphasize relations that are salient relative to each token's relational background, without introducing additional trainable attention projections. The resulting features are modeled by a lightweight variational autoencoder that provides a fixed-size reconstruction-based representation of category-specific normality. The two stages serve complementary roles: attention reconfiguration shapes how local relational deviations are represented, while reconstruction-based modeling converts deviations from learned normality into anomaly scores. Across MVTec AD and VisA, the complete framework achieves competitive image-level detection and consistently strong pixel-level localization across the evaluated few-shot settings. Ablations further show that PL-SCEA improves localization with either the VAE or a memory bank under the tested setting. These results support the view that task-aligned attention reconfiguration can improve the anomaly-localization capability of frozen pretrained representations.",
    "published": "2026-09-03T10:54:05Z",
    "updated": "2026-09-03T10:54:05Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.03655"
  },
  {
    "id": "2609.03654",
    "title": "Enhancing Financial Question Answering: A Novel Benchmark Dataset of Banks' financial statements",
    "authors": [
      "Arianna Miola",
      "Bruno Spaccavento",
      "Lorenzo Silotto",
      "Marco Bianchetti",
      "Luca Cagliero"
    ],
    "abstract": "The comparative analysis of banks' financial statements poses significant challenges for automated question answering systems due to their complexity, substantial length, technical language, and inhomogeneity of both textual and numerical content across different jurisdictions and institutions. We introduce FinRAG-QA, a novel benchmark dataset for financial question answering, which comprises 999 practitioner-curated questions on 10 standardised indicators, grounded in 209 annual and Pillar 3 reports from 24 major European and U.S. banks spanning 2019-2023. Unlike prior financial QA benchmarks, which centre on U.S. filings and single-institution analysis, FinRAG-QA targets cross-institutional retrieval over documents averaging 198k words, longer than any existing financial QA resource. On this benchmark we evaluate a multi-stage RAG pipeline and isolate the contribution of each component. Contextual chunk enrichment combined with a retrieval-optimised embedding model raises NDCG@10 from 0.322 to 0.710; conditional on the ground truth being retrieved, a reasoning-optimised generator raises answer accuracy from 44.6% to 79.0% (+34.4 percentage points), at roughly 20x the generation latency. We further show that cross-encoder reranking degrades retrieval when the first-stage ranking is already strong, and that a single top-ranked chunk outperforms larger contexts at generation time. Experiments were run in late 2024-early 2025 with the models available at that time.",
    "published": "2026-09-03T10:52:56Z",
    "updated": "2026-09-03T10:52:56Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.CE",
      "cs.IR",
      "q-fin.GN"
    ],
    "url": "https://arxiv.org/abs/2609.03654"
  },
  {
    "id": "2609.03641",
    "title": "Tree-Structured Vector Quantization For Efficient And Progressive Image Compression",
    "authors": [
      "Xinkun Wang",
      "Tianyi Xu",
      "Qingyu Luo",
      "Mingming Ma",
      "Changzhe Jiao",
      "Fu Li",
      "Yi Niu"
    ],
    "abstract": "Vector-quantization based image compression has achieved strong rate--distortion performance, yet most of them still produce a separate compressed representation for each target bitrate. Such variable-rate behavior allows one model to operate at multiple rates, but it does not necessarily provide a progressive bitstream whose prefixes are themselves decodable and can be refined by appending additional bits. We propose \\textbf{Tree-VQ}, a progressive tree-structured vector quantization framework for learned image compression. Tree-VQ organizes discrete codewords as a hierarchical binary tree and represents each latent token by a routed root-to-leaf path. Crucially, every prefix of this path corresponds to a valid quantized representation, so shallow internal nodes serve as coarse reconstruction codes and deeper nodes provide successive refinements. This allows a compressed image to be decoded from an early prefix and progressively improved as more branch symbols are received, rather than being re-encoded for different target rates. To make this structure practical for compression, we introduce a prefix-compatible tree entropy model that codes progressive continuation decisions and routed branch refinements using only causally available decoded contexts. We further use rate-aware refinement scheduling to decide which spatial blocks should receive additional tree bits under a given prefix budget, and hierarchical prefix supervision to ensure that internal nodes are directly decodable at low rates. Experiments show that Tree-VQ achieves a superior performance--efficiency trade-off, delivering the best perceptual compression results with much fewer parameters and lower latency than competing methods.",
    "published": "2026-09-03T10:41:36Z",
    "updated": "2026-09-03T10:41:36Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.03641"
  },
  {
    "id": "2609.03639",
    "title": "Stabilizing Camera-Controlled Novel View Synthesis at Inference Time",
    "authors": [
      "Prajwal Singh",
      "Arjun Badola",
      "Seema Kumari",
      "Hajime Nagahara",
      "Shanmuganathan Raman"
    ],
    "abstract": "Training-free, camera-controlled novel view synthesis from a single image using pre-trained video diffusion models often becomes unstable under large camera motion and long generation horizons. Existing approaches commonly combine several inference-time components, making it unclear which design choices are most important for stability. We show that the main source of stability is simple. Decomposing camera motion into small autoregressive steps limits per-step geometric distortion and reduces error accumulation. A controlled camera-step study shows that performance remains stable for small motions and degrades more strongly as the per-step motion approaches $18$-$20^\\circ$. We further evaluate geometry-constrained spatial attention and low-frequency appearance anchoring as supporting refinements, together with an efficient registration-free warping pipeline. Across RealEstate10K and MegaScene, CamTrol++ improves temporal and geometric consistency, downstream 3D reconstruction quality, and generation efficiency over training-free baselines. The method remains effective for 56-frame generation and under substantial controlled depth corruption. These results show that careful control of camera motion at inference time can substantially improve the stability of camera-controlled novel view synthesis without retraining or modifying the diffusion backbone.",
    "published": "2026-09-03T10:39:44Z",
    "updated": "2026-09-03T10:39:44Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.03639"
  },
  {
    "id": "2609.03635",
    "title": "Analysis of Prompt Engineering for Drug Toxicity Prediction",
    "authors": [
      "Mia MacGregor",
      "Aakash Welgamage Don",
      "Mark Bartlett"
    ],
    "abstract": "Clinical trials in the UK can cost up to £1.3 million, with approximately 90% drug failure rate. Toxicity is a major contributing factor in drug failure. Testing is time and cost intensive. In recent years, the use of artificial intelligence has been increasingly explored to aid in the prediction of drug toxicity, with extensive use of large language models (LLMs). However, LLMs can show considerable variation when minor changes are made to prompts, which raises concerns about their sensitivity to prompt engineering. Prompt engineering is used to optimise a prompt given to an LLM to generate the desired output. This paper proposes a method to analyse prompt engineering for drug toxicity prediction. The aim of the paper is to investigate the importance of prompt phrasing for drug toxicity prediction. LLMs were prompted to identify chemical properties of significance when predicting drug toxicity. Prompts were constructed to investigate; job role, prompt structuring, and rule interpretation. LLMs were then used to generate datasets, using the identified features from initial prompting, which were then passed to machine learning algorithms. The experiments show that the natural variance which occurs in LLMs outweighs any fine-tuning of prompts. There were, however, substantial improvements in model performance when using chemoinformatic code to extract features instead of using LLM-generated values. The proposed analysis methodology is applicable to a wide range of prompt types across different areas of bioinformatics.",
    "published": "2026-09-03T10:28:55Z",
    "updated": "2026-09-03T10:28:55Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.03635"
  },
  {
    "id": "2609.03633",
    "title": "</think> Doesn't Stop Reasoning: Analysis of Spurious CoT Termination",
    "authors": [
      "Seunghee Koh",
      "Sungjae Choi",
      "Minchan Kwon",
      "Sunghyun Baek",
      "Junmo Kim"
    ],
    "abstract": "Chain-of-thought (CoT) reasoning improves large reasoning models (LRMs) on complex tasks but often produces long, redundant traces. Recent training-free early-exit methods shorten these traces by choosing an intermediate point to stop reasoning. We study one such strategy that injects an end-of-think token (EoT, </think>) at this point to trigger the reasoning-to-answering transition, and find that the injected EoT does not always induce a clean answering phase. Answering-phase generation can continue before the model regenerates another EoT, with the span preceding this regenerated EoT scaling with the reasoning tokens saved by early exit and exhibiting continued reasoning behavior. We call this spurious CoT termination, where reasoning-like generation continues into the answering phase. We hypothesize that insufficient attention to the injected EoT contributes to spurious CoT termination and probe this hypothesis with Exit-token Attention Biasing (EAB). Across four LRMs, five benchmarks, and two early-exit methods, increasing attention to the injected EoT reduces spurious CoT termination and answering-phase length. These results reveal a limitation of controlling LRMs by externally matching their explicit think-block format. Inserting the EoT token conforms to this format but does not by itself guarantee the intended reasoning-to-answering transition. Our code is available at https://github.com/Seunghee-Koh/Spurious-CoT-Termination.",
    "published": "2026-09-03T10:25:23Z",
    "updated": "2026-09-03T10:25:23Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.03633"
  },
  {
    "id": "2609.02754",
    "title": "Untangling the Mechanisms of Misleading Context in Medical Question Answering",
    "authors": [
      "Robin Linzmayer",
      "Noémie Elhadad"
    ],
    "abstract": "Large language models now answer medical questions with expert-level performance. However, the context these systems act on can be misleading, and misleading context can corrupt a model's medical judgment. To understand how misleading context corrupts this judgment, we examine the model's susceptibility to the context, disclosure of it, mechanism of corrupted reasoning, and monitorability of the decision. On the medical reasoning subset of MedMisBench, a clinician-reviewed question-answering benchmark of 8,627 questions, we inject two types of misleading context cues, fabricated evidence and a bare assertion. We test three reasoning models, two that expose their full reasoning trace and one frontier model that exposes only its response. All three are more susceptible to the assertion than to the fabricated evidence, adopting the asserted answer 10 to 27 points more often. The misleading cues are disclosed in 81 to 98% of traces but only 7 to 90% of responses, and the assertion is disclosed less often than evidence based cues. Resampling from reasoning traces without disclosure shows the two cues corrupt reasoning differently, evidence entering early and accumulating while the assertion redirects the conclusion near its end. An LLM monitor catches 78% of corrupted decisions at 5% false positives when reading an open model's trace with guidance, against at most 32% from any response. The misleading context that models are most susceptible to is disclosed least, and was caught reliably only from an open reasoning trace, which frontier providers withhold.",
    "published": "2026-09-02T15:55:56Z",
    "updated": "2026-09-02T15:55:56Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.02754"
  },
  {
    "id": "2609.02751",
    "title": "Multi-Tool Image Editing Attribution in Facial Forgery",
    "authors": [
      "Sheng Liu",
      "Qiang Sheng",
      "Danding Wang",
      "Yu Li",
      "Chenming Zhou",
      "Juan Cao"
    ],
    "abstract": "As generative AI tools become increasingly powerful and easy to use, people can easily edit portrait images with a prompt, necessitating the task of image editing attribution, which predicts the involved editing tools from the given image. Existing attribution methods hold the single-tool assumption and can only attribute a specific editing tool, but struggle to handle the more complex and increasingly common multi-tool editing scenarios, where artifacts left by different editing tools are composite and overlapped. To address this gap, we explore Multi-Tool Image Editing Attribution (MIEA), which aims to identify multiple editing tools involved in a multi-tool edited facial image. To simulate the real-life editing operations on facial images, we then construct a new dataset, MultiEdit, which contains 500k+ edited facial images and covers six types of editing tools that support face swapping (Deepfake) and various facial enhancements. Inspired by the findings from data analysis, we design DPEC, a multi-tool attribution method that can capture distinguishable, locality-aware editing tool traces from both spatial and frequency domains with the support of an error-based curriculum learning strategy. Experiments show \\Method\\ outperforms nine methods for facial images edited in at most five steps.",
    "published": "2026-09-02T15:51:26Z",
    "updated": "2026-09-02T15:51:26Z",
    "categories": [
      "cs.CV",
      "cs.MM"
    ],
    "url": "https://arxiv.org/abs/2609.02751"
  },
  {
    "id": "2609.02750",
    "title": "Bilevel Coordinated Reflection: A Game-Theoretic Approach to Multi-Agent LLM Systems",
    "authors": [
      "Yihang Chen",
      "Yuxiang Chen",
      "Yuxuan Huang",
      "Meng Fang",
      "Weilin Luo",
      "Jun Wang"
    ],
    "abstract": "Multi-agent LLM systems commonly use an orchestrator to decompose a task for a team of workers and then improve through textual reflection. Despite strong empirical results, these systems lack a unified account of coordination, memory improvement, and the role of external verification. We model orchestrator-worker interaction as a bilevel coordination game: under bounded coupling, the workers' local-update game is an approximate potential game whose equilibrium slack is controlled by decomposition quality. We then analyse reflection as stochastic movement over semantic memory states. For free-form reflection, we derive a finite-time upper bound, prove worst-case tightness, and give a positive lower bound under a falsifiable persistent-harm condition. We further prove an information-theoretic impossibility result: no gate that observes only the generated transcript can improve uniformly over text-indistinguishable environments, whereas an environment-grounded gate can. Motivated by this separation, we introduce Stochastic Reflective Memory Ascent (SRMA), which accepts a candidate memory only after a grounded evaluation risk strictly decreases. Under calibration and non-degenerate corrective mass, SRMA converges exactly, geometrically or polynomially; matching constructions show that both rate regimes are order-tight. We also provide confidence gating for stochastic evaluation and re-anchoring guarantees for piecewise-stationary environments. Experiments instantiate these objects with environment-grounded metrics and test the predicted coordination and drift laws. On 500 SWE-bench instances, the complete Kimi-based system resolves 72.2% versus a 70.8% public mini-SWE-agent reference. Code: https://github.com/YihangChen9/Bilevel-Coordinated-Reflection",
    "published": "2026-09-02T15:50:10Z",
    "updated": "2026-09-02T15:50:10Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.02750"
  },
  {
    "id": "2609.02749",
    "title": "Repo-To-Skill: Distilling GitHub Repositories Into AI4AI Skills",
    "authors": [
      "Jianlyu Chen",
      "Yuyang Hu",
      "Hongjin Qian",
      "Jiawei Liu",
      "Wenqing Wei",
      "Xiaolong Chen",
      "Defu Lian",
      "Zhicheng Dou",
      "Chaozhuo Li",
      "Qiwei Ye",
      "Zheng Liu"
    ],
    "abstract": "Autonomous agents are beginning to carry out machine-learning (ML) research end to end. These agents combine a model backbone with a harness for planning, execution, memory, and verification, but this architecture still leaves domain-specific know-how outside the agent. We call this missing layer operational knowledge, the know-how that separates knowing a method from making it work. That knowledge is not absent from the field. It appears in repositories and papers, but in forms written for human readers and too large to load during a task. Once distilled into compact, verified skills, this knowledge can be reused across tasks rather than rediscovered during each run. We present DisCo, a skill-powered research agent that creates skills and uses them during research. Its distillation runs in two complementary forms: task-agnostic, condensing the field's widely used repositories into reusable skills, and task-oriented, producing the skills a concrete task calls for. The former, applied across the open ecosystem, yields the AREX-Skill Library, with 5,000+ verified skills distilled from 1,000 widely used ML repositories and organized into 20 areas and 178 capability families. With the GPT-5.5 backbone, research harness, and downstream execution budget held fixed, the skill-equipped research agent scores 134.3% higher on MLE-bench, 34.4% higher on PaperBench, 9.2% higher on FrontierCS, and 14.0% higher on PassNet than the same agent without skills. These gains come from adding distilled operating context under that fixed setup.",
    "published": "2026-09-02T15:49:41Z",
    "updated": "2026-09-02T15:49:41Z",
    "categories": [
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2609.02749"
  },
  {
    "id": "2609.02748",
    "title": "Balancing Frequencies and Pixels in Flow Matching",
    "authors": [
      "Lucas Degeorge",
      "Paul Couairon",
      "Arijit Ghosh",
      "Alexei A. Efros",
      "David Picard",
      "Vicky Kalogeiton"
    ],
    "abstract": "Natural images follow a $1/f^2$ spectral distribution: most signal energy lies in the low spatial frequencies, while the perceptually important structures such as textures and edges occupy sparse high-frequency bands. Pixel-space reconstruction objectives, however, treat all spatial errors uniformly, causing low frequencies to dominate the optimization signal and delaying the learning of fine-scale details. In this work, we identify this objective-level spectral imbalance as a key inefficiency in training pixel-space flow models. To address it, we propose a Focal Log-Frequency Loss (f-loss), a spectrally balanced objective that equalizes the learning signal across frequencies, emphasizing high-frequency components that are otherwise underrepresented in pixel-space objectives. Building on this, we introduce a simple training strategy that combines frequency and pixel supervision: we first emphasize frequency-domain learning early to capture all frequencies, and then transition to standard pixel-space v-loss for spatial refinement. This balancing mitigates the low-frequency bias of pixel losses and aligns the training signal with the evolving needs of the model. Our approach is conceptually simple, requires no architectural changes, and acts as a drop-in replacement for flow matching losses. Across multiple model scales, it accelerates convergence by up to 40% while consistently improving FID and perceptual fidelity. We will release code and models.",
    "published": "2026-09-02T15:49:24Z",
    "updated": "2026-09-02T15:49:24Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.02748"
  },
  {
    "id": "2609.02747",
    "title": "InceptionGS: Generative Bootstrapping for Large-Scale Gaussian Splatting under Unstructured View Sampling",
    "authors": [
      "Tianheng Lu",
      "Guangyu Wang",
      "Ruqi Huang",
      "Lu Fang"
    ],
    "abstract": "Achieving truly immersive large-scale scene digitization necessitates consistent and visually pleasing rendering across all possible viewing perspectives. However, collecting multi-view images covering every fine detail of a large-scale scene is prohibitive due to scene complexity, capture cost, negligence, or accessibility constraints. As a result, the sampled views tend to be highly unstructured -- the majority of the scene is well covered yet certain regions inevitably lack sufficient observations. Existing reconstruction based methods are vulnerable to view scarcity while generation based approaches suffer from generalization, controllability, and 3D consistency issues. To address this challenge, we propose InceptionGS, which bootstraps Gaussian splatting by subtly balancing reconstruction and generation. Starting from an initial Gaussian splatting, InceptionGS reasonably rethinks and repairs problematic regions caused by view scarcity while preserving the quality elsewhere, by softly incorporating scene- and view-adaptive generative priors. Extensive experiments on real-world large-scale scenes demonstrate the superiority and broad applicability of our approach in handling unstructured imagery and boosting high-fidelity Gaussian splatting. Please refer to the supplementary video for better visual demonstrations.",
    "published": "2026-09-02T15:48:15Z",
    "updated": "2026-09-02T15:48:15Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.02747"
  },
  {
    "id": "2609.02746",
    "title": "HiPoly: a hierarchical polymer-native AI framework for property prediction and generative design",
    "authors": [
      "Ge Sun",
      "Gervasio Zaldivar",
      "Yuan Tian",
      "Gustavo Perez Lemus",
      "Juhae Park",
      "Dasha Safarian",
      "Ming Han",
      "Juan J. de Pablo"
    ],
    "abstract": "Polymeric materials are central to modern technologies, with applications ranging from energy to health and transportation. Although AI has made significant advances in materials discovery, the hierarchical structure of polymers across multiple length scales makes them inherently difficult to represent in a unified and physically meaningful way. Here we introduce HiPoly, a polymer-native AI framework that processes complete polymer descriptions through a three-level hierarchical graph architecture built on the G2RINS representation. HiPoly encodes stochastic inter-monomer connectivity, composition, and molecular weight directly within its architecture, using physically motivated design principles that mirror the multi-scale nature of polymeric systems. The framework establishes an end-to-end AI-driven workflow from experimental formulation data to property prediction, generative molecular design, and physics-based validation through molecular simulations, all unified by a single polymer representation. We demonstrate state-of-the-art prediction accuracy for thermophysical properties of multi-component polymer systems, with ablation studies confirming that each hierarchical design choice contributes independently to model performance. As an example, the generative design pathway is applied here to the discovery of sustainable alternatives to persistent fluorinated polymers, where it is possible to identify and independently validate PFAS-free candidates with target surface-energy properties. This work demonstrates how polymer-native AI can accelerate discovery by linking representation, prediction, and design across complex polymer chemistries.",
    "published": "2026-09-02T15:48:11Z",
    "updated": "2026-09-02T15:48:11Z",
    "categories": [
      "physics.chem-ph",
      "cond-mat.mtrl-sci",
      "cs.AI",
      "cs.LG",
      "physics.comp-ph"
    ],
    "url": "https://arxiv.org/abs/2609.02746"
  },
  {
    "id": "2609.02737",
    "title": "Language Models Can Control Their Own Attention",
    "authors": [
      "Namgyu Ho",
      "Huzama Ahmad",
      "Woosung Koh",
      "Se-Young Yun",
      "Tal Schuster",
      "Cicero Nogueira dos Santos"
    ],
    "abstract": "Language models spend most of their attention on a small fraction of context, yet they read the entire KV cache to find the few tokens that matter. If the user asks about a previous detail in a 1M-token conversation, global attention layers must scan the full context to generate each token of the reply. A prominent approach mitigates this cost by pre-selecting relevant tokens via lightweight proxy scores, but this extrinsic scoring still incurs O(N) per step. We take an intrinsic approach motivated by the simple question: wouldn't the model already know which parts of the context are relevant? To this end, we introduce Declarative Attention (DA), a protocol that elicits the model to declare where it needs to attend within its chain-of-thought, partitioning generation into three modes: <global> (full context), <focus> (a specific region), and <local> (recent output only). The inference engine parses these declarations like tool calls and skips most of the KV cache read. Under zero-shot evaluation across 15 long-context tasks, DA on off-the-shelf models (Gemma-4-31B, Qwen-3.6-27B) significantly reduces total attended tokens during decoding (52.0%, 31.1%) with modest accuracy drops (1.27pp, 2.75pp) that shrink with model scale. DA unlocks a new axis of sparse attention, with further potential under training-based methods that future work can explore.",
    "published": "2026-09-02T15:43:38Z",
    "updated": "2026-09-02T15:43:38Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.02737"
  },
  {
    "id": "2609.02731",
    "title": "RVSD: Retrieval Vision Sparse Decoding for Mitigating Visual Hallucinations in Large Vision-Language Models",
    "authors": [
      "Canjie Liu",
      "Jiawen Kang",
      "Jinbo Wen",
      "Zishao Zhong"
    ],
    "abstract": "Large vision-language models have achieved remarkable success in vision-language tasks. However, they remain prone to Visual Hallucinations (VHs), undermining their reliability in real-world applications. Existing solutions typically require curated datasets, additional training, or multi-round decoding, resulting in considerable computational overhead. In this paper, we propose \\textbf{RVSD} (\\underline{R}etrieval \\underline{V}ision \\underline{S}parse \\underline{D}ecoding), a training-free and plug-and-play decoding framework that, for the first time, unifies token sparsification and \\textbf{Semantic-Space Visual Retrieval} (SSVR) within a single decoding pass. Within RVSD, we introduce a \\textbf{semantics-directed token selection} strategy that selectively sparsifies redundant tokens while preserving critical visual information. We further propose the SSVR mechanism, which reformulates visual compensation as an on-demand cross-modal retrieval process within a shared semantic space. Extensive experiments demonstrate that RVSD achieves state-of-the-art performance in mitigating VHs while maintaining robust suppression capabilities under long-context generation settings. Our code is available here.\\footnote{https://github.com/canjie-liu/RVSD}",
    "published": "2026-09-02T15:40:40Z",
    "updated": "2026-09-02T15:40:40Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.02731"
  },
  {
    "id": "2609.02639",
    "title": "TaRA: Training-Aware Low-Rank Adaptation Initialization",
    "authors": [
      "Taehyeon Kim",
      "Eunhyeok Park"
    ],
    "abstract": "Low-Rank Adaptation (LoRA) has become a de facto standard for parameter-efficient fine-tuning (PEFT), yet its performance is highly sensitive to initialization due to the information bottleneck imposed by low-rank decomposition. Existing approaches attempt to construct high-quality LoRA initializations by exploiting principal components of pretrained weights, activations, or gradients. However, these methods do not directly account for the training dynamics of the full-rank model. In this paper, we propose Training-aware Low-Rank Adaptation Initialization (TaRA), a method that initializes LoRA such that the gradients induced by the low-rank factors closely approximate the gradient of the corresponding full-rank weight matrix. Derived from a mathematical formulation, TaRA improves gradient fidelity at the start of training while introducing negligible computational overhead. Across diverse and challenging fine-tuning tasks, TaRA consistently outperforms prior state-of-the-art methods, establishing a simple, robust, and scalable solution for effective LoRA initialization.",
    "published": "2026-09-02T14:15:22Z",
    "updated": "2026-09-02T14:15:22Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2609.02639"
  },
  {
    "id": "2609.02624",
    "title": "Automated Vulnerability Injection in Smart Contracts Using Large Language Models",
    "authors": [
      "Luca Migliaccio",
      "Roberto Natella",
      "Naghmeh Ivaki",
      "Nuno Laranjeiro",
      "Marco Vieira"
    ],
    "abstract": "Assessing vulnerability detection tools for smart contracts requires datasets with known ground truth, yet such datasets are scarce and difficult to build by hand. We propose an approach that uses Large Language Models (LLMs) to automatically inject vulnerabilities into Solidity smart contracts, and demonstrate it in a case study targeting 49 vulnerability types from OpenSCV. Injected contracts are validated through a multi-step pipeline checking compilation, execution, business logic, and the presence of the intended vulnerability. Applied to real-world contracts from SmartBugs, LLMs generate nearly 1,000 candidate variants; after deduplication and validation, 32 confirmed vulnerable contracts spanning 25 vulnerability types survive (a 16.58% survival rate). Surviving contracts concentrate in structurally simpler targets and vulnerability types with localized syntactic patterns. We report practical challenges including LLMs' non-determinism and the difficulty of preserving contract semantics. We then use the validated contracts to assess three static analyzers, revealing complementary and incomplete coverage profiles. Results show that LLM-based vulnerability injection is feasible, while exposing key limitations in scalability and diversity.",
    "published": "2026-09-02T14:03:09Z",
    "updated": "2026-09-02T14:03:09Z",
    "categories": [
      "cs.SE",
      "cs.AI",
      "cs.CR"
    ],
    "url": "https://arxiv.org/abs/2609.02624"
  },
  {
    "id": "2609.02620",
    "title": "Collective creativity in hybrid societies",
    "authors": [
      "Mason Youngblood",
      "Katie Mudd",
      "Manuel Anglada-Tort",
      "Cameron Jones",
      "Elena Miu",
      "Diana Omigie",
      "Margaret Schedel"
    ],
    "abstract": "Generative AI is changing how cultural artifacts are created and circulated, and with it our understanding of creativity itself. Researchers disagree about whether these tools enrich or impoverish culture, and we argue that much of that disagreement comes from conflating two distinct components of creativity: novelty, a property of single artifacts, and diversity, a property of populations. We argue further that creativity in the context of generative AI is best understood as a property of hybrid collectives, or populations of interacting people and algorithms, rather than of individuals. AI-assisted ideation reliably raises the novelty of individual output while narrowing diversity in the aggregate, but this is not an inevitable consequence of putting machines in the loop. Because humans and models search in complementary ways, mixed groups can outperform and out-diversify groups of either kind alone, and machine-discovered solutions can enter human culture and persist there. What decides the outcome is composition: which agents are present, in what proportion, and how they are connected. The question is no longer whether AI helps or harms creativity, but which mixtures let individual gains accumulate without eroding collective diversity.",
    "published": "2026-09-02T13:59:08Z",
    "updated": "2026-09-02T13:59:08Z",
    "categories": [
      "cs.AI",
      "cs.CY",
      "cs.MA"
    ],
    "url": "https://arxiv.org/abs/2609.02620"
  },
  {
    "id": "2609.01455",
    "title": "When Safety Routing Breaks: Understanding Alignment Fragility under Benign Fine-Tuning",
    "authors": [
      "Yitong Guo",
      "Xiaoyi Chen",
      "Siyuan Zhang",
      "Xiaofeng Wang",
      "Haixu Tang"
    ],
    "abstract": "Benign fine-tuning severely weakens the safety alignment of large language models (LLMs), so we study why refusal behavior is so fragile. While prior work often attributes this failure to gradient conflict, we propose a fundamentally different Fisher-geometric explanation: safety Fisher is low-rank, and alignment makes the safety geometry flatter while preserving an output-routing pathway. After 100 benign fine-tuning examples, this pathway is selectively re-sharpened in output-side MLP modules, explaining the asymmetric fragility: safety can collapse to high attack success rates, while general utility degrades mildly. The routing view also explains why few safety examples can restore refusal behavior, indicating that internal safety-relevant representations are preserved. Finally, we show that LoRA and ASAM mitigate early collapse by suppressing output-side sharpness, but their protection weakens at larger fine-tuning scales. Overall, safety failure is best understood as a disruption of a low-rank output-routing mechanism",
    "published": "2026-09-01T15:59:32Z",
    "updated": "2026-09-01T15:59:32Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.01455"
  },
  {
    "id": "2609.01438",
    "title": "Cross-Modal Guidance for Out-of-View Object Search in Simulated Prosthetic Vision",
    "authors": [
      "Adyah Rastogi",
      "Apurv Varshney",
      "Tobias Höllerer",
      "Michael Beyeler"
    ],
    "abstract": "Out-of-view guidance is well established in virtual and augmented reality, but its effectiveness may depend on the visual bandwidth available to the user. We test this under simulated prosthetic vision (SPV), where visual guidance must share the same sparse representation used to inspect the scene. Nineteen participants performed object search under two SPV conditions differing in electrode density and phosphene spread (10x10 and 20x20) and four guidance conditions (no guidance, visual, haptic, audio) all driven by the same horizontal target-offset variable. All three modalities reduced search time and head movement. The tested auditory and haptic cues produced approximately 25% faster overall search and 11-13% faster target acquisition than the visual cue, despite similarly direct orienting trajectories. The tested haptic and auditory cues also shortened post-acquisition search. Final head-target angular offset was reduced substantially more in the 10x10 SPV condition; there, all three cues also reduced vertical localization error by approximately 45-58% despite providing no elevation information. Under severe visual constraints, guidance performance depended on cue implementation and search stage.",
    "published": "2026-09-01T15:45:35Z",
    "updated": "2026-09-01T15:45:35Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2609.01438"
  },
  {
    "id": "2609.01433",
    "title": "Gaussian Core LoRA: Distribution-Aware Dynamic Adaptation for Broad Concept Erasure",
    "authors": [
      "Qinghui Gong",
      "Xunlei Chen",
      "Yu-Xuan Zhang",
      "Hua Meng",
      "Zhengchun Zhou"
    ],
    "abstract": "Concept erasure aims to suppress unsafe, privacy-sensitive, or undesirable generations in text-to-image diffusion models while preserving benign semantics, visual quality, and deployment efficiency. Existing adapter-based methods, such as Low-Rank Adaptation (LoRA), typically freeze the diffusion backbone and learn lightweight parameter updates to steer generation away from target semantics. However, these methods usually assign a static semantic erasure direction to each target concept. This assumption is overly coarse for broad and complex target concepts, since a concept often contains multiple latent semantic prototypes involving different objects, scenes, or relations, and requires different local erasure directions. A single LoRA update averages these heterogeneous erasure demands, leading to under-erasure on difficult prototypes and over-editing of nearby benign semantics. To address this limitation, we propose Gaussian Core LoRA, a distribution-aware low-rank adaptation framework. It fits a Gaussian mixture model in the prompt feature space to estimate latent semantic prototypes within the target concept. During inference, each input prompt is projected into this feature space to compute its Gaussian posterior responsibilities, which condition the core generator to produce a prompt-specific, norm-bounded residual reconfiguration of the shared LoRA rank space. This enables prototype-adaptive erasure with a single lightweight adapter. Compared with the strongest baseline on each metric, Gaussian Core LoRA reduces average Attack Success Rate (ASR) by 7.95%, lowers COCO Fr'echet Inception Distance (FID) by 14.72%, and improves CLIP Score by 4.98%. Further experiments show robustness to adversarial prompts, scalability to multi-identity and multi-style erasure, and compatibility with SDXL and FLUX.",
    "published": "2026-09-01T15:42:11Z",
    "updated": "2026-09-01T15:42:11Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.01433"
  },
  {
    "id": "2609.01431",
    "title": "Efficiently Estimating Optimal Hyperparameter Scaling Laws through Power-Law Entropy Search",
    "authors": [
      "Zhiliang Chen",
      "Sebastian Ament",
      "David Eriksson",
      "Maximilian Balandat",
      "Eytan Bakshy",
      "Jihao Andreas Lin"
    ],
    "abstract": "Optimal hyperparameter scaling laws describe how the best hyperparameters for large language model (LLM) training change with model and data scale, enabling practitioners to predict optimal configurations at production scales without expensive large-scale tuning. However, estimating these scaling laws conventionally requires exhaustive grid searches over thousands of training runs, consuming enormous computational resources. We introduce Power-Law Entropy Search (PLES), a computational cost-aware acquisition function built on multi-fidelity Bayesian optimization that efficiently estimates optimal hyperparameter scaling laws through adaptive experimentation. A key innovation in PLES is that it searches for candidates that reduce the overall uncertainty of a scaling law estimate, instead of optimizing a single objective function. At each iteration, PLES selects the candidate configuration that maximally reduces the uncertainty of the scaling law estimates per unit computational cost, naturally favoring informative small-scale experiments. We evaluate PLES on synthetic benchmarks, surrogate models fitted to real LLM training data, and actual LLM pre-training runs. Across all settings, PLES converges to accurate optimal hyperparameter scaling laws using less than one-tenth of the computational budget required by conventional grid search and other baselines.",
    "published": "2026-09-01T15:41:59Z",
    "updated": "2026-09-01T15:41:59Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.01431"
  },
  {
    "id": "2609.01430",
    "title": "Learning Sparse Decision Trees via Transformer Variational Auto-Encoders",
    "authors": [
      "Giacomo Fidone",
      "Alessio Cascione",
      "Riccardo Guidotti"
    ],
    "abstract": "Decision trees are among the most widely used models in machine learning, largely due to their transparent decision logic, making them well-suited for high-stakes decision-making contexts. However, most existing learning algorithms focus on predictive performance, overlooking the joint optimization of other desirable properties, such as structural sparsity. In this work we propose TREVIS, an approach for learning decision trees with respect to complex objectives, based on the exploration of the latent space of a Tree Transformer Variational Auto-Encoder (TTVAE). By mapping decision trees onto latent representations, TREVIS replaces the discrete search space with a continuous one, enabling gradient-based optimization via a differentiable surrogate model. We experiment with TREVIS for learning decision trees that jointly optimize predictive performance and sparsity. Results show that TREVIS discovers decision trees matching the predictive performance of existing near-optimal algorithms while improving their structural sparsity.",
    "published": "2026-09-01T15:40:33Z",
    "updated": "2026-09-01T15:40:33Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.01430"
  },
  {
    "id": "2609.01427",
    "title": "Pix2Rep-v2: Data-Efficient Representation Learning for Dense Medical Imaging Applications",
    "authors": [
      "S. Sifaoui",
      "E. Angelini",
      "S. Toupin",
      "T. Pezel",
      "L. Le Folgoc"
    ],
    "abstract": "Dense self-supervised learning (SSL) is a powerful paradigm for learning without annotations the local descriptors required to solve dense medical imaging tasks. We present Pix2Rep-v2, a framework for SSL of pixel- and voxel-level representations suitable for few-shot downstream applications. Pix2Rep-v2 addresses the main challenges of dense SSL by leveraging a redundancy reduction objective at the pixel-level with a principle of equivariance of dense representations, that scales efficiently to 3D or wide field-of-view applications. We evaluate our method on four datasets, across multiple tasks, multiple modalities and anatomical structures using multiple backbones in 2D and 3D, and under various data regimes. As an alternative to linear probing or full fine-tuning on the downstream task, we also propose an in-context variant, without downstream training, based on a dense prototype approach. Pix2Rep-v2 shows substantially higher data-efficiency in few-shot scenarios compared to fully supervised baselines, and is competitive with the state-of-the-art e.g., +9.3 Dice points in one-shot segmentation on the M&Ms-2 dataset. Our code and pre-trained models are publicly available at https://github.com/BioMedTP/pix2rep-v2.",
    "published": "2026-09-01T15:39:42Z",
    "updated": "2026-09-01T15:39:42Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.01427"
  },
  {
    "id": "2609.01426",
    "title": "Semantic-Guided Multimodal Preprocessing for Vision Transformer-Based Clear Cell Renal Cell Carcinoma Grading",
    "authors": [
      "Fatemeh Javadian",
      "Zhu Chen",
      "Zahra Aminparast",
      "Johannes Stegmaier"
    ],
    "abstract": "Clear cell renal cell carcinoma (CCRCC) grading is essential for treatment planning, yet existing approaches either analyze patch-level images directly or focus solely on nuclei-level classification, without linking to final tumor grading. We propose a semantic-guided multimodal preprocessing method that integrates nuclei classification maps from existing pre-trained models with RGB histopathology images for Vision Transformer (ViT)-based CCRCC grading. Our approach employs classification map channel concatenation and multiplicative modulation, with optimized overlays to leverage nuclei grading information, while preserving RGB textural features. Evaluation of multiple preprocessing strategies demonstrates that semantic-guided enhancement achieves 0.916 balanced accuracy, outperforming RGB-only baseline (0.707) and max-voting aggregation from prior studies (0.427). Sensitivity analysis reveals that this 21 percentage point improvement over baseline persists even under simulated perturbation at rates matching current state-of-the-art nuclei classification model error thresholds, suggesting both effective semantic utilization and practical robustness. These findings show that preprocessing-based multimodal fusion can leverage the diagnostic potential of existing imperfect nuclei classifiers, effectively bridging previously isolated fine-grained nuclear-level analysis with coarse-grained ViT-based patch classification. Per-class recall was consistent across grades (0.93, 0.91, 0.91), indicating that gains are not concentrated in the majority class. Because the sensitivity analysis perturbs ground-truth maps rather than predictions from an actual nuclei model, this result characterizes robustness under simulated error rather than deployment with a real upstream model, which remains for future work.",
    "published": "2026-09-01T15:39:14Z",
    "updated": "2026-09-01T15:39:14Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.LG",
      "eess.IV"
    ],
    "url": "https://arxiv.org/abs/2609.01426"
  },
  {
    "id": "2609.01423",
    "title": "MegaStyle++: Scaling Image Style Space through Hierarchical Style Definition",
    "authors": [
      "Junyao Gao",
      "Sibo Liu",
      "Jiaxing Li",
      "Yanan Sun",
      "Weidong Zhang",
      "Jun Zhang",
      "Cairong Zhao"
    ],
    "abstract": "Image style is a highly abstract, human-constructed concept shaped by a range of visual factors and intrinsically entangled with content, yet a unified and explicit definition of image style remains lacking. In this work, we first discuss the fundamental question of what is style and then propose a hierarchical style definition that describes image style from an overall style identity to fine-grained visual attributes, providing a more structured, transferable, and interpretable style representation. Based on this definition, we refine the style annotation pipeline of MegaStyle and construct MegaStyle++-8M, a large-scale style dataset containing 150K overall style identities, 1M fine-grained style prompts, and 8M stylized images. Extensive analyses demonstrate that our hierarchical definition substantially expands the style space in both diversity and semantic breadth, while precisely capturing intrinsic visual style of reference images. The dataset and code will be updated at https://github.com/Tencent/MegaStyle, we hope MegaStyle++ provides a scalable foundation for studying and modeling diverse image styles.",
    "published": "2026-09-01T15:37:09Z",
    "updated": "2026-09-02T03:39:41Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.01423"
  },
  {
    "id": "2609.01418",
    "title": "Provably Safe Sim-to-Real Transfer",
    "authors": [
      "Tingting Ni",
      "Maryam Kamgarpour"
    ],
    "abstract": "To mitigate the sample complexity of real-world reinforcement learning (RL), a common practice is to first train a policy in a simulator, where samples are cheap, and then deploy the learned policy in the real world with the hope that it generalizes effectively. Such direct sim-to-real transfer is not guaranteed to succeed: simulator-trained policies can be suboptimal in the real world due to sim-to-real mismatch. Correcting this mismatch requires collecting data from the real system, but in many applications, such as robotics and healthcare, this data-collection process is itself subject to safety constraints. This gives rise to the problem of safe sim-to-real transfer: how can an agent exploit an imperfect simulator while ensuring safe real-world data collection and learning a near-optimal feasible policy for the target system? We address this problem by formulating safe sim-to-real transfer within the framework of reward-free safe RL. We design a computationally efficient algorithm that exploits simulator information to provably reduce real-world interaction while ensuring safe exploration and enabling the computation of a near-optimal feasible policy for any potential reward function. Our real-world sample complexity bound characterizes the benefit of using the simulator in terms of the sim-to-real mismatch.",
    "published": "2026-09-01T15:34:57Z",
    "updated": "2026-09-01T15:34:57Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.01418"
  },
  {
    "id": "2609.01409",
    "title": "EdiTikZ: Scientific Figure Editing from Revision Trajectories",
    "authors": [
      "Christian Greisinger",
      "Zhixue Zhao",
      "Steffen Eger"
    ],
    "abstract": "Vision-language models (VLMs) have shown strong performance in generating scientific figures from text or images. However, producing publication-ready figures requires iterative refinement, making scientific figure editing an important yet largely unexplored task. Existing approaches rely on costly proprietary agentic systems, focus primarily on evaluation, or construct training supervision from synthetically generated edits. Instead, we leverage naturally occurring scientific revision and development trajectories as a scalable source of supervision. To this end, we introduce DaEdiTikZ, the first large-scale dataset of revision-derived scientific figure edits, constructed by mining 391K plausible TikZ edit pairs from arXiv, GitHub, and TeX SE and inferring 781K directed edit instructions with a VLM conditioned on rendered figures and TikZ code. We further introduce DaEdiTikZ-Bench, a human-refined benchmark with 790 instances, and train two compact Qwen3.5-based EdiTikZ models (4B and 9B) by jointly learning reconstruction and editing, followed by reinforcement learning (RL) with complementary rewards for rendered fidelity and edit application. Automatic evaluation places our 9B model above all tested baselines, while human evaluation with 9 annotators and 4,320 ratings places it above GPT-5.6-Sol and on par with Gemini-3.1-Pro. Under severe out-of-distribution shifts, it remains competitive with GPT-5.6-Sol near its 2K training sequence-length regime. Models and datasets will be released.",
    "published": "2026-09-01T15:29:52Z",
    "updated": "2026-09-01T15:29:52Z",
    "categories": [
      "cs.AI",
      "cs.CL",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2609.01409"
  },
  {
    "id": "2609.01408",
    "title": "Neuro-Symbolic Geometric Abstraction (NeuSOGA): From Observations to Symbolic Mathematical Representations",
    "authors": [
      "Qingde Li",
      "Qingqi Hong",
      "Zihan Li",
      "Jie Tian"
    ],
    "abstract": "A fundamental challenge in artificial intelligence is the transformation of observations into explicit symbolic representations suitable for abstraction, interpretation, and reasoning. While modern AI systems achieve remarkable perceptual capabilities through large-scale statistical learning, the resulting knowledge is typically encoded within latent parameters that are difficult to inspect or manipulate analytically. Inspired by Neuro-Symbolic AI and theories of human abstraction, this paper investigates the formation of symbolic mathematical representations from geometric observations. We propose NeuSOGA (Neuro-Symbolic Geometric Abstraction), a framework that progressively transforms observations into topological abstractions, geometric abstractions, and ultimately symbolic mathematical representations. The architecture combines topology-guided structural discovery using Euclidean Distance Transforms, foundation-model perception using Segment Anything, adaptive multi-scale geometric abstraction, and symbolic synthesis through Implicit Area Splines. The resulting representation is an analytical implicit model supporting arbitrary-order smoothness, additive composition, and closed-form evaluation. Unlike neural latent encodings, the generated representation remains interpretable, editable, and mathematically explicit. Experiments on ModelNet40 point clouds, arbitrary-view projections, and segmented optical observations demonstrate that NeuSOGA transforms diverse observations into compact symbolic representations while preserving essential geometric and topological structure across sensing modalities and viewing directions. NeuSOGA provides an interpretable and explainable pathway from observation to symbol and establishes",
    "published": "2026-09-01T15:29:30Z",
    "updated": "2026-09-02T10:10:41Z",
    "categories": [
      "cs.AI",
      "cs.CV",
      "cs.GR"
    ],
    "url": "https://arxiv.org/abs/2609.01408"
  },
  {
    "id": "2609.01404",
    "title": "Evaluating Multimodal LLMs as Generalist Vision-Language-Action Agents for Drone Control: Commanding, Approaching, Tracking and Searching",
    "authors": [
      "Jaewoo Park",
      "Minyoung Lee",
      "Sukmin Seo",
      "Moonbin Yim",
      "Hyunwook Yoon",
      "Dohoon Ryu",
      "Daehee Kim",
      "Myungseo Song",
      "Jihyuk Byun",
      "Seunggyu Chang",
      "Taeho Kil",
      "Jiseob Kim",
      "Bado Lee",
      "Geewook Kim"
    ],
    "abstract": "Multimodal Large Language Models (MLLMs) are strong perceivers of images and video. We ask how far that reach extends into acting: dropping an MLLM directly into a drone's control loop, with its entire action space declared solely in the prompt. Recent systems approach this setting but increasingly narrow the model's decision-making. We widen it back. We introduce DroneCATS-Agent, an architecture where the MLLM is a swappable component, and DroneCATS, a benchmark treating the model as the independent variable. Beyond merely flying toward a pixel, our agent entrusts the model to yaw and search, deliberate when unsure, and self-declare arrival---all without fine-tuning or function-calling schemas. Evaluating frontier and open models across four core capabilities---approaching a visible target, tracking a moving one, searching outside the initial view, and commanding a multi-drone fleet---reveals that even the simplest embodied settings are far from solved. Crucially, to identify what breaks first at the edge, our roster scales down to 2B parameters. The findings expose a stark paradox: it is not the flying that fails. Small open models often navigate into the success radius more reliably than frontier models, yet lose the episode by declaring arrival prematurely or not at all. Multi-drone commanding amplifies this divide, with small models failing by blindly copying a single coordinate across distinct views. Viewed as vision-language-action agents, the models' spatial perception holds up, but their action protocol does not. What separates a deployable edge model from a frontier model is not navigation, but the discipline to sustain a declared protocol and emit the correct terminating action. The open problem is closing this gap at onboard compute costs---yielding a fast model that plans persistently and knows exactly when it is done---and DroneCATS is built to measure that distance.",
    "published": "2026-09-01T15:27:43Z",
    "updated": "2026-09-01T15:27:43Z",
    "categories": [
      "cs.RO",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2609.01404"
  },
  {
    "id": "2608.30260",
    "title": "Using Prosody to Predict Syntactic Structure",
    "authors": [
      "Junghyun Min",
      "Alex Warstadt",
      "Tamar I. Regev",
      "Tiago Pimentel",
      "Ethan Gotlieb Wilcox"
    ],
    "abstract": "While it is well-established that prosody carries crucial cues for syntactic structure, the degree and nature of correspondence between these two domains remains contested. We investigate the syntax-prosody interface through an information-theoretic lens, quantifying the interaction between prosodic features and syntactic representations as their mutual information. We provide a general-purpose framework for estimating this quantity over large speech-text corpora using multimodal language models. Our framework is structure-agnostic and modular, insofar as it can be used to measure the contributions of individual prosodic features or components of structure. We evaluate the syntax-prosody relationship for two features (word duration and inter-word pauses) across two domains--read audiobooks and spontaneous conversations--both in English. Our results demonstrate that prosody contains measurable syntactic information, with prosodic features reducing syntactic uncertainty in spontaneous conversations by up to 10.2%. Our findings offer new empirical support for several theoretical accounts of the syntax-prosody interface.",
    "published": "2026-08-31T05:09:36Z",
    "updated": "2026-08-31T05:09:36Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2608.30260"
  },
  {
    "id": "2608.30258",
    "title": "Stratified Consistency Distillation for Natural Language Formalization",
    "authors": [
      "Zhichao Hou",
      "Ferhat Erata",
      "Joe Lilien",
      "MohamadAli Torkamani"
    ],
    "abstract": "Neurosymbolic reasoning has shown promising success in addressing complex reasoning tasks by combining large language models (LLMs) and symbolic solvers. While this approach shows promise, a fundamental challenge remains: improving the accuracy of translations from natural language to logical formulas. Current methods predominantly rely on prompt engineering, which is difficult to scale across different domains and input formats. Drawing inspiration from the success of fine-tuning in other model adaptation and alignment applications, we propose a fine-tuning-based Stratified Consistency Distillation approach: (1) We generate K logical translations per input using a frontier LLM and cluster them by semantic equivalence (2) Based on the entropy level, we apply majority voting (low entropy), LLM-as-a-Judge (medium entropy), or unification/abstention (high entropy), and (3) fine-tune a smaller model using the selected pseudo-labels. Our experiments show significant and consistent improvements in both Pass@K and our novel Equivalent Logical Similarity metrics, demonstrating the potential of advancing logical translation through consistency distillation.",
    "published": "2026-08-31T05:08:08Z",
    "updated": "2026-08-31T05:08:08Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.30258"
  },
  {
    "id": "2608.30256",
    "title": "Beyond Surface Forms: Symbolic Edits as a Test for Logical Reasoning with LLMs",
    "authors": [
      "Ramya Keerthy Thatikonda",
      "Wray Buntine",
      "Ehsan Shareghi"
    ],
    "abstract": "Logical reasoning with large language models (LLMs) is a critical capability, as it reflects a system's ability to correctly deduce hypotheses from a given context using faithful deductive processes. However, LLM reasoning has often been shown to be sensitive to small surface-level variations in problem formulation, raising questions about whether models truly follow the underlying logical structure. Studying this behavior is challenging because the symbolic components of logical problems, such as operators and predicates, are difficult to systematically manipulate in natural language. We introduce a tool-driven framework for generating controlled, label-preserving edits to logical reasoning problems. Our method operates on symbolic representations of first-order logic and constraint satisfaction problem tasks, enabling targeted modifications to logical operators and other structural components before translating them back into natural language. Using this framework, we evaluate various LLMs under cumulative and individual operator edits and analyze their behavior in response to these changes. Our quantitative and qualitative analyses show that LLM reasoning behavior under controlled operator edits is inconsistent, regardless of model size or family: models sometimes adapt correctly to structural changes but often fail to track their logical consequences. The results from this automated stress test enable an evaluation of language models across different dimensions and help measure the reliability of their reasoning.",
    "published": "2026-08-31T05:06:01Z",
    "updated": "2026-08-31T05:06:01Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.30256"
  },
  {
    "id": "2608.30250",
    "title": "Generating Workflow DAGs from Natural Language with Non-Reasoning LLMs",
    "authors": [
      "Anand Iyer",
      "Bhanu Khetharpal",
      "Srinivas Upadhya",
      "Ramkumar Rajagopal"
    ],
    "abstract": "This paper addresses the problem of translating natural-language routing rules written by business administrators into executable workflow graphs for enterprise contact centers. Each target is a directed acyclic graph (DAG) of conditional actions with parallel branches, hit-first fallback chains, and per-branch Boolean predicates, encoded in the JSON dialect of a commercial routing platform. We show that neuro-symbolic decomposition enables lower-cost, non-reasoning large language models to generate complex workflow DAGs at production-relevant quality without expensive extended-reasoning models. Our central diagnostic is an emission-density bottleneck: on a 635-rule benchmark of manufactured synthetic data, models select the correct graph nodes with high accuracy but increasingly misconfigure attributes and Boolean grouping as the number of interdependent nodes emitted in one pass grows. We therefore move combinatorial graph construction from the model into a deterministic compiler driven by a compact intermediate representation, with a learned registry-selection front end that focuses generation on relevant vocabulary. Across four models, the full system reaches approximately 89% LLM-judge validity, approximately 90% exact-match condition accuracy, and 99-100% valid JSON while using roughly half the per-rule prompt tokens of a monolithic prompt. On GPT-5.3-chat, the method improves judge validity by 24 percentage points and achieves statistical equivalence to a reasoning model's out-of-the-box quality, although an approximately 8-point frontier gap remains. We also present a deployment path and transferable lessons for structured-generation applications.",
    "published": "2026-08-31T05:01:29Z",
    "updated": "2026-08-31T05:01:29Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.30250"
  },
  {
    "id": "2608.30247",
    "title": "OPUS: A Simple yet Effective Unified Framework for Open-Vocabulary Detection",
    "authors": [
      "Xiaoyan Wei",
      "Zhimin Yao",
      "Ruilin Yang",
      "Wei Zhang",
      "Yong Dai",
      "Yi Zhang",
      "Wei Ge"
    ],
    "abstract": "Recent unified open-vocabulary detection (OVD) supports heterogeneous prompts, including text queries, visual exemplars, and their combinations, but often rely on increasingly complex designs such as heavy cross-modal fusion, staged training, and iterative annotation pipelines. We revisit whether such complexity is necessary in the era of stronger foundation models. Our finding is that unified OVD can be made substantially simpler with semantic-rich visual representations and scalable grounding supervision. We present OPUS (\\textbf{O}pen-vocabulary, \\textbf{P}rompt-\\textbf{U}nified, \\textbf{S}imple), a unified detector supporting text, interactive visual, generic visual, and mixed prompting within one framework. OPUS adopts a simple three-part design. Its model architecture combines a semantic-rich visual encoder, built on a DINOv3-ConvNeXt-B backbone with efficient hybrid encoding, with a prompt-aware decoder that avoids prompt-specific branches for unified prompt reasoning. OPUS is trained with a one-stage text-visual training strategy with Instance-level Contrastive Alignment (ICA), and is supported by a SAM3-based single-pass data engine for heterogeneous grounding supervision. Experiments on COCO, LVIS-minival, and ODinW35 show that OPUS achieves state-of-the-art Visual-I performance, reaching 68.1/69.2/54.7 AP, while maintaining balanced Text and Visual-G accuracy. OPUS also turns mixed prompting from interference into complementarity, improving over text or visual prompt alone. These results show that simplicity and strong unified prompting capability can be achieved together.",
    "published": "2026-08-31T04:57:12Z",
    "updated": "2026-08-31T04:57:12Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.30247"
  },
  {
    "id": "2608.30241",
    "title": "PaperBanana-Interact: Scientific Diagram Refinement with Multi-Turn Human Feedback",
    "authors": [
      "Xueqing Wu",
      "Ashwin Balasubramanian",
      "Bingxuan Li",
      "Dawei Zhu",
      "Kai-Wei Chang",
      "Yale Song",
      "Yiwen Song",
      "Rui Meng",
      "Tomas Pfister",
      "Nanyun Peng"
    ],
    "abstract": "Recent efforts have aimed to automate scientific diagram generation from paper content (Lin et al., 2026; Zhu et al., 2026a). However, fully satisfying an author's visual and communicative preferences in a single turn is challenging: in our formative user study (N = 14), all participants requested further revisions after viewing an initial draft, and 86% of them rated the refined diagrams as more satisfactory. Despite the clear demand, the multi-turn workflow remains largely underexplored. To bridge this gap, we present MTPaperBananaBench, a benchmark for multi-turn diagram generation containing 292 images annotated with 3,518 user requirements. To reduce expensive human studies and enable scalable benchmarking, we construct a user simulator that, at each turn, identifies unsatisfied requirements and converts k of them into natural language feedback. Evaluating both requirement satisfaction and overall diagram quality reveals two key failure modes shared across baseline multiturn systems: (1) quality drift, where diagram quality progressively declines over turns, and (2) forgetting, where previously implemented features are lost in subsequent turns. To address these issues, we introduce PaperBanana-Interact, a multi-agent system that refines diagrams via an internal critique-and-refine loop. PaperBanana-Interact consistently improves rather than degrades diagram quality across turns, outperforming baselines by 11.9-18.6 points in quality score and reducing forgetting by 3.7-6.2 points.",
    "published": "2026-08-31T04:52:32Z",
    "updated": "2026-08-31T04:52:32Z",
    "categories": [
      "cs.CL",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.30241"
  },
  {
    "id": "2608.30237",
    "title": "Motus2: A Self-Evolving General World Model for Dexterous Manipulation",
    "authors": [
      "Hongzhe Bi",
      "Zihao Zhou",
      "Yihang Tang",
      "Jingrui Pang",
      "Shuhe Huang",
      "Haitian Liu",
      "Runqing Wang",
      "Shuai Huang",
      "Yichen Wang",
      "Yiming Cheng",
      "Ruowen Zhao",
      "Zhenghua Li",
      "Hengkai Tan",
      "Xiaolong Liu",
      "Jinhui Wan",
      "Jiabao Liu",
      "Min Zhao",
      "Fan Bao",
      "Jun Zhu"
    ],
    "abstract": "General embodied agents should perceive, predict, act, evaluate, and improve within a unified system. World models have shown great promise in building such agents, yet existing models typically append an action output head to a world simulator, without coupling them into a closed decision-and-learning loop for policy improvement. We present Motus2, a self-evolving general world model for dexterous manipulation. Motus2 advances world modeling through model scaling and data scaling. For model scaling, a single model with shared weights exposes three control interfaces: a policy (world-action model), a simulator (action-conditioned world model), and an evaluator (value model). The policy proposes candidate action chunks, the simulator predicts their visual consequences, and the evaluator assesses the predicted outcomes. Their coupling forms a closed decision-and-learning loop for policy improvement. This formulation uses curated expert demonstrations for action learning, while failed and suboptimal interactions provide valuable evidence for dynamics modeling and value learning. For data scaling, Motus2 progresses from large-scale monocular egocentric data to synchronized stereo egocentric data, followed by robot-domain adaptation with robot trajectories and supplementary human-robot alignment data. Motus2 further studies global-autoregressive and hybrid-memory extensions of its sliding-window context, adds tactile feedback for contact-aware control, and is instantiated on a fully biomimetic platform with stereo vision, dual arms, dual dexterous hands, and tactile sensing. Together, egocentric data scaling and closed-loop general world model scaling provide a general path toward self-evolving dexterous manipulation.",
    "published": "2026-08-31T04:44:33Z",
    "updated": "2026-08-31T04:44:33Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2608.30237"
  },
  {
    "id": "2608.30235",
    "title": "LLM-Based Knowledge Graph Completion Combining Discrete Structural Coding with Similar Entity Information",
    "authors": [
      "Jiaqi Wang",
      "Dongying Lin",
      "Yang Yang",
      "Yinan Liu",
      "Bin Wang",
      "Xiaochun Yang"
    ],
    "abstract": "Knowledge graph completion requires models to use both textual descriptions and relational structure. Existing LLM-based methods either encode KG structure as discrete tokens or refine a restricted set of candidate entities, and these two directions have largely been studied separately. We propose CoSC for LLM-based KGC, which combines discrete structural coding with similar entity information. Specifically, an LLM generates an initial candidate entity ranking from discrete structural codes, after which information from entities with structures similar to that of the query entity refines the ranking. Experiments on FB15k-237 show that CoSC outperforms existing baselines on MRR and Hits@10 while remaining competitive on Hits@1.",
    "published": "2026-08-31T04:39:44Z",
    "updated": "2026-08-31T04:39:44Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.30235"
  },
  {
    "id": "2608.30234",
    "title": "CoLa-ICD: A Knowledge-Enhanced Framework for Long-Tail Automated Medical Coding",
    "authors": [
      "Yihang Cheng",
      "Veronica Liesaputra",
      "Andrew Trotman"
    ],
    "abstract": "Automatic medical coding assigns ICD codes to clinical notes, but it remains challenging due to long documents, imbalanced label distributions, and diverse terms. These challenges are especially severe for rare codes, which have limited training instances and are easily confused with semantically similar labels. We introduce CoLa-ICD, a knowledge-enhanced framework for long-tail prediction. CoLa-ICD enriches ICD labels with external terms, models dependencies among related codes, and learns stronger alignment between label semantics and clinical evidence for long-tail prediction. Experiments show that CoLa-ICD improves long-tail prediction with larger gains in larger and sparser label spaces and achieves state-of-the-art performance in AUC, F1, and P@k. Our code is available at https://github.com/youwillbethebest/Cola-ICD.",
    "published": "2026-08-31T04:39:43Z",
    "updated": "2026-08-31T04:39:43Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.30234"
  },
  {
    "id": "2608.30233",
    "title": "Semantic-Spatial Discriminability Enhancement for Generalized Visual Grounding",
    "authors": [
      "Kaiyan Lei",
      "Xu-Yao Zhang"
    ],
    "abstract": "Generalized Visual Grounding (GVG) task aims to localize targets in an image based on referring expressions, extends the classical visual grounding paradigm by integrating multi-target and non-target scenarios. Previous methods typically rely on global semantic matching or coarse-grained region interactions for localization, where the discriminative cues are primarily derived from sentence-level semantics or regional context. In complex multi-target scenarios, such approaches tend to confuse visually similar targets, making it difficult to establish stable instance-level decision boundaries. To address these limitations, this paper proposes a novel Semantic-Spatial Discriminability Enhancement (SSDE) framework for generalized visual grounding, which aims to enhance the discriminative ability on fine-grained semantics and spatial localization, improving both cross-modal understanding and instance-level grounding. Specifically, to enhance the semantic discriminability of query representations at the fine-grained level, we propose a Semantic Discriminability Enhancement (SeDE) module, which leverages spatially guided cross-attention to disentangle fine-grained target-relevant visual attributes and integrates them with the textual subject semantics. Furthermore, to strengthen the spatial discriminability of the referred targets, we introduce a Spatial Discriminability Enhancement (SpDE) module, which models an instance center density map to characterize the spatial distribution of targets, and explicitly constructs instance separation structures in the spatial domain by employing them as an auxiliary supervision signal. Extensive experiments show that SSDE achieves superior performance on ten datasets across both classic and generalized visual grounding tasks.",
    "published": "2026-08-31T04:37:36Z",
    "updated": "2026-08-31T04:37:36Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.30233"
  },
  {
    "id": "2608.30230",
    "title": "Rethinking the Test-Time Prompt Tuning Objective from the Perspective of Calibration",
    "authors": [
      "Jungwon Choi",
      "Hyeonseo Jang",
      "Kibok Lee",
      "Eunwoo Kim"
    ],
    "abstract": "Test-time prompt tuning (TPT) has emerged as a powerful paradigm, refining prompts for each test sample via entropy minimization (EM) over multiple augmented views. However, we identify a limitation in the standard EM-based adaptation: it inherently drives the model toward overconfident predictions disregarding sample-specific uncertainty, leading to significant calibration degradation. To address these limitations, we propose a new objective that replaces the conventional EM loss by aligning the original-view prediction with a target distribution derived from augmented views via cross-entropy, while adversarially incorporating the entropy of the target distribution to capture sample-specific uncertainty. Furthermore, to better construct this target distribution, we apply confidence-aware temperature scaling to each augmented-view prediction according to its confidence, sharpening confident predictions while softening uncertain ones. This formulation allows the model to increase confidence only when the target distribution is reliable, while preserving uncertainty when it reflects ambiguous or conflicting augmented-view predictions. Extensive experiments across diverse benchmarks demonstrate that our approach not only achieves state-of-the-art accuracy but also significantly improves model calibration.",
    "published": "2026-08-31T04:33:05Z",
    "updated": "2026-08-31T04:33:05Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.30230"
  },
  {
    "id": "2608.30226",
    "title": "LaMoC: Loss-Aware Modular Compression for LLMs",
    "authors": [
      "Mohanad Odema",
      "Jacob Song"
    ],
    "abstract": "Modular compression has enabled considerable parameter reduction in LLMs while preserving strong language understanding and downstream task accuracy. However, existing joint modular compression methods primarily rely on activation statistics, leaving loss-sensitivity information and its module-level characterization underexplored. We investigate addressing this gap with LaMoC, a loss-aware modular compression methodology that blends activation and Empirical Fisher statistics through gradient-error alignment. LaMoC improves joint compression by selecting compression statistics that better align local module reconstruction error with the downstream loss. Our contributions are three-fold: (1) We characterize the Empirical Fisher as a module-level loss-aware proxy that can be blended with the activation statistics required for compression. (2) We reformulate joint modular compression as a two-tiered optimization problem that minimizes module reconstruction error while tuning the activation and gradient information blending rate. (3) We implement an empirically driven methodology with statistical validation to solve the resulting compression problem. We evaluate LaMoC across four model families spanning eight models. On the 4-8B models, LaMoC achieves an average 2.5% reduction in perplexity and a 1% relative improvement in task accuracy over state-of-the-art modular compression methods.",
    "published": "2026-08-31T04:20:31Z",
    "updated": "2026-08-31T04:20:31Z",
    "categories": [
      "cs.AI",
      "cs.CL",
      "cs.PF"
    ],
    "url": "https://arxiv.org/abs/2608.30226"
  },
  {
    "id": "2608.29852",
    "title": "MariSat: A Maritime Dataset for Instance Segmentation of Objects in Satellite and Aerial Images",
    "authors": [
      "Amir Abbes",
      "Ines Harrabi",
      "Lucas Justin Yirepoa Kinda",
      "Rim Trabelsi",
      "Adnane Cabani",
      "Fatma Abdelkefi"
    ],
    "abstract": "Automated maritime surveillance from satellite and aerial imagery requires large, precisely annotated datasets, which remain scarce for the instance-segmentation task, particularly for small vessels in cluttered port environments. We present MariSat, a new benchmark dataset of 1260 aerial and satellite images covering diverse port and coastal scenes, annotated at the pixel level for eight maritime object classes (sailboat, yacht, jet-ski, fishing boat, cruise ship, military vessel, tugboat and cargo ship). The dataset was produced through a semi-automatic annotation pipeline combining the textpromptable segmentation model SAM 3 with a cascade of geometric and colorimetric post-processing filters, followed by a manual correction and quality-control pass performed with the CVAT annotation platform. We describe the image-collection methodology, the annotation and correction process, and the resulting data organization. We also report class-wise statistics for the training, validation, and test splits. MariSat has already been used to fine-tune and benchmark segmentation and detection models (SAM 3 and YOLO11) for real-time maritime monitoring. We report detailed quantitative and per-class results for both tasks. The MariSat dataset is publicly available on GitHub : https://github.com/amirabbes/P2M-Maritime-Segmentation",
    "published": "2026-08-30T15:31:39Z",
    "updated": "2026-08-30T15:31:39Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.29852"
  },
  {
    "id": "2608.29847",
    "title": "ContextBias: Controlled Evaluation of Bias Persistence Under Context Shift in Text-to-Image Models",
    "authors": [
      "Shaghayegh Kolli",
      "Sina Emami",
      "Moreno D'Incà",
      "Pouyan Nejadi",
      "Nicu Sebe",
      "Massimiliano Mancini",
      "Jana Diesner"
    ],
    "abstract": "Text-to-image models learn associations between concepts - in the case of this paper, people's professions, which we refer to as roles - and visual attributes. These associations can underpin many observed forms of stereotypical bias. A key open question in this area is whether these associations are stable or change when visual representations of people in professional roles are placed in different prompted contexts. We introduce ContextBias, a controlled evaluation framework, and ContextBench, a benchmark spanning 92 roles and 1,656 semantically controlled prompts, designed to isolate the effect of contextual variation on role-linked visual representations. Evaluating four state-of-the-art models on 66,240 generated images, we find that placing a role in a semantically unrelated context does not suppress role-linked attributes; instead, cross-role attribute concentration increases (pooled BI $+0.047$). Demographic cues, characteristic garments, and role-specific tools remain highly prevalent across context-free, related, and unrelated conditions, and are robust to semantic prompt reformulation. Scene composition and camera framing show the greatest context-sensitivity. These findings reveal a form of stereotypical persistence that remains largely invisible to context-free evaluations, highlighting the need for controlled contextual variation in bias benchmarking. Code and dataset: https://huggingface.co/datasets/shaghayegh/ContextBias , https://github.com/Sina-Emami/ContextBias",
    "published": "2026-08-30T15:23:07Z",
    "updated": "2026-08-30T15:23:07Z",
    "categories": [
      "cs.CV",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2608.29847"
  },
  {
    "id": "2608.29820",
    "title": "Null-Space Diffusion Restoration with Adaptive Uncertainty-Guided Fusion for Ultrasound Speckle Reduction",
    "authors": [
      "Juneyong Lee",
      "Jaeyoung Choi"
    ],
    "abstract": "Ultrasound B-mode imaging commonly suffers from speckle noise and artifacts, requiring a delicate balance between contrast, resolution, and preservation of anatomical structures. Although recently developed despeckling methods have achieved some progress, supervised learning approaches remain fundamentally limited by the ground truth paradox, which arises from the absence of noise-free, ground truth reference images in in vivo scenarios. Existing unsupervised diffusion-based methods typically enforce data consistency directly in the nonlinear log-compressed domain, which can disproportionately amplify background artifacts when mapped back to the envelope domain. To overcome these limitations, we propose an uncertainty-guided null-space diffusion (UGNS) framework, a novel label-free solution that enforces consistency correction on a stabilized positive-envelope proxy obtained via inverse log compression. The proposed UGNS introduces several technical novelties: (a) extraction of a structural prior in the stabilized envelope domain to produce a robust signal envelope that preserves anatomical structure, (b) development of an adaptive range-null reconstruction mechanism that uses an adaptive weight mask to preserve tissue regions via range-space projection, and (c) introduction of uncertainty-guided fusion in an adaptive way to mitigate sampling variability. Extensive and comparative experiments were conducted using the PICMUS benchmark and in vivo datasets. The results demonstrate that UGNS achieves competitive generalized contrast-to-noise ratio (gCNR) values across diverse datasets. In addition, it is successfully validated that UGNS effectively suppresses speckle noise while preserving fine spatial resolution. Code is available at https://github.com/yousirong/UGNS.git.",
    "published": "2026-08-30T14:45:13Z",
    "updated": "2026-08-30T14:45:13Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.29820"
  },
  {
    "id": "2608.29819",
    "title": "PhasorNet: Learning Structure from Frequency for Real-Time Stereo Matching",
    "authors": [
      "Md Raqib Khan",
      "Santosh Kumar Vipparthi",
      "Subrahmanyam Murala"
    ],
    "abstract": "Accurate stereo matching remains challenging in ill-posed regions such as fine structures, reflective, or transparent objects, where appearance cues are often ambiguous or unreliable. To tackle this, we propose PhasorNet, a lightweight yet powerful framework that boosts geometric discrimination via frequency-domain cues. At its core, the Phase-Augmented Transformer (PAT) injects Fourier-derived phase information into the attention mechanism, yielding photometrically robust, structure-preserving features that prioritize structural consistency in difficult areas. Additionally, we develop a Geometry-Context Fusion Refinement Module (GCFRM) that combines a full-resolution convolutional stream with a lightweight attention-based stream (leveraging WQA and CDGA blocks) to efficiently preserve fine details and object boundaries without excessive overhead. Training is further enhanced by a multi-scale Edge-guided High-Error Region (EHR) loss that adaptively focuses optimization on high-error and edge regions, guiding hierarchical cost volume refinement. With only 5.3M parameters, PhasorNet achieves state-of-the-art performance on the challenging ETH3D benchmark while exhibiting excellent cross-domain generalization on KITTI, delivering an efficient and practical solution for accurate real-time stereo matching.",
    "published": "2026-08-30T14:41:36Z",
    "updated": "2026-08-30T14:41:36Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.29819"
  },
  {
    "id": "2608.29814",
    "title": "FRAMEWORKERS: A Dynamic Multi-Agent Framework for AI-Generated Video Production",
    "authors": [
      "Zhendong Li",
      "Lei Sun",
      "Letian Shi",
      "Deheng Zhang",
      "Ruibo Ming",
      "Mengshun Hu",
      "Dannong Xu",
      "Jian Wang",
      "Danda Paudel",
      "Luc Van Gool",
      "Jinjin Gu"
    ],
    "abstract": "Modern video generators excel at synthesizing individual clips, but complete video production requires coordinating a long sequence of interdependent creative steps, including scripting, storyboarding, generation, and editing. It further demands persistent asset management and dynamic task orchestration as intermediate outputs, dependencies, and execution states evolve over time. Existing automated systems typically rely on rigid pipelines that are difficult to adapt to diverse inputs and changing workflows, while general-purpose large language models (LLMs) remain unreliable for long-horizon orchestration and multimodal asset routing. We introduce FRAMEWORKERS, a task-centric and workspace-grounded multi-agent framework for open-ended video production. A central Director formulates video creation as dynamic task management, continuously editing a Task Stack to determine which subtask to execute next and which sub-agent to invoke. An Assistant serves as the execution layer, grounding each selected task in a shared Workspace, retrieving the required assets and context, invoking the assigned sub-agent, and persisting the resulting artifacts. Execution capabilities are exposed through modular sub-agents with registered descriptors, allowing new sub-agents to be integrated without redesigning the orchestration workflow. To improve orchestration reliability, we fine-tune the Director via supervised fine-tuning (SFT) followed by Group Relative Policy Optimization (GRPO) for descriptor-conditioned task routing. Experiments show that FRAMEWORKERS outperforms strong LLM planners in routing accuracy, recovers reliably from runtime failures, generalizes to unseen sub-agents without retraining, and achieves higher end-to-end video quality and broader task coverage than fixed pipelines, single-agent systems, and prior multi-agent approaches.",
    "published": "2026-08-30T14:28:50Z",
    "updated": "2026-08-30T14:28:50Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.29814"
  },
  {
    "id": "2608.29809",
    "title": "RegionCache: Semantic-Aware Region Reuse for Efficient Multi-Turn Image Generation",
    "authors": [
      "Peizheng Li",
      "Xin Ai",
      "Hanyuan Liu",
      "Qiange Wang",
      "Yanfeng Zhang"
    ],
    "abstract": "Real-world image generation often involves multi-turn editing, where users iteratively modify small regions while most image content remains unchanged. However, existing diffusion transformer (DiT)-based editing pipelines recompute the entire image at every turn, causing substantial redundant computation. Existing DiT acceleration methods further ignore semantic correspondence across prompts, leading to unnecessary recomputation or unsafe reuse that harms editing quality. To address this, we propose RegionCache, a semantic-aware reuse framework for multi-turn image editing that selectively reuses diffusion states from unchanged regions. RegionCache detects reusable regions through semantic overlap between consecutive prompts and cross-attention localization, and adopts an adaptive reuse schedule based on prompt similarity and contextual consistency. Experiments on PixArt-alpha demonstrate that RegionCache achieves 1.43x--2.55x end-to-end speedup while maintaining comparable image quality. Code is available at https://github.com/hebutBryant/RegionCache.",
    "published": "2026-08-30T14:21:46Z",
    "updated": "2026-08-30T14:21:46Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.29809"
  },
  {
    "id": "2608.29804",
    "title": "Beyond Global Realism: Virtual Try-On Evaluation and Optimization with Dimension-wise Garment Fidelity Assessment",
    "authors": [
      "Kaidong Zhang",
      "Yukang Ding",
      "Xiaoyu Liu",
      "Ying Chen"
    ],
    "abstract": "Virtual try-on (VTON) requires not only realistic generation but also faithful preservation of garment characteristics. However, existing evaluation metrics such as PSNR, SSIM, KID and FID struggle to measure the consistency between the generated and reference garments, particularly in capturing the multi-dimensional characteristics of garment fidelity. To address this, we propose DAT: a Dimension-wise Assessment framework for virtual Try-on, which decomposes garment consistency into seven interpretable dimensions: silhouette, color, neckline and sleeve shape, major decoration and structure, material texture, fine-detail fidelity, and logo preservation, each formulated as a discrete attribute-level prediction task. To train this specialized assessment model, we adopt a two-stage learning paradigm comprising large-scale weak supervision on 50K samples, followed by refinement on 10K higher-quality annotations obtained via multi-model voting. Furthermore, we employ weighted cross-entropy loss to mitigate the severe label imbalance inherent across evaluation dimensions. Beyond its role as an evaluation framework, the assessment model can be integrated into reinforcement learning optimization of Qwen-Image-Edit for VTON, where dimension-wise rewards are adaptively aggregated to emphasize under-optimized aspects during training. Experimental results show that our method (8B parameters) achieves state-of-the-art performance in terms of balanced accuracy, SROCC, and PLCC, outperforming strong proprietary models such as Gemini-3.1, Qwen3.7-plus, and GPT-5.5, while also serving as an effective optimization signal for reward-guided VTON generation",
    "published": "2026-08-30T14:08:40Z",
    "updated": "2026-08-30T14:08:40Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.29804"
  },
  {
    "id": "2608.29802",
    "title": "Foundation and Multimodal Large Language Models for Face Presentation and Morph Attack Detection",
    "authors": [
      "Hatef Otroshi Shahreza",
      "Asif Hussain Khan",
      "Peter Lorenz",
      "Alain Komaty",
      "Sébastien Marcel"
    ],
    "abstract": "Face recognition systems are increasingly deployed in security-critical applications, yet they remain vulnerable to presentation and morph attacks. Presentation attack detection (PAD) and morphing attack detection (MAD) are therefore essential components of trustworthy face biometrics. Despite advancements in PAD and MAD methods, existing detectors suffer from limited generalization and degrade in cross-dataset evaluation. In this paper, we systematically investigate whether general-purpose foundation models (FMs) and multimodal large language models (MLLMs) encode PAD-relevant and MAD-relevant information, and how such models can best be deployed for both tasks. We study five approaches with increasing access to the internal information of the model: (i) zero-shot prompting of off-the-shelf MLLMs; (ii) training a shallow model on the next-token logit probabilities at the output of the MLLM; (iii) parameter-efficient fine-tuning on task-specific question-answer data, yielding two specialized MLLMs, called PADLLM and MADLLM, which additionally provide textual reasoning for their decisions; (iv) linear probing of frozen vision encoders; and (v) fine-tuning of vision encoders of FMs and MLLMs. We benchmark 16 open-weight MLLMs and 30 vision encoder backbones on four PAD datasets (MSU-MFSD, CASIA-FASD, Replay-Attack, and OULU-NPU) and four MAD datasets (FFHQ, FRGC, FRLL, and FERET). Our experiments show that FMs and MLLMs can achieve significant performance for PAD and MAD. In addition, the fine-tuned models achieve state-of-the-art detection performance in cross-dataset evaluation, indicating that general-purpose pretrained representations carry substantial attack-relevant information. Source code of all our experiments will be publicly released.",
    "published": "2026-08-30T14:07:31Z",
    "updated": "2026-08-30T14:07:31Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.29802"
  },
  {
    "id": "2608.29800",
    "title": "Source-Dependent Deference in Medical Imaging Agents Under Falsified Findings: A Pilot Audit",
    "authors": [
      "Ridam Roy",
      "Md Shahriar Rashid",
      "Md. Rajib Mia"
    ],
    "abstract": "Tool-using agents are being proposed for medical imaging, and their behaviour when a tool returns a false finding is largely unmeasured. We audit whether a ReAct-style tool-calling agent abandons an answer it has already given correctly once a falsified finding arrives, and whether that depends on how the finding is presented. On 20 VQA-RAD closed questions across four vendor-designated model tiers, the agent commits to an answer from the image alone; a negated finding is then delivered either as JSON from an analyze_image tool the agent invokes itself, or as quoted prose attributed to a radiologist. Our outcome is the commission-error rate over cases answered correctly without any tool. Deference is much higher under the prose-attributed claim: at the strongest tier the agent revised its correct answer in 10 of 13 cases against 1 of 13 under the tool (exact McNemar p=0.0039, Holm-adjusted 0.012). We do not claim this isolates the source label. Attribution travels with the delivery channel in our design, and exposure differs because the tool claim reaches the agent only when it calls the tool. The finding is a joint source-and-delivery asymmetry from a small-scale pilot whose pre-specified stopping rule was not met.",
    "published": "2026-08-30T13:58:15Z",
    "updated": "2026-08-30T13:58:15Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.29800"
  },
  {
    "id": "2608.29798",
    "title": "R$^2$A: Learning Persona Policies Through Persona Representation Learning and Runtime Alignment",
    "authors": [
      "Mohan Zhang",
      "Chengsong You",
      "Xiaoyu Cao",
      "Zhen Sun",
      "Xiaohan Jia",
      "Junwei Zhou",
      "Yongchao Chen"
    ],
    "abstract": "The same Persona behavior can be beneficial in one context but harmful in another, causing static Persona elicitation to perform inconsistently across tasks. We introduce the Persona Selection--Realization Framework, which models behavior generation through a latent Persona state and decomposes it into Persona Selection and Persona Realization. The discrepancies between static Persona elicitation and an ideal Persona policy in these two components define the Selection Gap and Realization Gap, respectively. Building on this framework, we propose R$^2$A, a two-stage approach for learning Persona policies. Persona Representation Learning uses structured Who--How--What presentations to encode the target Persona's objective, conditional behavioral principles, and trajectory-level manifestations. Persona Runtime Alignment then removes the explicit Persona specification and jointly calibrates behavior selection and trajectory realization using task feedback. Across 12 evaluation settings covering the four principles of the Accountable-Professional Persona studied in this work, R$^2$A overall outperforms both the base model and static Persona elicitation. Ablation results further show that Persona Representation Learning is critical for preventing Runtime Alignment from producing behaviorally imbalanced policies and for achieving more stable Persona policy learning.",
    "published": "2026-08-30T13:55:09Z",
    "updated": "2026-08-30T13:55:09Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.29798"
  },
  {
    "id": "2608.29793",
    "title": "GridFlow: Structured Latent Flow for Seamless City-Scale 3D Point Cloud Generation",
    "authors": [
      "Xinyu Wang",
      "Muhammad Ibrahim",
      "Atif Mansoor",
      "Ajmal Mian"
    ],
    "abstract": "Generating realistic 3D city environments from remote sensing data is important for simulation, urban planning, and mixed reality, yet existing point cloud generation methods are limited to single objects or bounded indoor scenes and cannot handle the scale, seamless tiling, and partial observability challenges of city-scale generation. We present \\ours{}, a multi-stage framework that generates dense, colored point clouds ($10^5$ points per $150\\text{m}{\\times}150\\text{m}$ tile) at city scale, conditioned on satellite imagery, semantic segmentation maps, and digital surface models (DSM). A \\emph{Grid-Aligned VAE} encodes each tile into a topology-preserving latent grid where tokens correspond to fixed spatial regions, enabling spatially coherent multi-modal conditioning and compact latent-space edge consistency that implicitly aligns thousands of boundary points for seamless cross-tile generation. A conditional rectified flow model synthesizes geometry latents from the fused multi-modal conditions, and an orientation-aware diffusion colorizer separately handles satellite-visible horizontal surfaces and occluded vertical façades. To support standardized evaluation, we build on public 3D data sources to introduce \\emph{City3D-MultiGen}, a benchmark of $163$K densely annotated tiles from Melbourne and London with aligned point clouds, satellite images, semantic maps, and elevation data. Experiments show that \\ours{} outperforms adapted point cloud generation baselines across all geometry metrics and produces visually coherent colored point clouds with seamless boundaries over arbitrarily large urban extents. Our benchmark details are available at https://huggingface.co/datasets/e32/City3D-MultiGen",
    "published": "2026-08-30T13:39:36Z",
    "updated": "2026-08-30T13:39:36Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.29793"
  },
  {
    "id": "2608.29783",
    "title": "InspectorGPT: A Comparative Reasoning Enhanced VLM for Comprehensive Industrial Anomaly Detection",
    "authors": [
      "Weifei Chen",
      "Honghao Zhang",
      "Zhiyuan You",
      "Xinyi Le"
    ],
    "abstract": "Industrial anomaly detection is a critical component of modern manufacturing. Most traditional unsupervised methods rely on modelling normal feature distributions, inherently limiting generalization to unknown categories. To improve generalizability, some recent methods incorporate vision-language models (VLMs) for zero-shot detection via text prompts. However, we observe that reasoning-oriented post-training can cause anomaly discrimination to collapse, with some fine-tuned models performing worse than their base VLMs. Existing methods also provide only textual decisions or coarse boxes, without pixel-level segmentation. A more explicit detection principle comes from human inspection: anomalies are identified by comparing a query image with a defect-free reference. Inspired by this, we propose InspectorGPT, a VLM framework centered on comparative reasoning. Given a normal reference and a query image, InspectorGPT compares them to identify discrepancies and perform multiple inspection tasks with detailed reasoning. We internalize this capability through Chain-of-Thought (CoT) fine-tuning and Group Relative Policy Optimization (GRPO) with tailored, verifiable rewards. We further introduce InspectorGPT-Seg for pixel-level anomaly masks. Segmentation supervision improves anomaly discrimination but weakens semantic reasoning, while joint training fails to balance them. We therefore train the two branches separately and combine them through task-vector fusion. Extensive experiments demonstrate superior multi-dimensional performance and generalization to unseen benchmarks, validating comparative reasoning for comprehensive industrial inspection.",
    "published": "2026-08-30T13:22:42Z",
    "updated": "2026-08-30T13:22:42Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.29783"
  },
  {
    "id": "2608.29179",
    "title": "TAAL: Mitigating Early Beam Pruning in Generative Recommendation via Temporal Autoregressive Alignment",
    "authors": [
      "Lianjie Li",
      "Zhiying Tu",
      "Dianhui Chu",
      "Hongliang Sun"
    ],
    "abstract": "Generative recommendation encodes items as hierarchical semantic identifiers (SIDs) and retrieves the next item through autoregressive decoding. Standard next-token prediction, however, does not explicitly cover the multimodal transitions present in interaction sequences, leaving the ground-truth SID vulnerable to irreversible pruning at early beam-search branches. Across three public benchmarks, we find that 91.9\\%--96.6\\% of retrieval failures occur within the first two decoding steps. We therefore propose Temporal Autoregressive Alignment (TAAL). During training, TAAL constructs a joint $(c_1,c_2)$ soft target from historical transitions and aligns the early-prefix distribution with a forward KL objective. During inference, it calibrates candidate scores with pointwise mutual information (PMI) to reduce the influence of globally frequent prefixes. On Amazon Beauty, Instruments, and Yelp, TAAL improves NDCG@10 over the standard baseline by 39.5\\%, 6.7\\%, and 28.6\\%, respectively, while increasing full-SID survival by 3.9\\%--16.6\\%. Beam-width analysis further shows that the relative survival gain grows as the beam narrows, reaching 39.4\\% at $B=5$.",
    "published": "2026-08-29T10:11:47Z",
    "updated": "2026-08-29T10:11:47Z",
    "categories": [
      "cs.IR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.29179"
  },
  {
    "id": "2608.29177",
    "title": "Dynamic-Robust Photometric-Semantic Reconstruction for Open-Vocabulary 3D Scene Understanding",
    "authors": [
      "Boyu Cai",
      "Li Yang",
      "Yan Xu",
      "Wei Liu",
      "Nian Liu",
      "Sikui Zhang",
      "Yan Wang",
      "Chunfeng Yuan",
      "Weiming Hu"
    ],
    "abstract": "The integration of novel view synthesis (NVS) and open-vocabulary segmentation (OVS) has recently yielded powerful feed-forward 3D foundation models. However, their inherent reliance on static-scene assumptions leads to severe misalignment of spatial features in unconstrained dynamic environments. To bridge this critical gap, we propose SPAR, a novel joint semantic-geometric encoding architecture that explicitly isolates transient dynamic noise prior to latent space aggregation. Furthermore, we introduce a dynamic-region-aware end-to-end training paradigm that structurally couples motion estimation with multi-view visual and semantic learning. This unified approach enables the network to inherently resolve motion conflicts and distill multi-view consistent, temporally stable scene representations from dynamic inputs. Extensive experiments on the challenging D-RE10K benchmark demonstrate that SPAR achieves state-of-the-art performance. Our end-to-end approach achieves exceptional novel view synthesis quality, yielding a PSNR of 22.15 dB and 23.33 dB given only 3 and 4 input views respectively. Despite being trained in a self-supervised manner, our model achieves an mIoU of 88.5% for motion mask prediction. Furthermore, our analysis reveals a strong inter-task synergy between photometric scene reconstruction and semantic understanding, where semantic synthesis learning consistently enhances photometric fidelity in novel view rendering. Code will be available at https://github.com/dmucby/SPAR.",
    "published": "2026-08-29T09:58:24Z",
    "updated": "2026-08-29T09:58:24Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.29177"
  },
  {
    "id": "2608.29175",
    "title": "An Explainable Coherence Score for Detecting Temporal Inconsistencies in Political News",
    "authors": [
      "Marius Nicusor Pantea",
      "Adrian Groza"
    ],
    "abstract": "Temporal inconsistencies, such as mandates attributed outside their real interval, events presented as past before they occurred, or inverted causal sequences, are a form of political disinformation that evades style-based fake news detectors: a well-written article with a single wrong date carries no lexical signal of falsehood. This paper introduces the Temporal Coherence Score (TCS), a continuous, intrinsically interpretable metric that quantifies the temporal coherence of a news article, computed by a four-stage pipeline: extraction of temporal facts, construction of a temporal knowledge graph, hierarchical verification against internal consistency rules and external reference sources, and score aggregation with automatically generated explanations. Verification combines eight internal checkers derived from Allen's interval algebra with a five-level external hierarchy ranging from a locally stored reference knowledge base of 1{,}256 curated political facts to live Wikidata SPARQL queries. On a benchmark of 100 political news articles with injected temporal errors, the system reaches a precision of 0.909 at the selected operating threshold, with a single residual false positive, a profile deliberately tuned for human-in-the-loop fact-checking assistance, where false alarms are costlier than missed detections. Unlike lexical baselines that output only a binary label, every flagged article is accompanied by the inconsistency type, the entities involved, and the reference source that contradicts the claim.",
    "published": "2026-08-29T09:56:19Z",
    "updated": "2026-08-29T09:56:19Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.29175"
  },
  {
    "id": "2608.29172",
    "title": "A Tensor Variational Formulation of Gradient Energy Total Variation",
    "authors": [
      "Freddie Åström",
      "George Baravdish",
      "Michael Felsberg"
    ],
    "abstract": "We present a novel variational approach to a tensor-based total variation formulation which is called gradient energy total variation, GETV. We introduce the gradient energy tensor [6] into the GETV and show that the corresponding Euler-Lagrange (E-L) equation is a tensor-based partial differential equation of total variation type. Furthermore, we give a proof which shows that GETV is a convex functional. This approach, in contrast to the commonly used structure tensor, enables a formal derivation of the corresponding E-L equation. Experimental results suggest that GETV compares favourably to other state of the art variational denoising methods such as extended anisotropic diffusion (EAD)[1] and total variation (TV) [18] for gray-scale and colour images.",
    "published": "2026-08-29T09:46:14Z",
    "updated": "2026-08-29T09:46:14Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.29172"
  },
  {
    "id": "2608.29168",
    "title": "JudgePanel: A Compact Judge with Panel Deliberation via Adaptive Multi-Reward Reinforcement Learning",
    "authors": [
      "Yiyue Qian",
      "Shinan Zhang",
      "Huan Song",
      "Hannah Marlowe"
    ],
    "abstract": "The LLM-as-a-Judge paradigm has emerged as a scalable alternative to human evaluation. However, single-model judges are limited by their inherent model biases, while multi-agent evaluation protocols that mitigate this through diverse deliberation are prohibitively expensive at inference time. To this end, we propose \\textbf{\\modelname}, which equips a compact \\underline{Judge} model with multi-agent \\underline{Panel} deliberation capability. Specifically, we first train on panel deliberation traces from an ensemble of strong evaluators, capturing structured patterns of discussion, disagreement, and resolution. To further improve judgment quality beyond SFT, we introduce \\textit{AdaReward}, an adaptive multi-reward RL algorithm that dynamically rebalances reward component weights as different objectives saturate at different rates during RL training. For practical deployment, we further design a lightweight domain specialization module for rapid adaptation to new evaluation domains with few hundred labeled samples. As a result, (i) \\textit{Novel}: the first framework to equip a single compact judge with multi-agent panel deliberation capability at single-model inference cost; (ii) \\textit{Effective \\& Reliable}: JudgePanel with a 14B backbone outperforms judge-specialized models up to 70B across four evaluation benchmarks, demonstrates strong position consistency, and rapidly specializes to new domains with few hundred samples.",
    "published": "2026-08-29T09:33:49Z",
    "updated": "2026-08-29T09:33:49Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.29168"
  },
  {
    "id": "2608.29167",
    "title": "Feature-Spectral Fragility in Segmentation: Dataset Dependence, Architecture-Specific Localization, and Spectral Correlates",
    "authors": [
      "Subhash Kashyap"
    ],
    "abstract": "Robustness of segmentation models is commonly assessed through input-domain perturbations, while dependence on frequency content within learned feature representations remains less understood. We probe this dependence using targeted post-training low-pass interventions on internal representations of three segmentation architectures, ResNet50-UNet (CNN), VM-UNet (SSM), and Swin-UNETR (Transformer), across CVC-ClinicDB and ISIC2018, with headline evaluations performed on untouched held-out test sets. At cutoff rho=0.25, feature-domain low-pass filtering causes severe degradation on CVC: Dice drops by 100%, 73.2%, and 30.9% for CNN, SSM, and Transformer, respectively, compared with 9.4%, 10.3%, and 0.6% on ISIC. The cross-dataset difference is statistically significant for every architecture. Single-stage interventions further show that sensitivity is localized at architecture-specific depths: the CNN peaks at a mid/late encoder block, whereas the SSM peaks in an early encoder stage on both datasets. Native feature-domain spectral measurements show an inverse association between high-frequency energy and fragility on CVC; the relationship is only partial on ISIC and is therefore treated as a candidate correlate rather than a proven mechanism. Finally, Fourier augmentation improves robustness to input-space low-pass filtering but leaves feature-domain degradation essentially unchanged. These results show that feature-spectral robustness is strongly dataset-dependent, architecture-specific, and distinct from input-domain spectral robustness.",
    "published": "2026-08-29T09:33:45Z",
    "updated": "2026-08-29T09:33:45Z",
    "categories": [
      "cs.CV",
      "eess.IV"
    ],
    "url": "https://arxiv.org/abs/2608.29167"
  },
  {
    "id": "2608.29164",
    "title": "Mapping-Based Image Diffusion",
    "authors": [
      "Freddie Åström",
      "Michael Felsberg",
      "George Baravdish"
    ],
    "abstract": "In this work, we introduce a novel tensor-based functional for targeted image enhancement and denoising. Via explicit regularization, our formulation incorporates application dependent and contextual information using first principles. Few works in literature treat variational models that describe both application dependent information and contextual knowledge of the denoising problem. We prove the existence of a minimizer and present results on tensor symmetry constraints, convexity, and geometric interpretation of the proposed functional. We show that our framework excels in applications where nonlinear functions are present such as in gamma correction and targeted value range filtering. We also study general denoising performance where we show comparable results to dedicated PDE-based state of the art methods.",
    "published": "2026-08-29T09:28:47Z",
    "updated": "2026-08-29T09:28:47Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.29164"
  },
  {
    "id": "2608.29162",
    "title": "Subtraction-Based Tumor Segmentation and Lesion-Centered pCR Prediction for the MAMA-MIA Challenge",
    "authors": [
      "Kai Geissler",
      "Raphael Schäfer"
    ],
    "abstract": "We describe the submission of team FME to the MAMA-MIA Challenge, which evaluated primary tumor segmentation and prediction of pathological complete response (pCR) from pretreatment dynamic contrast-enhanced breast MRI on an external multi-country cohort. For segmentation, we trained a five-fold residual-encoder nnU-Net ensemble using only the first post-contrast minus pre-contrast image, combined with mirroring test-time augmentation and largest-connected-component filtering. For pCR prediction, we ensembled 25 pretrained 3D video classifiers trained on lesion-centred crops from the pre-contrast and first two post-contrast volumes. FME ranked second in both tasks. The segmentation method achieved a combined performance-fairness score of 0.882, with Dice 0.713 and normalized Hausdorff distance 0.099. The pCR method achieved a combined score of 0.664, balanced accuracy of 0.541, and equalized-odds disparity of 0.212. The results indicate that subtraction-based input and ensembling support robust tumor segmentation under cross-site domain shift, whereas pCR prediction from baseline DCE-MRI alone remains limited. For the submission repository, see https://github.com/FraunhoferMEVIS/MAMA-MIA-Challenge-FME",
    "published": "2026-08-29T09:23:45Z",
    "updated": "2026-08-29T09:23:45Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2608.29162"
  },
  {
    "id": "2608.29160",
    "title": "Training-Free Hidden-State Refinement for Flow-Matching Image Generators",
    "authors": [
      "Yuanyi Yan",
      "Xinzhe Rao",
      "Canyu Shen",
      "Yang Chen",
      "Yunlu Chen",
      "Meng Tang",
      "Teng Long",
      "Vincent Tao Hu"
    ],
    "abstract": "We aim to improve frozen flow-matching image generators by adding inference computation inside the denoiser, without changing model weights or the outer sampler. Existing generators usually spend extra test-time computation by increasing the number of sampling steps, which repeatedly evaluates the entire denoiser and couples quality gains to sampler cost. A key challenge is how to use extra computation inside a frozen transformer denoiser: the method must decide which tokens, layers, and sampling times receive repeated updates while preserving the original generation pipeline. We introduce a training-free looping framework that repeatedly applies selected transformer layers inside each denoising call. Dense and Sparse Token Loop vary the token scope; Sampling-Progress Gating and the loop layer range specify when and where looping is active; loop count and strength control the repeated updates; and Loop Guidance combines ordinary and looped vector-field predictions. Across two Scale-RAE model scales, loop variants improve primary and auxiliary quality metrics with competitive quality--efficiency trade-offs. Loop Guidance further improves both primary metrics across all three tested models; on Scale-RAE DiT2.4B, it raises GenEval from 0.4471 to 0.5691 and DPG-Bench from 0.7656 to 0.8053. Code will be released.",
    "published": "2026-08-29T09:17:02Z",
    "updated": "2026-08-29T09:17:02Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.29160"
  },
  {
    "id": "2608.29153",
    "title": "SGRNet: Spatially Guided Radiology Network for Structured Radiological Reporting of Head and Neck Cancer",
    "authors": [
      "Ayush Gupta",
      "Vinkle Srivastav",
      "Prateek Upadhya",
      "Amit Gupta",
      "Krithika Rangarajan",
      "Nicolas Padoy"
    ],
    "abstract": "Automated radiological report generation can alleviate clinical workloads and eliminate observer variability. However, standard free-text generation models pose hallucination risks in dense regions and fail under data scarcity. We address these challenges in Head and Neck Cancer (HNC) from contrast-enhanced CT (CECT) imaging. To enforce factual safety, we reformulate report generation as an anatomically grounded, multi-label, structured reporting task, predicting localized tumor involvement across a hierarchical clinical schema. To bridge the visual gap from missing metabolic imaging (e.g., PET), we introduce SGRNet (Spatially Guided Radiology Network), incorporating two low-cost spatial priors: automated organ segmentations and weakly supervised tumor localization maps modeled via 3D Gaussian heatmaps. These priors are dynamically integrated via spatial feature modulation to guide the network toward subtle tumor-induced structural alterations. Evaluated on a multi-centric dataset of 184 paired HNC CECT volumes and reports, on five clinically salient, densely packed anatomical subsites, SGRNet achieves a mean Average Precision (mAP) of 0.60, an 8.8 percentage-point absolute improvement over strong volume-only 3D baselines.",
    "published": "2026-08-29T09:01:52Z",
    "updated": "2026-08-29T09:01:52Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.29153"
  },
  {
    "id": "2608.29145",
    "title": "STARLINC: Satellite Trail Artifact Removal using Inter-Frame Correlation",
    "authors": [
      "Shingeon Kim",
      "Hyeyoon Lee",
      "Dain Kwon",
      "Kanghyun Choi",
      "Sunjong Park",
      "Mi-Ryang Kim",
      "Jeong-Eun Lee",
      "Jinho Lee"
    ],
    "abstract": "The rapid expansion of low Earth orbit satellites such as Starlink is increasingly contaminating astronomical surveys. In practice, contaminated images are often identified through inspection. However, modern surveys generate terabytes of data each night, making manual screening infeasible and necessitating reliable automated methods for satellite trail removal. Unfortunately, existing general-domain line detection methods fail to generalize to astronomical images due to domain mismatch, which are mostly grayscale with sparse bright stars and have a low signal-to-noise ratio. Moreover, training new models from scratch is impractical due to the lack of large-scale annotated astronomical datasets. To address these challenges, we introduce STARLINC, the first ML-based framework for satellite trail removal without requiring tedious pixel-level annotation of astronomical images. STARLINC combines synthetic satellite trail generation for training, inter-frame differential maps from temporally adjacent exposures to highlight transient trails, and heatmaps to provide additional localization cues for pixel-level segmentation. Extensive experiments on real-world data demonstrate substantial improvements over baselines, establishing STARLINC as a scalable solution for next-generation astronomical surveys. Code is available at https://github.com/starioKim/STARLINC.",
    "published": "2026-08-29T08:42:20Z",
    "updated": "2026-08-29T08:42:20Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.29145"
  },
  {
    "id": "2608.29139",
    "title": "More Perspectives, Stronger Signals: Multi-Perspective Enhancement and Progressive Fusion for Multimodal Entity Representation Learning",
    "authors": [
      "Chenyi Xiong",
      "Yan Zhang",
      "Jing Hu",
      "Ziyue Qin",
      "Kui Xiao",
      "Xiaopan Lyu",
      "Xiaoju Hou",
      "Zhifei Li"
    ],
    "abstract": "Learning effective multimodal entity representations is fundamental for reasoning tasks such as multimodal knowledge graph completion (MMKGC). However, existing methods often suffer from semantic over-smoothing within modalities and ineffective noise filtration across modalities, particularly under sparse or ambiguous conditions. To overcome these limitations, we propose PrismF, a unified framework that synergizes multi-perspective enhancement with progressive fusion to extract stronger signals from diverse inputs. PrismF enhances fine-grained intra-modal semantics through a multi-perspective mechanism that decomposes each modality into complementary views and constrains them with a decoupling loss to reduce representation collapse. Furthermore, it improves cross-modal integration through a progressive fusion strategy that dynamically calibrates inter-modal interactions, enabling the model to emphasize informative signals while suppressing noisy or unreliable ones. Extensive experiments on three public benchmarks show that PrismF achieves the strongest overall performance, including relative improvements of 4.04% in MRR and 11.17% in Hits@1 on KVC16K. Our code can be found at https://github.com/HubuKG/PrismF.",
    "published": "2026-08-29T08:29:43Z",
    "updated": "2026-08-29T08:29:43Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.29139"
  },
  {
    "id": "2608.28468",
    "title": "Real-time virtual circuits for plasma shape control via neural network emulators: experimental demonstration on MAST Upgrade",
    "authors": [
      "Nicola C. Amorisco",
      "Kamran Pentland",
      "Adriano Agnello",
      "George K. Holt",
      "Alasdair Ross",
      "Matthew J. Marshall",
      "Edward Jones",
      "Graham J. McArdle",
      "Charles Vincent",
      "Timothy Nunn",
      "Martin Kochan",
      "Pedro Cavestany",
      "Aran Garrod",
      "Stanislas Pamela",
      "James Buchanan"
    ],
    "abstract": "Conventional plasma shape control in tokamaks relies on virtual circuits (VCs) that are computed offline from linearisations around a small, tailored number of reference equilibria, and deployed as expertly prepared schedules during the discharge. Here, we report on the first experimental deployment of real-time VCs. We replace pre-set look up tables with VCs updated in real time using surrogates of the plasma response. Both the existing control architecture and the interpretability of VC-based control are retained. Previous work showed that neural network emulators can produce accurate VCs, and validated their performance in closed-loop shape control simulations. Here, we report their first experimental validation on MAST Upgrade (MAST-U). Dedicated experiments spanning different scenarios, including prescribed shape perturbations, feedback-driven divertor-leg motion, and strongly evolving plasma configurations, show that real-time VCs can realise plasma shape control tasks within the MAST-U plasma control system. These results establish the experimental feasibility of real-time linearisations as a practical extension of conventional plasma shape control in tokamaks. The present implementation demonstrates a central step towards a simpler control workflow, in which manually constructed, phased VC schedules are replaced by VCs generated automatically online from a trained surrogate model, without scenario-specific retraining.",
    "published": "2026-08-28T15:55:27Z",
    "updated": "2026-08-28T15:55:27Z",
    "categories": [
      "physics.plasm-ph",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.28468"
  },
  {
    "id": "2608.28461",
    "title": "Anatomy-Aware Promptable Segmentation with Online Interactive Training for AUTOPET V",
    "authors": [
      "Pablo Lozano-Jimenez",
      "Sergio Romero-Tapiador",
      "Ruben Tolosana"
    ],
    "abstract": "We present an anatomy-aware, promptable model for whole-body lesion segmentation in FDG and PSMA PET/CT, developed for the AUTOPET V challenge. The proposed method is built as family of nnU-Net-based models and trained in two stages: i) a pre-training stage that produces a strong initial segmentation, and ii) an online interactive stage that learns to exploit scribble prompts, refining the prediction over successive interactions. Anatomical context is incorporated through organ supervision using a single shared head that predicts lesions and organs from the same features, which reduces false positives arising from physiological uptake. Also as the tracer (i.e., FDG/PSMA) is not provided at inference, we add a tracer classifier based on image processing and a random forest over coronal MIP features, routing each study to a combined FDG+PSMA model or to a PSMA-specific model. Across four-fold cross-validation the organ-supervised model achieves the best and most stable performance, the interactive stage improves the Dice score monotonically with each prompt, and PSMA-specific training yields the strongest tracer-wise results.",
    "published": "2026-08-28T15:49:58Z",
    "updated": "2026-08-28T15:49:58Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.28461"
  },
  {
    "id": "2608.28460",
    "title": "LayerRecall: A State-Conditioned Memory Router for Long-Horizon Consistency in Video Generation",
    "authors": [
      "Yixuan Ding",
      "Jiahao Kong",
      "Wei Huang",
      "Ruijie Quan",
      "Yi Yang"
    ],
    "abstract": "Autoregressive video diffusion enables scalable long-video generation by producing chunks from a bounded recent context. While recency-based caching preserves local continuity, it evicts historical cues needed when subjects, objects, scenes, or attributes reappear. Existing memory mechanisms expose models to nonlocal history, but access alone does not ensure effective use. Our analysis reveals that video DiT layers exhibit distinct preferences for current, recent, and distant context, suggesting that long-range memory requires deciding both what to retrieve and where to use it. We introduce LayerRecall, a current-conditioned, layer-selective memory router that retrieves relevant historical K/V states and injects them only into backbone-specific memory-sensitive layers while preserving local attention elsewhere. To reduce reliance on scarce high-quality long-horizon videos and explicit memory-allocation labels, we further propose Cross-Horizon Prediction Matching (CHPM), which uses a privileged long-context reference to supervise the bounded-memory router in prediction space. Across 100 multi-shot evaluation prompts, LayerRecall achieves the best overall results on MemoBench and MovieBench while matching its backbone on VBench-Long, demonstrating stronger long-range recovery without sacrificing local continuity. Qualitative analyses further reveal memory-guided self-correction, whereby initially mismatched local attributes return to their historical appearance without resetting ongoing motion or scene structure. Additional analyses show cross-backbone portability and negligible inference overhead.",
    "published": "2026-08-28T15:49:13Z",
    "updated": "2026-08-28T15:49:13Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.28460"
  },
  {
    "id": "2608.28455",
    "title": "ARC-CT: Anatomy-Routed Contrastive Vision-Language Learning for 3D Chest CT",
    "authors": [
      "Huseyin Umut Isik",
      "Mehmet Alp Ozaydin",
      "Sila Kurugol",
      "Şeyda Ertekin"
    ],
    "abstract": "Contrastive vision-language learning uses paired chest CT volumes and radiology reports to learn abnormality classifiers without manually annotated labels. However, two characteristics of chest CT challenge conventional global contrastive learning. First, many critical abnormalities are small or anatomically localized, and pooling an en- tire volume into a single embedding may dilute their visual evidence. Second, the standard contrastive objective treats every other scan in a batch as a negative. Because many chest CTs share abnormalities, this objective incorrectly pushes co-positive pairs apart. We propose Anatomy-Routed Contrastive Learning for 3D Chest CT (ARC-CT), a region-aware framework that addresses these limitations using only la- bels extracted from reports by an LLM, with no manual annotations or bounding boxes. ARC-CT combines three components: (1) an Anato- myQFormer localizing evidence via queries constrained by automatically generated organ masks; (2) a label-Jaccard soft InfoNCE objective in- tegrating the standard one-hot target with the label-set overlap of each pair, which reduces false-negative penalties between studies that share clinical findings; and (3) an organ-level alignment loss connecting mask- pooled visual features to organ-specific report text extracted offline with a large language model. ARC-CT achieves a 0.86 mask-free macro AUC across 18 abnormalities using a compact 3D ResNet-18 backbone. Over- all, ARC-CT outperforms both comparable efficient baselines and sev- eral larger transformer models. Our code and weights are available at https://github.com/arc-ct/arc-ct.",
    "published": "2026-08-28T15:45:33Z",
    "updated": "2026-08-28T15:45:33Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.28455"
  },
  {
    "id": "2608.28453",
    "title": "Prompt-Guided Interactive Segmentation of Interstitial Lung Disease in Thoracic CT",
    "authors": [
      "Vasilis Dedousis",
      "Lubnaa Abdur Rahman",
      "Lorenzo Brigatο",
      "Ethan Dack",
      "Andreas Christe",
      "Christoph Frank",
      "Manuela Funke-Chambour",
      "Justus Roos",
      "Adrian Huber",
      "Lukas Ebner",
      "Stavroula Mougiakakou"
    ],
    "abstract": "Accurate segmentation of interstitial lung disease (ILD) patterns is essential for quantitative disease assessment and longitudinal monitoring. However, existing approaches remain limited by relying on dense annotations and producing static predictions that cannot be refined, motivating interactive approaches. While promptable models show promise in interactive segmentation, their adaptation to ILDs remains largely unexplored. To address this gap, we investigate prompt-guided foundation models for ILD refinement and present, to the best of our knowledge, the first adaptation of MedSAM2 for interactive 3D ILD segmentation on thoracic CT. We investigate three fine-tuning strategies and multiple clinically motivated prompts: bounding-boxes (BBox), point, lasso, and scribble. On a dataset spanning seven ILD patterns and healthy lung tissue, full model fine-tuning performed best, improving the average Dice score by 4.7 percentage points over MedSAM2.While BBox prompts achieve the strongest performance, non-native MedSAM2 interactions such as lasso and scribble prompts also prove effective. Finally, we present and evaluate a proof-of-concept end-to-end workflow in which MedSAM2 is initialized from an automatic segmentation prior and subsequently refined using radiologist prompts. Model weights and plug-ins made available at: https://github.com/AIHNlab/ILD-SemiSegTool.",
    "published": "2026-08-28T15:43:25Z",
    "updated": "2026-08-28T15:43:25Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.28453"
  },
  {
    "id": "2608.28447",
    "title": "Learning to Use Tools: Reinforcement Learning for Tool-Integrated Mathematical Reasoning",
    "authors": [
      "Minghui Xu",
      "Zi Wang"
    ],
    "abstract": "Current large language models (LLMs) increasingly benefit from external tool integration, especially for tasks requiring reliable computation and verification. Motivated by this, we study calculator tool calling for improving mathematical reasoning on the Countdown task. We first analyze reasoning failures and find that calculation errors account for a substantial portion of incorrect responses. We then construct supervised fine-tuning datasets to teach the model useful tool-use patterns and how to interpret returned outputs. Building on this tool-formatted policy, we apply several on-policy reinforcement learning methods, including RLOO, RLOO++, GRPO, and DAPO, using automatically verifiable final-answer rewards. To enable a more reliable evaluation, we construct a fresh 1,024-problem held-out Countdown benchmark with no exact overlap with the training data. Our results show that calculator tool integration consistently improves both SFT and RL baselines, yielding roughly 10 percentage-point gains across pass@k. Among the RL methods, Tool-DAPO achieves the strongest performance, improving pass@1 from 35.8% for Tool-SFT to 66.0%. Further analysis shows that RL encourages more effective tool use even when only final-answer rewards are provided. These findings suggest that tool integration reduces arithmetic and verification errors, while RL increases the probability of correct reasoning traces.",
    "published": "2026-08-28T15:35:03Z",
    "updated": "2026-08-28T15:35:03Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.28447"
  },
  {
    "id": "2608.28439",
    "title": "Fidelity Is Not Enough: Dispatch-Level Instrumentation for Agentic Datasheet Extraction",
    "authors": [
      "Qing Ye",
      "Meng-Hsuan Lin"
    ],
    "abstract": "One model passed our fidelity check without ever opening the datasheet. We found it while qualifying models for an internal extraction service: a structured-output constraint had silently disabled tool use, and the model answered anyway, with fabricated source text. Only the per-tool trace exposed it. Fidelity -- whether an extracted value matches the source -- is the standard measure for agentic document extraction, and it scores that run a success. We therefore log every tool call in an agentic benchmark of 25 hand-curated claims over three components, with 12 more on a fourth, 37 in all. From that dispatch record we build two instruments: a rule-based failure-attribution classifier, and a silent-failure detector whose two rules check only which tools were called, never the extracted value. The detector raises no flag on 207 clean fidelity-passing extractions across three model families, and recovers all 50 planted faults that withhold exactly the tools its rules check. The two results are not symmetric: the first bounds the false-positive rate, the second is recall by construction, and detection power against runs that call their tools and still answer wrongly is unmeasured. A second, independent oracle, a causal chamber that tests whether the datasheet's claims hold under physical measurement, is intentionally partial: it confirms only what the apparatus can exercise, a verifiable envelope of 2 of those 37 claims, and we give a taxonomy of why the rest are not physically gradable. Under a controlled perturbation, fidelity passes throughout while the chamber verdict flips exactly at the measurement uncertainty. Across three deployed model stacks (one destabilised by its serving stack, not by any capability gap) the tool layer buys portability and observability rather than accuracy, and earns its premium only once a document outgrows the context window.",
    "published": "2026-08-28T15:25:12Z",
    "updated": "2026-08-28T15:25:12Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.28439"
  },
  {
    "id": "2608.28433",
    "title": "Prove2Me: An Open Collaborative Platform for Scaling Math Formalization",
    "authors": [
      "Shuze Chen",
      "Kunal Marwaha",
      "Xiaoyang Lu",
      "Henry Yuen",
      "Tianyi Peng"
    ],
    "abstract": "Proof assistants such as Lean 4 promise the paradigm of formally verified mathematics, but large-scale formalization projects have faced major barriers to entry, including the need for expertise in formal verification (as well as the underlying mathematics) and the significant time required for writing formal proofs. AI coding agents have dramatically reduced these barriers; human users can now use natural language to prompt agents to write complex proofs in Lean. This opens up the intriguing possibility of internet-scale mathematical collaboration involving both humans and AI agents, where correctness is machine-checked. To realize this possibility, we introduce Prove2Me (https://prove2.me), an open collaborative platform for formalizing mathematics. Users launch formalization \"missions\", to which AI agents contribute formal proofs toward completion. We designed mechanisms and a specialized harness in Prove2Me that enable large-scale collaboration so that agents can build on one another's work and freely reuse existing results. In doing so, Prove2Me aims to turn math formalization into a scalable, crowd-sourced effort open to anyone with an agent.",
    "published": "2026-08-28T15:16:25Z",
    "updated": "2026-08-28T15:16:25Z",
    "categories": [
      "cs.AI",
      "cs.LO",
      "cs.MA"
    ],
    "url": "https://arxiv.org/abs/2608.28433"
  },
  {
    "id": "2608.28432",
    "title": "Are These Modules Worth Their Cost? A Paradigm-Level Accuracy-Cost Analysis of In-context Learning Text-to-SQL",
    "authors": [
      "Jiayan Lin",
      "Yujia Liu",
      "Zijin Hong",
      "Zheng Yuan",
      "Yilin Xiao",
      "Hao Chen",
      "Qinggang Zhang",
      "Xiao Huang",
      "Feiran Huang"
    ],
    "abstract": "Recent advances in in-context learning (ICL) text-to-SQL have substantially improved execution accuracy on public benchmarks by assembling increasingly elaborate pipelines around the base generator, yet existing studies typically report aggregate end-to-end accuracy, without quantifying the marginal accuracy-cost contribution of individual design choices. Consequently, providing a unified, paradigm-level cost-accuracy quantification remains a critical challenge for understanding and configuring modern text-to-SQL. To address this, we instantiate 17 paradigm-level configurations across five recurring modules of the ICL text-to-SQL pipeline under a single controlled implementation, and attribute each paradigm's marginal contribution and incurred cost across all four backbones spanning diverse capability levels and reasoning styles. Our analysis reveals that execution-feedback refinement is the only paradigm whose benefit holds universally at consistently low cost, while most other modules help only under backbone-dependent conditions. Token accounting shows that input demand is more closely tied to pipeline structure, whereas output demand is more sensitive to backbone generation behavior. Cross-module analysis further shows that stacking improves accuracy on most backbones, although how the gains compose varies with backbone capability. We also find that a fixed budget is often better spent engineering a more elaborate pipeline over a mid-tier backbone than upgrading to a frontier model with a lean pipeline. These findings distill into an actionable, cost-aware tiered guideline that transfers to five additional backbones without per-paradigm search.",
    "published": "2026-08-28T15:13:55Z",
    "updated": "2026-08-28T15:13:55Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.DB"
    ],
    "url": "https://arxiv.org/abs/2608.28432"
  },
  {
    "id": "2608.28429",
    "title": "Lossy Event Compression: From Event Stream Distortion to Task Performance",
    "authors": [
      "Zahra Rezaee",
      "Catarina Brites",
      "João Ascenso"
    ],
    "abstract": "Event cameras generate asynchronous, sparse data streams with microsecond temporal resolution, but in moderate-to-high motion scenes they can produce as many as hundreds of millions of events per second, creating significant bandwidth and storage challenges. Lossy compression is therefore essential for practical deployment, yet existing event stream distortion metrics fail to reliably predict compression-induced degradation at the task level, forcing codec optimization to rely on expensive task-specific evaluations. To address this gap, this paper introduces two fundamentally different event compression pipelines: i) an aggregation-based pipeline that converts the event stream into polarity-based histogram frames for compression with the conventional image codec JPEG 2000, and ii) a frame-free point cloud-based pipeline that codes events natively as 3D points using the octree-based codec G-PCC. Both pipelines are then assessed within a unified task-driven evaluation framework that relates event stream distortion to downstream application performance across four representative tasks: i) video reconstruction, ii) object detection, iii) optical flow estimation, and a delay-sensitive task iv) asynchronous feature tracking under a reference-relative protocol. Building on this framework, five classification-based distortion metrics are applied to event compression for the first time, to the best of the authors' knowledge, and benchmarked against existing event stream metrics. Experimental results demonstrate that the proposed metrics reliably predict compression-induced task degradation across different coding frameworks. This demonstrates that event stream distortion assessment can be an efficient alternative to repeated task-specific evaluation, providing direct guidance for the development and optimization of future event data coding solutions.",
    "published": "2026-08-28T15:12:56Z",
    "updated": "2026-08-28T15:12:56Z",
    "categories": [
      "cs.CV",
      "eess.IV"
    ],
    "url": "https://arxiv.org/abs/2608.28429"
  },
  {
    "id": "2608.27923",
    "title": "PCBnet: A Dataset and Automatic Construction of SPICE Netlists from Schematic Images",
    "authors": [
      "Zhen Huang",
      "Yuhao Gao",
      "Yuzhi Liu",
      "Daian Cheng",
      "Chengyuan Shao",
      "Yucheng Chen",
      "Yongjian Jia",
      "Futing Zhang",
      "Yichen Shi",
      "Wenhao Wang",
      "Zuyan He",
      "Yangbo Wei",
      "Zhanfei Chen",
      "Jinlong Yan",
      "Yu Zhang",
      "Haoying Wu",
      "Ting-Jung Lin",
      "Lei He"
    ],
    "abstract": "Printed circuit boards (PCBs) are fundamental to modern electronic systems, yet AI-driven PCB design automation remains constrained by the lack of large-scale paired schematic-netlist datasets. PCB schematics are particularly challenging due to diverse component types, complex wiring topologies, and noisy textual annotations. To address this gap, we present PCBnet, a large-scale PCB schematic dataset comprising over 300 real-world designs with annotated pins and paired SPICE netlists. It contains more than 50,000 component instances, 150,000 wires, 100,000 text regions, and 400,000 characters. We further develop an automated schematic-to-netlist pipeline that combines visual recognition, topology construction, and domain-knowledge-guided multi-agent correction. The proposed method achieves 94.54% component detection mAP, 98.57% text recognition accuracy, and 84.47% end-to-end connectivity accuracy. PCBnet provides a benchmark and data foundation for future AI-driven PCB design automation.",
    "published": "2026-08-28T04:58:03Z",
    "updated": "2026-08-28T04:58:03Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.27923"
  },
  {
    "id": "2608.27922",
    "title": "DensityKV: Density-Guided KV Cache Compression for Long Video Generation",
    "authors": [
      "Wenqu Zhao",
      "Xuemin Chi",
      "Xin Zhang",
      "Guoqing Ma",
      "Baorun Li",
      "Jianjie Fang",
      "Peizhi Tang",
      "Chen Gao",
      "Wei Wu"
    ],
    "abstract": "Autoregressive video diffusion models enable streaming generation through sliding-window attention, but each generated block is conditioned on previously generated content, causing appearance and motion errors to propagate recursively over time. Historical key-value (KV) memory preserves earlier subject and scene states and helps maintain long-horizon consistency. However, retaining every generated state creates a historical archive that grows continuously with the rollout, while recurrent states repeatedly add redundant coverage. To address this problem, we propose DensityKV, a training-free historical KV bank management strategy. DensityKV maintains a separate token-level KV bank for each attention head and measures local redundancy among the post-RoPE keys that directly parameterize attention routing using Soft-Riesz density. By constraining neighborhood-density growth after states enter the bank, DensityKV limits repeated historical accumulation while preserving coherent states from each completed generation block. Experiments across three autoregressive video generation backbones and multiple generation lengths show that, at the same upper bound on historical KV capacity, DensityKV improves long-horizon consistency and generation stability while keeping persistent historical storage bounded independently of rollout length.",
    "published": "2026-08-28T04:57:57Z",
    "updated": "2026-08-28T04:57:57Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.27922"
  },
  {
    "id": "2608.27240",
    "title": "UniFLM: United Segmentation and Measurement on Fetal Limb Ultrasonic Image",
    "authors": [
      "Zeen Zhou",
      "Qiuhua Chen",
      "Xiaojun Cao",
      "Changmao Chen",
      "Chao Sun",
      "Bo Du"
    ],
    "abstract": "Prenatal ultrasound examination is crucial for assessing fetal limb development and detecting congenital anomalies. However, existing artificial intelligence models often overlook fetal lethal skeletal dysplasias due to the lack of high-quality annotated data and a unified framework for multiple long bones. Moreover, generic segmentation models struggle with the inherent noise and semantic gaps in ultrasound images. To address these challenges, we construct the Fetal Limb Bones (FLB) dataset, comprising high-quality annotations for the humerus, femur, tibia-fibula, and radius-ulna. Furthermore, we propose UniFLM, a unified framework for automatic cross-plane segmentation and measurement. UniFLM incorporates a Semantic-Aware Skip Connection module to bridge the semantic gap between encoder and decoder features, and a Positive Sampling strategy to adaptively filter noise and extract essential semantic information. Finally, a Point Regression Mapping module is introduced to learn clinician annotation patterns for precise bone length measurement. Extensive experiments conducted on the FLB dataset demonstrate that the proposed UniFLM achieves superior accuracy and enhanced generalization capabilities in fetal long bone assessment compared to current state-of-the-art models.",
    "published": "2026-08-27T15:22:07Z",
    "updated": "2026-08-27T15:22:07Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.27240"
  },
  {
    "id": "2608.27239",
    "title": "A Point-of-Prescription Safety-Check System for Adverse Drug Reactions in Rural Bangladeshi Hospitals: A Feasibility Study",
    "authors": [
      "Shahir Abdullah"
    ],
    "abstract": "Adverse drug reactions (ADRs) are a major, largely preventable source of patient harm. In high-income settings, electronic health records store a patient's allergy history and warn prescribers when a contraindicated drug is ordered; in rural Bangladeshi public hospitals no such record exists for outgoing patients, a single physician may see on the order of one patient per minute, and a patient's history of severe reactions does not survive between visits. This paper proposes and outlines the evaluation of a lightweight, smartphone-based safety-check system for this setting. At registration a soft identifier (a phone number) is recorded; after the physician writes a prescription, its image is captured, the brand names are resolved to active ingredients using national drug references, and the ingredients are matched against the patient's recorded severe reaction history. The system is retrieval-based rather than predictive, and is silent by default, raising a flag only for high-risk matches a design grounded in the alert-fatigue literature. We frame the work as a feasibility study: we describe the proposed framework and an evaluation plan measuring workflow fit under high volume, usability, identity-resolution reliability, and retrospective detection of known reaction cases. We explicitly do not claim a clinical-outcome effect, which the low base rate of severe events places beyond a single-site feasibility study.",
    "published": "2026-08-27T15:21:51Z",
    "updated": "2026-08-27T15:21:51Z",
    "categories": [
      "cs.HC",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2608.27239"
  },
  {
    "id": "2608.27226",
    "title": "DINOcular: Self-Supervised Visuospatial Representations",
    "authors": [
      "Farkhat Almukhamedov",
      "Sami Azirar",
      "Hermann Blum"
    ],
    "abstract": "We introduce a self-supervised framework for learning joint visuospatial representations from RGB-D observations. While modern vision foundation models are trained almost exclusively on RGB images, many embodied systems have access to explicit depth sensing, which provides geometric information that monocular inputs cannot recover. Our method integrates depth-derived geometric priors with a visual backbone through inter-patch and intra-patch fusion, enabling the model to encode both appearance and spatial structure efficiently. The resulting representation shows promising improvements on 3D awareness while preserving semantic transfer: it outperforms prior methods of comparable scale on multiple 3D geometry benchmarks, and remains competitive when probed for standard RGB-D semantic segmentation tasks.",
    "published": "2026-08-27T15:09:32Z",
    "updated": "2026-08-27T15:09:32Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.27226"
  },
  {
    "id": "2608.27225",
    "title": "STEP: State-Aware Task Estimation and Planning with Multi-Modal LLMs for Human-Robot Collaboration",
    "authors": [
      "Maitrey Gramopadhye",
      "Prakash Baskaran",
      "Xiao Liu",
      "Songpo Li",
      "Soshi Iba"
    ],
    "abstract": "Effective human-robot collaboration in industrial settings requires robots to understand human intentions and assist with task planning, reducing workload. Recent works have explored the use of Multi-modal Large Language Models (MM-LLMs) for task planning in such data-scarce scenarios, leveraging in-context learning to interpret user actions and generate long-horizon action plans in natural language. However, MM-LLMs inherently lack an understanding of system states and do not track state transitions, often leading to hallucinated actions that deviate from the intended goal. Additionally, generating action plans in natural language tends to limit the generated plans to a high level, introducing ambiguity in action execution. To address these limitations, we propose the State-aware Task Estimator and Planner (STEP), which prompts a MM-LLM to explicitly estimate the state of the system and predict the state transitions resulting from executed actions. By forecasting future states alongside actions, STEP ensures task-convergent planning while also providing additional assistance parameters necessary for executing the predicted actions. We evaluate STEP in a simulated environment using a robot assembly task. Our approach outperforms the state-of-the-art by 32.8% in action executability and 14.8% in final-state error.",
    "published": "2026-08-27T15:08:36Z",
    "updated": "2026-08-27T15:08:36Z",
    "categories": [
      "cs.RO",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.27225"
  },
  {
    "id": "2608.27529",
    "title": "Revisiting Local Context for Long-Horizon Streaming 3D Reconstruction",
    "authors": [
      "Jiarong Han",
      "Jincheng Xiong",
      "Yuzhou Liu",
      "Linzhe Shi",
      "Changjie Wu",
      "Ning Guo",
      "Mu Xu",
      "Hang Zhang",
      "Ming Qian"
    ],
    "abstract": "Streaming 3D reconstruction from extremely long videos requires estimating camera motion and scene geometry online under bounded memory and computation. Early streaming models achieve causal, bounded-cost inference using finite context buffers or compact recurrent states, yet their estimates often deteriorate as sequences grow. Recent methods improve long-horizon stability by coupling short-range context with persistent or multi-level long-range memory. We pursue a different route: we keep the learned temporal state strictly local and formulate predictions whose targets remain independent of sequence length. We present ABot-Recon, a simple streaming model that caches KV features from only the preceding 11 frames. It predicts a point map in the current camera coordinate system together with an adjacent-frame relative pose. These predictions remain equivariant under changes of reference frame, and global poses and geometry are recovered through sequential composition. To reduce accumulated drift, a lightweight temporal refiner improves relative rotations using recent visual and motion context, while a composition-aware pose loss supervises multi-step pose composition. Extensive evaluations on challenging long-sequence benchmarks demonstrate the superior long-horizon performance of our local-context approach. On Oxford Spires, ABot-Recon achieves an ATE of 4.35 m and an RPE-R of $0.12^\\circ$, reducing both errors by approximately 40\\% relative to the best prior results.",
    "published": "2026-08-27T15:07:38Z",
    "updated": "2026-08-27T15:07:38Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.27529"
  },
  {
    "id": "2608.27214",
    "title": "CODE: Cross-Modal Calibration and Dynamic Suppression for Open World Object Detection",
    "authors": [
      "Hao Xu",
      "Zhaoning Shi",
      "Hehe Jin",
      "Bo Ma"
    ],
    "abstract": "Open World Object Detection (OWOD) built on multimodal foundation models often suffers from semantic ambiguity caused by unidirectional text-to-vision matching, while rigid outlier penalties may over-suppress unknown objects near known-class decision boundaries. We propose CODE (Cross-Modal Calibration and Dynamic Suppression), a unified inference-time framework with three complementary components. Cross-Modal Joint Confidence Calibration injects global visual prototypes to calibrate text-driven known-class predictions. Uncertainty-Guided Universal Objectness Enhancement measures classification hesitation from local visual responses to strengthen potential unknown objects. Dynamic Outlier Suppression via Confidence Margin replaces rigid suppression with a margin-aware adjustment that preserves ambiguous out-of-distribution instances. Experiments on the Real-World Detection benchmark demonstrate that, with the OWL-ViT L/14 backbone, CODE achieves 21.7 U-mAP and 40.8 K-mAP in Task 1, surpassing the previous state of the art by 2.6 and 2.3 points, respectively.",
    "published": "2026-08-27T14:56:19Z",
    "updated": "2026-08-27T14:56:19Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.27214"
  },
  {
    "id": "2608.27206",
    "title": "PACE: A Unified Condense-and-Extract Paradigm for Fast VLM Inference",
    "authors": [
      "Junjie Liu",
      "Shengyuan Ye",
      "Xu Chen"
    ],
    "abstract": "Vision-Language Models (VLMs) demonstrate exceptional visual reasoning capabilities, yet their inference costs escalate rapidly with the proliferation of visual tokens. Existing visual token pruning methods exhibit two fundamental limitations. First, most approaches operate exclusively post-vision encoder, leaving the substantial latency of the visual encoding phase unoptimized. Second, under strict token budgets, these methods often fail to jointly preserve holistic visual contexts and fine-grained details, leading to performance degradation. To address these bottlenecks, we propose PACE (Pixel-Adaptive Condense and Extract), a training-free inference framework that accelerates both the vision encoder and the Large Language Model (LLM) via a unified Condense-and-Extract paradigm. During the Condense stage, an Adaptive Pixel Compressor (APC) evaluates visual information density prior to encoding, adaptively downsampling redundant inputs, curtailing encoder computation while preserving global context and essential visual cues. In the Extract stage, a Dynamic Dual-Attention Extractor (DDAE) selectively retains visual tokens via a fusion of internal visual signals from the encoder and semantic signals from the LLM, safeguarding task-critical details. By integrating PACE into Qwen2.5-VL-7B, the model retains 93.8% of its original performance while utilizing only 10% of the visual tokens, yielding a 3.1x speedup in time to first token (TTFT). Our code is available at https://github.com/jjL357/PACE.",
    "published": "2026-08-27T14:52:09Z",
    "updated": "2026-08-27T14:52:09Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.27206"
  },
  {
    "id": "2608.27527",
    "title": "FVeinSyn: Synthetic Finger Vein Image Generator",
    "authors": [
      "Yifan Wang",
      "Jie Gui",
      "Adams Wai Kin Kong",
      "Baosheng Yu",
      "Changsheng Chen",
      "Qi Li",
      "Zhenan Sun",
      "James Tin-Yau Kwok",
      "Alex Kot"
    ],
    "abstract": "A major challenge in finger vein recognition is the lack of large-scale public datasets. Existing datasets contain few identities and limited samples per finger, restricting the advancement of deep learning-based methods. To address this, we propose FVeinSyn, a large-scale controllable synthetic data generation framework for finger vein. It explicitly decouples synthesis of vascular topology and imaging appearance to mitigate the limitations caused by insufficient training samples, such as inadequate identity diversity and restricted realism. Specifically: first, a finger vein identity generator models vascular topology under physiological and geometric constraints using stochastic L-systems, producing anatomically valid and identity-distinctive vascular patterns. Then, a cascaded region-aware GAN renders the topological maps into realistic near-infrared images. Finally, an intra-class diversity generator introduces geometric and optical perturbations to simulate realistic intra-class variations. Using FVeinSyn, we generated 500,000 images (10,000 vein identities, 50 samples per identity) and conducted extensive evaluations. Results show that FVeinSyn holds significant advantages in realism, identity diversity, vascular pattern consistency, and intra-class diversity. Models trained with FVeinSyn outperform real-data-only baselines a cross eight public datasets, achieving an average accuracy improvement of 27.43\\%. The code is available at: https://github.com/EvanWang98/Synthetic-Finger-Vein-Generator.",
    "published": "2026-08-27T14:46:43Z",
    "updated": "2026-08-27T14:46:43Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.27527"
  },
  {
    "id": "2608.27199",
    "title": "Vision-centric generative AI models: A software-hardware perspective",
    "authors": [
      "Eleni Tselepi",
      "Cristian Sestito",
      "Shady Agwa",
      "Themis Prodromakis"
    ],
    "abstract": "Vision generative artificial intelligence (AI) has emerged as one of the most rapidly advancing areas of deep learning. The explosion of multimodal models has made them widely associated with text-to-image applications running on large datacentres. However, vision generative models are equally needed in applications that operate under strict hardware constraints at the edge, including autonomous vehicles, agricultural sensors, and mobile devices. In this Perspective, we argue that progress in vision generative AI has been driven by output quality, with hardware evolving reactively to accommodate growing model demands. We quantify the parameter cost and energy efficiency of these models across a range of accelerator platforms, and map four generative model families against seven real-world application domains. Finally, we advocate a software-hardware co-design approach, where deployment constraints are considered from the start of the design process, ensuring that the \"right model\" runs on the \"right hardware\" to serve the \"right application\", making generative AI deployment sustainable and accessible across a much broader range of platforms.",
    "published": "2026-08-27T14:41:50Z",
    "updated": "2026-08-27T14:41:50Z",
    "categories": [
      "cs.CV",
      "cs.AR"
    ],
    "url": "https://arxiv.org/abs/2608.27199"
  },
  {
    "id": "2608.27198",
    "title": "Knowledge Distillation Driven Semantic NOMA with GAN Refinement for 6G Robotic Vehicle Networks",
    "authors": [
      "Qifei Wang",
      "Zhen Gao",
      "Li Qiao",
      "Ziwei Wan",
      "De Mi",
      "Dapeng Li",
      "Ying Sun"
    ],
    "abstract": "To achieve sustainable intelligent mobility, 6G-empowered robotic vehicles (RVs) require high-fidelity visual perception under stringent bandwidth and energy constraints. Semantic communication offers a spectral-efficient solution but suffers from severe interference in uplink non-orthogonal multiple access (NOMA) RV networks. To address this, we propose a knowledge distillation-driven and generative models-enhanced NOMA framework for robust and green RV communications, named KDG-SemNOMA. First, we develop a ConvNeXt-based deep joint source-channel coding (DeepJSCC) architecture with an enhanced attention feature (AF) module for dynamic channel adaptation. Second, to mitigate interference without inference overhead, an orthogonal transmission teacher model guides the NOMA student model via a two-stage knowledge distillation strategy. Finally, to address the over-smoothing artifacts of pixel-wise optimization, we introduce a channel-conditional GAN (cGAN). By explicitly taking the Stage-I initial reconstruction and channel states as conditional inputs, this module refines coarse outputs into high-fidelity images with realistic textures. Experiments on FFHQ-256 demonstrate that KDG-SemNOMA significantly outperforms state-of-the-art methods in both pixel-level accuracy and perceptual fidelity.",
    "published": "2026-08-27T14:41:21Z",
    "updated": "2026-08-27T14:41:21Z",
    "categories": [
      "cs.IT",
      "cs.CV",
      "eess.IV"
    ],
    "url": "https://arxiv.org/abs/2608.27198"
  },
  {
    "id": "2608.27194",
    "title": "Surrounded by Friends: Design and Evaluation of Immersive Layouts of Egocentric Network for Visual Analytics",
    "authors": [
      "Kentaro Takahira",
      "Takanori Fujiwara",
      "Wong Kam-Kwai",
      "Kento Shigyo",
      "Leni Yang",
      "Hiroaki Natsukawa",
      "Yalong Yang",
      "Huamin Qu"
    ],
    "abstract": "This paper explores design considerations for egocentric network layouts in immersive environments, providing fresh empirical insights that enhance egocentric network analysis. An egocentric network focuses on the topological and semantic relationships around a focal node (ego) and its neighboring nodes (alters), targeting local sub-networks rather than the whole network. Traditional desktop environments, limited by display constraints, often face visual clutter as node numbers grow. Building on recent findings that immersive environments enhance network analysis, we explore layouts tailored for these spaces. We begin by identifying essential design properties and dimensions for egocentric network layouts, taking into account the unique features of immersive environments. Based on these, we design four layouts-Cube, Cylindrical, Radial, and Spherical-that vary across design dimensions. We evaluate these layouts in a user study with 24 participants completing egocentric analysis tasks. Our study suggests that Cube performed well for tasks focused on ego-alter connection strength. In contrast, Spherical was more effective for understanding alter topology, minimizing occlusion, and efficiently utilizing 3D space. These findings inform design implications for future immersive egocentric network layouts.",
    "published": "2026-08-27T14:38:43Z",
    "updated": "2026-08-27T14:38:43Z",
    "categories": [
      "cs.HC",
      "cs.ET",
      "cs.GR"
    ],
    "url": "https://arxiv.org/abs/2608.27194"
  },
  {
    "id": "2608.27190",
    "title": "Unsupervised Adaptation of 3D CT Foundation Models for 3D CBCT Segmentation",
    "authors": [
      "Gauthier Miralles",
      "Loic Le Folgoc",
      "Vincent Jugnon",
      "Pietro Gori"
    ],
    "abstract": "Accurate 3D segmentation of cone-beam CT (CBCT) is critical for interventional and radiation therapy applications, yet it remains limited by two compounding challenges: the scarcity of annotated CBCT data and the large domain shift from diagnostic CT. Interventional CBCT exhibits fundamental modality differences from conventional CT, driven by acquisition and physics effects as well as contrast-specific vascular content, thereby limiting effective cross-modality model transfer. We propose a novel unsupervised domain adaptation (UDA) framework based on redundancy-reducing feature alignment, enabling 3D CBCT segmentation with no target-domain annotations or inference-time adaptation. Our framework is architecture-agnostic, seamlessly adapting both CNN-based and ViT-based foundation models. We evaluate our method on two challenging CT-CBCT liver segmentation benchmarks: one for interventional vascular procedures and one for radiation therapy, demonstrating that even large-scale pretrained segmentation networks require explicit feature-space bridging to generalize across acquisition modalities, and that our approach consistently outperforms existing pretrained foundation model and UDA strategies. To support reproducibility and benchmarking, we release the liver segmentations for a public CBCT dataset, along with the code, trained models, and weights.",
    "published": "2026-08-27T14:33:59Z",
    "updated": "2026-08-27T14:33:59Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.27190"
  }
];
